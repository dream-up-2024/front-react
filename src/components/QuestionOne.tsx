import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const citiesAndDistricts = {
  서울특별시: [
    "강남구",
    "강동구",
    "강북구",
    "강서구",
    "관악구",
    "광진구",
    "구로구",
    "금천구",
    "노원구",
    "도봉구",
    "동대문구",
    "동작구",
    "마포구",
    "서대문구",
    "서초구",
    "성동구",
    "성북구",
    "송파구",
    "양천구",
    "영등포구",
    "용산구",
    "은평구",
    "종로구",
    "중구",
    "중랑구",
  ],
  부산광역시: [
    "강서구",
    "금정구",
    "기장군",
    "남구",
    "동구",
    "동래구",
    "부산진구",
    "북구",
    "사상구",
    "사하구",
    "서구",
    "수영구",
    "연제구",
    "영도구",
    "중구",
    "해운대구",
  ],
  대구광역시: [
    "남구",
    "달서구",
    "달성군",
    "동구",
    "북구",
    "서구",
    "수성구",
    "중구",
  ],
  인천광역시: [
    "강화군",
    "계양구",
    "미추홀구",
    "남동구",
    "동구",
    "부평구",
    "서구",
    "연수구",
    "옹진군",
    "중구",
  ],
  광주광역시: ["광산구", "남구", "동구", "북구", "서구"],
  대전광역시: ["대덕구", "동구", "서구", "유성구", "중구"],
  울산광역시: ["남구", "동구", "북구", "울주군", "중구"],
  세종특별자치시: [],
  경기도: [
    "가평군",
    "고양시",
    "과천시",
    "광명시",
    "광주시",
    "구리시",
    "군포시",
    "김포시",
    "남양주시",
    "동두천시",
    "부천시",
    "성남시",
    "수원시",
    "시흥시",
    "안산시",
    "안성시",
    "안양시",
    "양주시",
    "양평군",
    "여주시",
    "연천군",
    "오산시",
    "용인시",
    "의왕시",
    "의정부시",
    "이천시",
    "파주시",
    "평택시",
    "포천시",
    "하남시",
    "화성시",
  ],
  // 다른 시와 구 추가...
};

const QuestionOne: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const navigate = useNavigate();

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
    setSelectedDistrict(""); // 시가 변경되면 구 초기화
  };

  const handleDistrictChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedDistrict(event.target.value);
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
          <p className="text-lg">1</p>
          <div className="flex items-center">
            {Array.from({ length: 9 }).map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === 0 ? "bg-purple-500" : "bg-gray-300"
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
          현재 거주하고 계신 곳의 주소를 선택해주세요.
        </p>
      </div>
      <div className="w-full max-w-xs">
        <select
          value={selectedCity}
          onChange={handleCityChange}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        >
          <option value="">시/도 선택</option>
          {Object.keys(citiesAndDistricts).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <select
          value={selectedDistrict}
          onChange={handleDistrictChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          disabled={!selectedCity}
        >
          <option value="">구/군 선택</option>
          {selectedCity &&
            citiesAndDistricts[selectedCity].map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
        </select>
      </div>
      <button
        className="bg-gray-300 text-black py-2 px-4 rounded-full mt-8"
        onClick={() => navigate("/questiontwo")}
      >
        다음으로 넘어가기
      </button>
    </div>
  );
};

export default QuestionOne;
