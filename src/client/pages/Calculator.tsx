import React, { useEffect } from "react";
import CalculatorDisplay from "../components/CalculatorDisplay";
import CalculatorButton from "../components/CalculatorButton";
import CalculatorHeader from "../components/CalculatorHeader";
import { useDispatch, useSelector } from "react-redux";
import {
  appendDisplay,
  calculateResult,
  clearDisplay,
  removeLastCharacter,
  toggleSign,
} from "../redux/actions/calculatorAction";

type Event = React.MouseEvent<HTMLButtonElement>;

const Calculator = () => {
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

  const handleToggleSign = () => {
    dispatch(toggleSign());
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
  }, [displayValue]);

  return (
    <div className="calculator">
      <CalculatorHeader />
      <CalculatorDisplay displayValue={displayValue} />
      <CalculatorButton
        handleButtonClick={handleButtonClick}
        handleClearDisplay={handleClearDisplay}
        handleCalculateResult={handleCalculateResult}
        handleToggleSign={handleToggleSign}
        displayValue={displayValue}
      />
    </div>
  );
};

export default Calculator;
