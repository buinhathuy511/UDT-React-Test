import React from "react";
import "../styles/calculator.scss";

interface IProps {
  displayValue: string;
}

const CalculatorDisplay = ({ displayValue }: IProps) => {
  const calculateFontSize = (displayValue: string) => {
    console.log(displayValue, displayValue.length);
    if (displayValue.length > 14) {
      return "2rem";
    }
    if (displayValue.length > 10) {
      return "3rem";
    }
    if (displayValue.length > 7) {
      return "4rem";
    }
    return "6rem";
  };

  return (
    <div className="calculator-display">
      <input
        type="text"
        value={displayValue}
        style={{ fontSize: calculateFontSize(displayValue) }}
      />
    </div>
  );
};

export default CalculatorDisplay;
