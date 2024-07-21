import React from "react";

const MypageComponent: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="flex items-center p-4 bg-white shadow-md">
        <button className="mr-auto">
          {/* 뒤로가기 버튼 아이콘 (예: ←) */}
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
      <main className="flex flex-col items-center justify-center flex-1 p-4">
        <div className="w-full max-w-md">
          <div className="bg-gray-300 w-full h-40 rounded-md flex items-center justify-center mb-4">
            <span>복지카드 이미지</span>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">이름</label>
              <p className="text-lg">김드림</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">
                주민등록번호
              </label>
              <p className="text-lg">123456-1234567</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">
                장애명 / 장애 등급
              </label>
              <p className="text-lg">지적장애 1급</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">주소</label>
              <p className="text-lg">
                서울특별시 종로구 장자동 174-1 (59/1) 서당 더원 스토파크 103동
                1003호
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">
                유효기간
              </label>
              <p className="text-lg">2026. 12. 31.</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex justify-center p-4">
        <button className="bg-red-500 text-white py-2 px-4 rounded">
          로그아웃
        </button>
      </footer>
    </div>
  );
};

export default MypageComponent;
