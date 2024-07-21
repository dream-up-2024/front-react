import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EssencialQuestion: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    "안녕하세요 홍길동님. 이번 세션은 필수 질문입니다. 준비가 되시면 시작하기 버튼을 눌러주세요.",
    "학교를 다니거나 졸업하셨나요?",
    "재학 중인가요, 졸업하셨나요?",
    "학교 이름을 말씀해주시겠어요?",
    "이전에 일해본 경험이 있으신가요?",
    "어떤 직장을 다니셨나요?",
    "근무하신 기간과 담당 업무를 말씀해주시겠어요?",
    "어떻게 직장을 그만두게 되셨나요?",
    "신체 정보를 작성하시겠어요?",
    "자격증을 가지고 계신가요?",
    "컴퓨터를 사용하시나요?",
    "필수 검사를 모두 마치겠습니다!",
  ];

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(
      (prevIndex) => (prevIndex - 1 + questions.length) % questions.length,
    );
  };

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
      <div className="flex items-center justify-between w-full mt-4">
        <div className="flex items-center">
          <span className="mr-2">{currentQuestionIndex + 1}</span>
          <div className="flex space-x-1">
            {questions.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full ${index <= currentQuestionIndex ? "bg-black" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-16 mb-8">
        <p>{questions[currentQuestionIndex]}</p>
      </div>
      <div className="flex space-x-4">
        {currentQuestionIndex === 0 ? (
          <button
            onClick={handleNextQuestion}
            className="bg-white text-black py-2 px-4 rounded border"
          >
            시작하기
          </button>
        ) : (
          <>
            {currentQuestionIndex > 1 && (
              <button
                onClick={handlePreviousQuestion}
                className="bg-white text-black py-2 px-4 rounded border"
              >
                이전
              </button>
            )}
            {currentQuestionIndex < questions.length - 1 ? (
              <>
                <button
                  onClick={handleNextQuestion}
                  className="bg-white text-black py-2 px-4 rounded border"
                >
                  네
                </button>
                <button
                  onClick={handleNextQuestion}
                  className="bg-white text-black py-2 px-4 rounded border"
                >
                  아니오
                </button>
              </>
            ) : (
              <button
                onClick={() => navigate("/complete")}
                className="bg-white text-black py-2 px-4 rounded border"
              >
                검사완료
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default EssencialQuestion;
