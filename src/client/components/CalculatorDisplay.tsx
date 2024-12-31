import React from "react";
import { useSelector } from "react-redux";
import "../styles/calculator.scss";

const CalculatorDisplay = () => {
  const displayValue = useSelector((state: any) => state.displayValue) || "0";

  return (
    <div className="calculator-display">
      <input type="text" value={displayValue} />
    </div>
  );
};

export default CalculatorDisplay;
