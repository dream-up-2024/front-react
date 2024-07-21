import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmailLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 로직 구현
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="flex items-center w-full max-w-md p-4">
        <button onClick={() => navigate(-1)} className="mr-auto">
          {/* 뒤로가기 버튼 아이콘 */}
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
      <main className="flex flex-col items-center justify-center flex-1 w-full">
        <h1 className="text-4xl font-bold mb-8">Dream Up</h1>
        <div className="bg-white p-8 rounded shadow-md w-80">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              아이디
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="이메일을 입력하세요"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            로그인
          </button>
        </div>
      </main>
    </div>
  );
};

export default EmailLogin;
