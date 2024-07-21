import React, { useState } from "react";

const QuestionTwo: React.FC = () => {
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);

  const handleYesClick = () => {
    setShowAdditionalFields(true);
  };

  const handleNoClick = () => {
    setShowAdditionalFields(false);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white p-4">
      <div className="flex justify-between items-center w-full px-4 py-2">
        <button className="rounded-full p-2">
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
        <div className="flex space-x-4">
          <div className="flex items-center">
            <p className="text-lg">2</p>
            {Array.from({ length: 9 }).map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === 1 ? "bg-purple-500" : "bg-gray-300"
                } mx-1`}
              />
            ))}
          </div>
        </div>
        <button className="rounded-full p-2">
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
          학교를 다니는 중이거나 졸업하셨나요?
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
      {showAdditionalFields && (
        <div className="mt-8 w-full max-w-xs">
          <p className="text-red-500 text-center mb-4">
            가장 최근에 다닌 학교의 이름과 재학 기간을 말씀해주세요.
          </p>
          <label htmlFor="schoolName" className="block text-gray-700 mb-2">
            학교 이름
          </label>
          <input
            type="text"
            id="schoolName"
            placeholder="텍스트 입력해야하는 답변"
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
          />
          <label htmlFor="schoolPeriod" className="block text-gray-700 mb-2">
            재학 기간
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              id="schoolPeriodStart"
              placeholder="기간"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <span className="self-center">~</span>
            <input
              type="text"
              id="schoolPeriodEnd"
              placeholder="기간"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            onClick={() => alert("다음 화면으로 넘어갑니다.")}
            className="w-full mt-4 bg-purple-500 text-white py-2 px-4 rounded-full"
          >
            다음 화면으로 넘어가기
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionTwo;
