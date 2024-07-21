import React from "react";
import { useNavigate } from "react-router-dom";
import Tesseract from "tesseract.js";
import { useOCR } from "../context/OCRContext";

const IdAuthentication: React.FC = () => {
  const { data, setData } = useOCR();
  const navigate = useNavigate();

  const handleRetake = () => {
    navigate("/scan");
  };

  const handleConfirm = async () => {
    if (data.screenshot) {
      const img = new Image();
      img.src = data.screenshot;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const width = img.width;
        const height = img.height;

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

        // 그레이스케일 변환
        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
          const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
          data[i] = avg; // red
          data[i + 1] = avg; // green
          data[i + 2] = avg; // blue
        }
        ctx.putImageData(imageData, 0, 0);

        // 밝기 및 대비 조정
        ctx.filter = "brightness(1.2) contrast(1.5)";
        ctx.drawImage(canvas, 0, 0);

        const processedImage = canvas.toDataURL("image/jpeg", 1.0);

        Tesseract.recognize(processedImage, "eng", {
          logger: (m) => console.log(m),
        })
          .then(({ data: { text } }) => {
            const lines = text
              .split("\n")
              .map((line) => line.trim())
              .filter((line) => line);
            let parsedData = {
              name: "",
              birthdate: "",
              disabilityGrade: "",
              disabilityType: "",
              address: "",
              validityPeriod: "",
              issueDate: "",
            };

            lines.forEach((line) => {
              if (line.includes("이름"))
                parsedData.name = line.replace("이름", "").trim();
              else if (line.match(/\d{6}-\d{7}/))
                parsedData.birthdate = line.split("-")[0];
              else if (line.includes("등급")) parsedData.disabilityGrade = line;
              else if (line.includes("장애")) parsedData.disabilityType = line;
              else if (line.includes("주소"))
                parsedData.address = line.replace("주소", "").trim();
              else if (line.match(/\d{4}\.\d{2}\.\d{2}/)) {
                if (parsedData.validityPeriod === "")
                  parsedData.validityPeriod = line;
                else parsedData.issueDate = line;
              }
            });

            setData({ ...data, ...parsedData });
            navigate("/resume");
          })
          .catch((err) => console.error(err));
      };
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-4">
        {data.screenshot && (
          <img
            src={data.screenshot}
            alt="Screenshot"
            className="w-full h-auto mb-4 rounded-md shadow-md object-contain"
          />
        )}
        <p className="text-center mb-4">촬영이 정상적으로 되었나요?</p>
        <div className="flex justify-between">
          <button
            onClick={handleRetake}
            className="w-1/2 bg-gray-300 text-black py-2 px-4 rounded mr-2"
          >
            다시 촬영하기
          </button>
          <button
            onClick={handleConfirm}
            className="w-1/2 bg-black text-white py-2 px-4 rounded"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default IdAuthentication;
