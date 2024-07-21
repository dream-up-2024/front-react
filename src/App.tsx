import { useState } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import ScanComponent from "./components/ScanComponent";
import ChatbotComponent from "./components/ChatbotComponent";
import EmailLogin from "./components/EmailLogin";
import ResumeComponent from "./components/ResumeComponent";
import HomeComponent from "./components/HomeComponent";
import MypageComponent from "./components/MypageComponent";
import IdAuthentication from "./components/IdAuthentication";
import NewaccountComponent from "./components/NewaccountComponent";
import EmailAuthentication from "./components/EmailAuthentication";
import EssencialQuestion from "./components/EssencialQuestion";
import SearchComponent from "./components/SearchComponent";
import QuestionStart from "./components/QuestionStart";
import QuestionOne from "./components/QuestionOne";
import QuestionTwo from "./components/QuestionTwo";
import QuestionFive from "./components/QuestionFive";
import { OCRProvider } from "./context/OCRContext";

function App() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center gap-8 py-16 max-w-[1280px] mx-auto">
      <h1 className="text-4xl font-bold">Dream Up</h1>
      <div className="flex flex-row items-center gap-6">
        <button onClick={() => navigate("/login")}>로그인</button>
        <button onClick={() => navigate("/newaccount")}>회원가입</button>
      </div>
    </main>
  );
}

function Main() {
  return (
    <OCRProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<EmailLogin />} />
          <Route path="/scan" element={<ScanComponent />} />
          <Route path="/chatbot" element={<ChatbotComponent />} />
          <Route path="/resume" element={<ResumeComponent />} />
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/mypage" element={<MypageComponent />} />
          <Route
            path="/emailauthentication"
            element={<EmailAuthentication />}
          />
          <Route path="/newaccount" element={<NewaccountComponent />} />
          <Route path="/essentialquestion" element={<EssencialQuestion />} />
          <Route path="/searchcomponent" element={<SearchComponent />} />
          <Route path="/questionstart" element={<QuestionStart />} />
          <Route path="/questionone" element={<QuestionOne />} />
          <Route path="/questiontwo" element={<QuestionTwo />} />
          <Route path="/questionfive" element={<QuestionFive />} />

          <Route path="/idauthentication" element={<IdAuthentication />} />
        </Routes>
      </Router>
    </OCRProvider>
  );
}

export default Main;
