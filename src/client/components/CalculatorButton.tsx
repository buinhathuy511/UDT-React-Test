import React from "react";
import "../styles/calculator.scss";

const CalculatorButton = () => {
  return (
    <div className="calculator-button-container">
      <button className="button-function">AC</button>
      <button className="button-function">+/-</button>
      <button className="button-function">%</button>
      <button className="button-operator">÷</button>

      <button className="button-number">7</button>
      <button className="button-number">8</button>
      <button className="button-number">9</button>
      <button className="button-operator">x</button>

      <button className="button-number">4</button>
      <button className="button-number">5</button>
      <button className="button-number">6</button>
      <button className="button-operator">-</button>

      <button className="button-number">1</button>
      <button className="button-number">2</button>
      <button className="button-number">3</button>
      <button className="button-operator">+</button>

      <button className="button-number" style={{ gridColumn: "span 2" }}>
        0
      </button>
      <button className="button-number">,</button>
      <button className="button-operator">=</button>
    </div>
  );
};

export default CalculatorButton;
