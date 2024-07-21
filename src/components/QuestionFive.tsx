import React from "react";
import { useNavigate } from "react-router-dom";

const QuestionFive: React.FC = () => {
  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate("/nextRouteForYes"); // '네' 버튼을 클릭했을 때 이동할 라우트로 수정해주세요.
  };

  const handleNoClick = () => {
    navigate("/nextRouteForNo"); // '아니오' 버튼을 클릭했을 때 이동할 라우트로 수정해주세요.
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white p-4">
      <div className="flex justify-between items-center w-full px-4 py-2">
        <button onClick={() => navigate(-1)} className="rounded-full p-2">
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="flex items-center">
          {Array.from({ length: 9 }).map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === 4 ? "bg-purple-500" : "bg-gray-300"
              } mx-1`}
            />
          ))}
        </div>
        <button onClick={() => navigate("/home")} className="rounded-full p-2">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="text-center mt-8 mb-4">
        <p className="text-lg font-semibold">
          가지고 계신 <span className="text-purple-500">자격증</span>이 있나요?
        </p>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handleYesClick}
          className="bg-white text-black py-2 px-4 rounded border"
        >
          네
        </button>
        <button
          onClick={handleNoClick}
          className="bg-white text-black py-2 px-4 rounded border"
        >
          아니오
        </button>
      </div>
    </div>
  );
};

export default QuestionFive;
