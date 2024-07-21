import React, { createContext, useContext, useState, ReactNode } from "react";

interface OCRContextType {
  data: { [key: string]: string };
  setData: (data: { [key: string]: string }) => void;
}

const OCRContext = createContext<OCRContextType | undefined>(undefined);

export const OCRProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<{ [key: string]: string }>({});

  return (
    <OCRContext.Provider value={{ data, setData }}>
      {children}
    </OCRContext.Provider>
  );
};

export const useOCR = () => {
  const context = useContext(OCRContext);
  if (context === undefined) {
    throw new Error("useOCR must be used within a OCRProvider");
  }
  return context;
};
