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
        let result = eval(value || "");

        // lưu vào localStorage
        const history = JSON.parse(localStorage.getItem("history") || "[]");
        history.push(value + " = " + result);
        localStorage.setItem("history", JSON.stringify(history));

        return {
          ...state,
          displayValue: result.toString(),
        };
      } catch (error) {
        return {
          ...state,
          displayValue: "Error",
        };
      }
    default:
      return state;
  }
};

export default rootReducer;
