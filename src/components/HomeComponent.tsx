import React from "react";
import { useNavigate } from "react-router-dom";

const HomeComponent: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white p-4">
      <div className="flex justify-between items-center w-full px-4 py-2">
        <button className="rounded-full p-2">
          {/* 동그라미 버튼 */}
          <img
            src="/images/home.jpg"
            alt="Home"
            className="w-8 h-8 rounded-full"
          />
        </button>
        <div className="flex space-x-4">
          <button className="p-2" onClick={() => navigate("/searchcomponent")}>
            {/* 돋보기 모양 버튼 */}
            <img src="/images/search.jpg" alt="Search" className="w-6 h-6" />
          </button>
          <button className="p-2">
            {/* 종 모양 버튼 */}
            <img
              src="/images/bell.jpg"
              alt="Notifications"
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>
      <div className="text-center mt-8">
        <h1 className="text-2xl font-bold">안녕하세요 홍길동님!</h1>
        <p className="mt-2">꿈을 현실로 만드는 준비를 해보세요</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <button
          className="bg-white p-4 rounded shadow"
          onClick={() => navigate("/resume")}
        >
          <img
            src="/images/doughnut.jpg"
            alt="이력서 작성"
            className="w-full h-32 object-cover rounded mb-2"
          />
          <p className="font-bold text-center">이력서 작성</p>
          <p className="text-center text-sm">이력서 내용을 함께 작성해 봐요!</p>
        </button>
        <button
          className="bg-white p-4 rounded shadow"
          onClick={() => navigate("/coverletter")}
        >
          <img
            src="/images/dreami.jpg"
            alt="자소서"
            className="w-full h-32 object-cover rounded mb-2"
          />
          <p className="font-bold text-center">자소서</p>
          <p className="text-center text-sm">드리미와 함께 자소서 작성하기</p>
        </button>
      </div>
      <div className="mt-8 w-full px-4">
        <h2 className="text-lg font-bold">현재 구인중인 공고들이에요!</h2>
        <div className="grid grid-cols-1 gap-4 mt-4">
          {/* 여기에 5개의 구직 사이트로 이동할 수 있는 버튼을 추가하세요 */}
          <button className="bg-white p-4 rounded shadow flex items-center">
            <img
              src="/images/job1.jpg"
              alt="Job 1"
              className="w-12 h-12 object-cover rounded-full mr-4"
            />
            <div>
              <p className="font-bold">CJ ENM</p>
              <p className="text-sm">공고 타이틀이 들어가는 자리입니다.</p>
            </div>
          </button>
          <button className="bg-white p-4 rounded shadow flex items-center">
            <img
              src="/images/job1.jpg"
              alt="Job 1"
              className="w-12 h-12 object-cover rounded-full mr-4"
            />
            <div>
              <p className="font-bold">CJ ENM</p>
              <p className="text-sm">공고 타이틀이 들어가는 자리입니다.</p>
            </div>
          </button>
          <button className="bg-white p-4 rounded shadow flex items-center">
            <img
              src="/images/job1.jpg"
              alt="Job 1"
              className="w-12 h-12 object-cover rounded-full mr-4"
            />
            <div>
              <p className="font-bold">CJ ENM</p>
              <p className="text-sm">공고 타이틀이 들어가는 자리입니다.</p>
            </div>
          </button>
          <button className="bg-white p-4 rounded shadow flex items-center">
            <img
              src="/images/job1.jpg"
              alt="Job 1"
              className="w-12 h-12 object-cover rounded-full mr-4"
            />
            <div>
              <p className="font-bold">CJ ENM</p>
              <p className="text-sm">공고 타이틀이 들어가는 자리입니다.</p>
            </div>
          </button>
          <button className="bg-white p-4 rounded shadow flex items-center">
            <img
              src="/images/job1.jpg"
              alt="Job 1"
              className="w-12 h-12 object-cover rounded-full mr-4"
            />
            <div>
              <p className="font-bold">CJ ENM</p>
              <p className="text-sm">공고 타이틀이 들어가는 자리입니다.</p>
            </div>
          </button>
          {/* 나머지 4개의 버튼을 추가하세요 */}
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
