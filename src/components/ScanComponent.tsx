import React, { useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";
import { useOCR } from "../context/OCRContext";

const ScanComponent: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);
  const navigate = useNavigate();
  const { setData } = useOCR();

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      // 이미지 로드 후 자르기
      const img = new Image();
      img.src = imageSrc;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const width = img.width;
        const height = img.height;

        // 캔버스 크기 설정
        canvas.width = width;
        canvas.height = height;

        // 원본 이미지를 캔버스에 그리기
        ctx?.drawImage(img, 0, 0, width, height);

        // 크롭 영역 설정 (위치와 크기를 조정)
        const cropX = 0;
        const cropY = 0;
        const cropWidth = width;
        const cropHeight = (height * 2) / 4;

        // 크롭된 이미지를 캔버스에 다시 그리기
        const croppedCanvas = document.createElement("canvas");
        const croppedCtx = croppedCanvas.getContext("2d");
        croppedCanvas.width = cropWidth;
        croppedCanvas.height = cropHeight;
        croppedCtx?.drawImage(
          canvas,
          cropX,
          cropY,
          cropWidth,
          cropHeight,
          0,
          0,
          cropWidth,
          cropHeight,
        );

        // 크롭된 이미지를 Data URL로 변환
        const croppedImageUrl = croppedCanvas.toDataURL("image/jpeg", 1.0);

        // OCR 컨텍스트에 크롭된 이미지 저장
        setData({ screenshot: croppedImageUrl });

        // IdAuthentication 화면으로 이동
        navigate("/idauthentication");
      };
    }
  }, [webcamRef, setData, navigate]);

  const videoConstraints = {
    facingMode: "environment",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700 text-white">
      <h2 className="text-xl mb-4">카드를 영역에 맞춰주세요</h2>
      <div className="bg-white w-80 h-48 mb-4 rounded-md overflow-hidden">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width="100%"
          height="100%"
          videoConstraints={videoConstraints}
        />
      </div>
      <button
        onClick={capture}
        className="mb-6 bg-black text-white py-2 px-4 rounded"
      >
        카메라 초점을 맞춰주세요!
      </button>
      <button
        className="border border-white text-white py-2 px-4 rounded mb-4"
        onClick={() => navigate("/resume")}
      >
        직접 입력하기
      </button>
      <button
        className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center"
        onClick={capture}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  );
};

export default ScanComponent;
