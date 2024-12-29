import React from "react";
import { Route, Routes } from "react-router-dom";
import Calculator from "./pages/Calculator";
import History from "./pages/History";
import HelloWorld from "./pages/HelloWorld";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HelloWorld />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}

export default App;
