const initialState = {
  displayValue: "0",
};

interface IAction {
  type: string;
  payload?: string;
}

interface IState {
  displayValue: string;
}

const rootReducer = (state: IState = initialState, action: IAction): IState => {
  switch (action.type) {
    case "APPEND_DISPLAY":
      let newDisplayValue: string;
      if (state.displayValue === "0") {
        newDisplayValue = action.payload || "";
      } else {
        newDisplayValue = state.displayValue + action.payload;
      }
      return {
        ...state,
        displayValue: newDisplayValue,
      };
    case "CLEAR_DISPLAY":
      return {
        ...state,
        displayValue: "",
      };
    case "REMOVE_LAST_CHARACTER":
      return {
        ...state,
        displayValue: state.displayValue.slice(0, -1),
      };
    case "CALCULATE_RESULT":
      try {
        console.log(action.payload); // string
        let value: string = action.payload || "";
        for (let i = 0; i < value.length; i++) {
          if (value[i] === "x") {
            value = value.replace("x", "*");
          } else if (value[i] === "÷") {
            value = value.replace("÷", "/");
          } else if (value[i] === "%") {
            value = value.replace("%", "/100");
          }
        }
        let calculationResult = eval(value || "");

        const [integerPart, decimalPart] = calculationResult
          .toString()
          .split(".");
        if (decimalPart && decimalPart.length > 4) {
          calculationResult = parseFloat(calculationResult.toFixed(4));
        }
        const finalResult = calculationResult;

        const history = JSON.parse(localStorage.getItem("history") || "[]");
        history.push(value + " = " + finalResult);
        localStorage.setItem("history", JSON.stringify(history));

        return {
          ...state,
          displayValue: finalResult.toString(),
        };
      } catch (error) {
        return {
          ...state,
          displayValue: "Error",
        };
      }
    case "TOGGLE_SIGN":
      let newValue: string;
      if (state.displayValue[0] === "-") {
        newValue = state.displayValue.slice(1);
      } else {
        newValue = "-" + state.displayValue;
      }
      return {
        ...state,
        displayValue: newValue,
      };
    default:
      return state;
  }
};

export default rootReducer;
