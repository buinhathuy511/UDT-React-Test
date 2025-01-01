import React, { useState, useEffect } from "react";
import "../styles/calculator.scss";

const History = () => {
  const [history, setHistory] = useState<string[]>([]);

  // Đọc lịch sử từ localStorage khi component được mount
  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("history") || "[]");
    setHistory(storedHistory);

    // Lắng nghe sự thay đổi của localStorage
    const storageEventListener = () => {
      const updatedHistory = JSON.parse(
        localStorage.getItem("history") || "[]"
      );
      setHistory(updatedHistory);
    };

    // Lắng nghe sự kiện thay đổi localStorage
    window.addEventListener("storage", storageEventListener);

    // Cleanup listener khi component bị unmount
    return () => {
      window.removeEventListener("storage", storageEventListener);
    };
  }, []);

  const handleClearHistory = () => {
    localStorage.setItem("history", "[]");
    setHistory([]);
  };

  return (
    <div className="calculator-history">
      <h1 style={{ fontFamily: "monospace" }}>History</h1>
      <ul>
        {history.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button className="button-clear-history" onClick={handleClearHistory}>
        Clear
      </button>
    </div>
  );
};

export default History;
