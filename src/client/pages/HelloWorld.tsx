import React from "react";
import { useNavigate } from "react-router-dom";

const HelloWorld = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/calculator");
  };

  return (
    <div>
      <h1>
        Click here to go to the{" "}
        <a
          onClick={handleNavigate}
          style={{
            cursor: "pointer",
            color: "red",
            textDecoration: "underline",
          }}
        >
          Calculate page
        </a>
      </h1>
    </div>
  );
};

export default HelloWorld;
