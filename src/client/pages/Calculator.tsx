import React from "react";
import CalculatorDisplay from "../components/CalculatorDisplay";
import CalculatorButton from "../components/CalculatorButton";
import CalculatorHeader from "../components/CalculatorHeader";

const Calculator = () => {
  return (
    <div className="calculator">
      <CalculatorHeader />
      <CalculatorDisplay />
      <CalculatorButton />
    </div>
  );
};

export default Calculator;
