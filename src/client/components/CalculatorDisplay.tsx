import React from "react";
import { useSelector } from "react-redux";
import "../styles/calculator.scss";

interface IProps {
  displayValue: string;
}

const CalculatorDisplay = ({ displayValue }: IProps) => {
  return (
    <div className="calculator-display">
      <input type="text" value={displayValue} />
    </div>
  );
};

export default CalculatorDisplay;
