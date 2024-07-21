import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewaccountComponent: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(prevState => !prevState);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-4">
      <header className="flex items-center mb-4">
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
      <main className="flex flex-col items-center flex-1">
        <h2 className="text-xl font-bold mb-6">새로운 계정을 만듭니다.</h2>
        <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">이메일 주소</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700">비밀번호 (8자 이상)</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 3a7 7 0 016.918 5H3.082A7 7 0 0110 3zM3.646 4.646a.5.5 0 01.708 0L10 10.293l5.646-5.647a.5.5 0 11.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" />
              </svg>
            </button>
          </div>
          <div className="mb-4 relative">
            <label htmlFor="confirmPassword" className="block text-gray-700">비밀번호 확인</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <button
              type="button"
              onClick={toggleShowConfirmPassword}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 3a7 7 0 016.918 5H3.082A7 7 0 0110 3zM3.646 4.646a.5.5 0 01.708 0L10 10.293l5.646-5.647a.5.5 0 11.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" />
              </svg>
            </button>
          </div>
          <div className="text-center text-sm text-gray-600 mb-4">
            위의 내용을 모두 동의하시는 경우에만 다음 단계로 진행해 주세요.
          </div>
          <div className="text-center text-sm text-gray-600 mb-6">
            <a href="#" className="text-indigo-600 hover:text-indigo-500">이용약관</a>과 <a href="#" className="text-indigo-600 hover:text-indigo-500">개인정보처리방침</a>에 동의하셔야 합니다.
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            동의하고 가입
          </button>
        </div>
      </main>
    </div>
  );
};

export default NewaccountComponent;
