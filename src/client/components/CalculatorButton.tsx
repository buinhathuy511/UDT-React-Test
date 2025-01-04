import React from "react";
import "../styles/calculator.scss";

type Event = React.MouseEvent<HTMLButtonElement>;

interface IProps {
  handleButtonClick: (event: Event) => void;
  handleClearDisplay: () => void;
  handleCalculateResult: () => void;
  handleToggleSign: () => void;
  displayValue: string;
}

const buttons = [
  {
    className: "button-function",
    label: "AC",
    key: "Backspace",
    action: "clear",
  },
  {
    className: "button-function",
    label: "+/-",
    key: "+/-",
    action: "toggleSign",
  },
  { className: "button-function", label: "%", key: "%" },
  { className: "button-operator", label: "÷", key: "/" },

  { className: "button-number", label: "7", key: "7" },
  { className: "button-number", label: "8", key: "8" },
  { className: "button-number", label: "9", key: "9" },
  { className: "button-operator", label: "x", key: "*" },

  { className: "button-number", label: "4", key: "4" },
  { className: "button-number", label: "5", key: "5" },
  { className: "button-number", label: "6", key: "6" },
  { className: "button-operator", label: "-", key: "-" },

  { className: "button-number", label: "1", key: "1" },
  { className: "button-number", label: "2", key: "2" },
  { className: "button-number", label: "3", key: "3" },
  { className: "button-operator", label: "+", key: "+" },

  {
    className: "button-number",
    label: "0",
    key: "0",
    style: { gridColumn: "span 2" },
  },
  { className: "button-number", label: ".", key: "." },
  {
    className: "button-operator",
    label: "=",
    key: "Enter",
    action: "calculate",
  },
];

const CalculatorButton = ({
  handleButtonClick,
  handleClearDisplay,
  handleCalculateResult,
  handleToggleSign,
  displayValue,
}: IProps) => {
  const handleAction = (button: (typeof buttons)[number], event: Event) => {
    if (button.action === "clear") {
      handleClearDisplay();
    } else if (button.action === "calculate") {
      handleCalculateResult();
    } else if (button.action === "toggleSign") {
      handleToggleSign();
    } else {
      handleButtonClick(event);
    }
  };

  return (
    <div className="calculator-button-container">
      {buttons.map((button) => {
        return (
          <button
            key={button.key}
            className={button.className}
            onClick={(event) => {
              handleAction(button, event);
            }}
            data-key={button.key}
            style={button.style}
          >
            {button.label === "AC" && displayValue.length > 1
              ? "C"
              : button.label}
          </button>
        );
      })}
    </div>
  );
};

export default CalculatorButton;
