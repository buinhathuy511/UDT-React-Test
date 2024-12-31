export const appendDisplay = (value: string) => {
  return {
    type: "APPEND_DISPLAY",
    payload: value,
  };
};

export const clearDisplay = () => {
  return {
    type: "CLEAR_DISPLAY",
  };
};

export const removeLastCharacter = () => {
  return {
    type: "REMOVE_LAST_CHARACTER",
  };
};

export const calculateResult = (value: string) => {
  return {
    type: "CALCULATE_RESULT",
    payload: value,
  };
};
