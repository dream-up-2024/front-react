import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchComponent: React.FC = () => {
  const navigate = useNavigate();
  const recommendedKeywords = [
    "그래픽디자인",
    "편집디자인",
    "홍보디자인",
    "디자인아르바이트",
    "디자인기획",
    "구글",
    "토스",
    "당근마켓",
    "다음",
    "네이버클라우드",
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleKeywordClick = (keyword: string) => {
    setSearchTerm(keyword);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white p-4">
      <button
        onClick={() => navigate("/home")}
        className="self-start ml-4 mt-4"
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <h2 className="text-xl font-bold mb-4 mt-8 text-center">
        홍길동님에게 더 맞는 공고를 찾아드릴게요
      </h2>
      <div className="relative w-full max-w-md mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="검색어를 입력하세요"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <button className="absolute right-2 top-2">
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
              d="M10 14l2-2m0 0l2-2m-2 2h8m-8 0V6m0 8v8m-8-8h8m0 0H6m4 0V6"
            />
          </svg>
        </button>
      </div>
      <h3 className="text-lg font-semibold mb-4">추천 검색어</h3>
      <div className="flex flex-wrap gap-2">
        {recommendedKeywords.map((keyword, index) => (
          <button
            key={index}
            onClick={() => handleKeywordClick(keyword)}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full"
          >
            {keyword}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
