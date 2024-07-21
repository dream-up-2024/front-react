import React, { useState, useEffect } from "react";

const ChatbotComponent: React.FC = () => {
  const [listening, setListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState("");
  const [messageSpoken, setMessageSpoken] = useState(false);

  const messages = [
    "안녕하세요 홍길동님. 드림업을 찾아주셔서 감사합니다. 저는 홍길동님의 구직 활동을 돕는 드리미라고 합니다. 친구와 얘기하듯이 편하게 말씀해주시면 제가 중요한 정보를 모아서 자기소개서로 만들어드릴게요. 상담 내용은 홍길동님의 이력서 작성에만 사용되고 절대 다른 곳에 유출되지 않으니 안심하세요.",
  ];

  useEffect(() => {
    if (!messageSpoken) {
      const audio = new Audio("/voices/voice1.mp3");
      audio.play();
      setMessageSpoken(true);
    }
  }, [messageSpoken]);

  const startRecognition = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "ko-KR";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      console.log("User said: ", speechResult);
      setRecognizedText(speechResult);
      // 여기서 speechResult를 서버로 보내거나, 임시로 저장할 수 있습니다.
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error detected: ", event.error);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
    setListening(true);
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-white">
      <div className="flex-grow"></div>
      <div className="flex items-center justify-center mb-8">
        <button
          onClick={startRecognition}
          className={`w-16 h-16 rounded-full ${listening ? "bg-red-500" : "bg-blue-500"} text-white flex items-center justify-center shadow-lg`}
          style={{
            backgroundImage: "linear-gradient(to right, #4CAF50, #2196F3)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 1v22m9-11H3"
            />
          </svg>
        </button>
      </div>
      <div className="flex-grow"></div>
      <div className="p-4">
        <p>{recognizedText}</p>
      </div>
    </div>
  );
};

export default ChatbotComponent;
