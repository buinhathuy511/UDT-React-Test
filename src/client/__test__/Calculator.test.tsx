import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../redux/reducers/calculatorReducer";
import Calculator from "../pages/Calculator";

const renderWithRedux = (component: React.ReactNode) => {
  const store = configureStore({ reducer: rootReducer });
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe("Calculator", () => {
  test("should render Calculator button", () => {
    renderWithRedux(<Calculator />);
    expect(screen.getByText("AC")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("+")).toBeInTheDocument();
    expect(screen.getByText("-")).toBeInTheDocument();
  });

  test("should Addition numbers", () => {
    renderWithRedux(<Calculator />);
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("="));
    const display = screen.getByDisplayValue("3");
    expect(display).toBeInTheDocument();
  });
});
