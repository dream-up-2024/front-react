import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EmailAuthentication: React.FC = () => {
  const [timer, setTimer] = useState(600); // 10분을 초로 변환
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleResendCode = () => {
    setTimer(600); // 타이머를 10분(600초)으로 초기화
    setShowPopup(true); // 팝업 표시
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-4">
      <header className="flex items-center mb-4">
        <button onClick={() => navigate(-1)} className="mr-auto">
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
      </header>
      <main className="flex flex-col items-center flex-1">
        <h2 className="text-xl font-bold mb-6">인증코드를 확인해 주세요.</h2>
        <p className="text-center text-gray-600 mb-6">
          유효 이메일 확인을 위해 아래 이메일로 발송된 인증 코드를 입력해
          주세요.
        </p>
        <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700">이메일</label>
            <input
              type="email"
              value="dreamup@naver.com"
              disabled
              className="mt-1 block w-full bg-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
            />
          </div>
          <button
            onClick={handleResendCode}
            className="w-full bg-white border border-gray-300 text-black py-2 px-4 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none mb-4"
          >
            인증코드 다시 보내기
          </button>
          <div className="mb-4 relative">
            <label htmlFor="verificationCode" className="block text-gray-700">
              인증코드
            </label>
            <input
              type="text"
              id="verificationCode"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
            />
            <span className="absolute right-0 top-1/2 transform -translate-y-1/2 text-purple-500 pr-3">
              {formatTime(timer)}
            </span>
          </div>
        </div>
      </main>
      <footer className="flex justify-center p-4">
        <button className="w-full max-w-md bg-purple-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-purple-700 focus:outline-none">
          다음
        </button>
      </footer>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md text-center">
            <p className="mb-4">인증코드가 재전송되었습니다!</p>
            <button
              onClick={closePopup}
              className="bg-purple-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-purple-700 focus:outline-none"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailAuthentication;
