import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  appendDisplay,
  clearDisplay,
  removeLastCharacter,
  calculateResult,
} from "../redux/actions/calculatorAction";
import "../styles/calculator.scss";

type Event = React.MouseEvent<HTMLButtonElement>;

const CalculatorButton = () => {
  const dispatch = useDispatch();
  const displayValue = useSelector((state: any) => state.displayValue || "0");

  const handleButtonClick = (event: Event) => {
    const value = event.currentTarget.innerText;
    dispatch(appendDisplay(value));
  };

  const handleClearDisplay = () => {
    if (displayValue.length === 1) {
      dispatch(clearDisplay());
    } else {
      dispatch(removeLastCharacter());
    }
  };

  const handleCalculateResult = () => {
    dispatch(calculateResult(displayValue));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const button = document.querySelector<HTMLButtonElement>(
        `button[data-key="${event.key}"]`
      );
      if (button) {
        button.click();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="calculator-button-container">
      <button
        className="button-function"
        onClick={handleClearDisplay}
        data-key="Backspace"
      >
        {displayValue.length === 1 ? "AC" : "C"}
      </button>
      <button className="button-function" onClick={handleButtonClick}>
        +/-
      </button>
      <button
        className="button-function"
        onClick={handleButtonClick}
        data-key="%"
      >
        %
      </button>
      <button
        className="button-operator"
        onClick={handleButtonClick}
        data-key="/"
      >
        ÷
      </button>

      <button
        className="button-number"
        onClick={handleButtonClick}
        data-key="7"
      >
        7
      </button>
      <button
        className="button-number"
        onClick={handleButtonClick}
        data-key="8"
      >
        8
      </button>
      <button
        className="button-number"
        onClick={handleButtonClick}
        data-key="9"
      >
        9
      </button>
      <button
        className="button-operator"
        onClick={handleButtonClick}
        data-key="*"
      >
        x
      </button>

      <button
        className="button-number"
        onClick={handleButtonClick}
        data-key="4"
      >
        4
      </button>
      <button
        className="button-number"
        onClick={handleButtonClick}
        data-key="5"
      >
        5
      </button>
      <button
        className="button-number"
        onClick={handleButtonClick}
        data-key="6"
      >
        6
      </button>
      <button
        className="button-operator"
        onClick={handleButtonClick}
        data-key="-"
      >
        -
      </button>

      <button
        className="button-number"
        onClick={handleButtonClick}
        data-key="1"
      >
        1
      </button>
      <button
        className="button-number"
        onClick={handleButtonClick}
        data-key="2"
      >
        2
      </button>
      <button
        className="button-number"
        onClick={handleButtonClick}
        data-key="3"
      >
        3
      </button>
      <button
        className="button-operator"
        onClick={handleButtonClick}
        data-key="+"
      >
        +
      </button>

      <button
        className="button-number"
        style={{ gridColumn: "span 2" }}
        onClick={handleButtonClick}
        data-key="0"
      >
        0
      </button>
      <button
        className="button-number"
        onClick={handleButtonClick}
        data-key="."
      >
        ,
      </button>
      <button
        className="button-operator"
        onClick={handleCalculateResult}
        data-key="Enter"
      >
        =
      </button>
    </div>
  );
};

export default CalculatorButton;
