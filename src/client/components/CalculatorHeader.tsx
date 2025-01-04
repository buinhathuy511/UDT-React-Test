import React from "react";
import "../styles/calculator.scss";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";

const CalculatorHeader = () => {
  const navigate = useNavigate();

  const handleHistoryClick = () => {
    window.open("/history", "_blank");
  };

  return (
    <div className="calculator-header">
      <button className="red"></button>
      <button className="yellow"></button>
      <button className="green"></button>
      <button className="history" onClick={handleHistoryClick}>
        <FontAwesomeIcon icon={faClockRotateLeft}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default CalculatorHeader;
