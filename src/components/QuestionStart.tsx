import React from "react";
import { useNavigate } from "react-router-dom";

const QuestionStart: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <button onClick={() => navigate(-1)} className="self-start ml-4 mt-4">
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
      <div className="text-center mt-8">
        <h2 className="text-2xl font-bold">안녕하세요, 드림님!</h2>
        <p className="mt-2">답변만 하시면 저희가 이력서를 만들어 드려요.</p>
      </div>
      <button
        onClick={() => navigate("/questionone")}
        className="bg-purple-500 text-white py-2 px-4 rounded-full mt-8"
      >
        시작하기!
      </button>
    </div>
  );
};

export default QuestionStart;
