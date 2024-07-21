import React, { useEffect, useState } from "react";
import { useOCR } from "../context/OCRContext";

const ResumeComponent: React.FC = () => {
  const { data } = useOCR();
  const [formData, setFormData] = useState({
    name: "",
    birthdate: "",
    disabilityGrade: "",
    disabilityType: "",
    address: "",
    validityPeriod: "",
    issueDate: "",
  });

  useEffect(() => {
    setFormData({
      name: data.name || "",
      birthdate: data.birthdate || "",
      disabilityGrade: data.disabilityGrade || "",
      disabilityType: data.disabilityType || "",
      address: data.address || "",
      validityPeriod: data.validityPeriod || "",
      issueDate: data.issueDate || "",
    });
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-xl mb-4">내 카드와 내용이 동일한지 확인해 보세요!</h2>
      <div className="bg-white p-8 rounded shadow-md w-80">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            이름
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="birthdate" className="block text-gray-700">
            주민등록번호
          </label>
          <input
            type="text"
            id="birthdate"
            value={formData.birthdate}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="disabilityGrade" className="block text-gray-700">
            장애등급
          </label>
          <input
            type="text"
            id="disabilityGrade"
            value={formData.disabilityGrade}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="disabilityType" className="block text-gray-700">
            장애유형
          </label>
          <input
            type="text"
            id="disabilityType"
            value={formData.disabilityType}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700">
            주소
          </label>
          <input
            type="text"
            id="address"
            value={formData.address}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="validityPeriod" className="block text-gray-700">
            유효기간
          </label>
          <input
            type="text"
            id="validityPeriod"
            value={formData.validityPeriod}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="issueDate" className="block text-gray-700">
            발급일자
          </label>
          <input
            type="text"
            id="issueDate"
            value={formData.issueDate}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            readOnly
          />
        </div>
        <button className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
          회원가입 완료하기
        </button>
      </div>
    </div>
  );
};

export default ResumeComponent;
