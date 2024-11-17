import React, { useEffect, useState } from "react";
import Display from "./Display";
import Button from "./Button";
import calculate from "../util/Calculate"; // Separate calculate function
import "../App.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleChange = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "❌") {
      setInput((prevValue) => prevValue.slice(0, -1));
    } else if (value === "=") {
      try {
        if(input){
        const result = calculate(input);
        setInput(result);}
        else {setInput("Error")}
      } catch (err) {
        setInput("Error");
      }
    } else {
      setInput((prevValue) => (prevValue || "") + value);
    }
  };

  useEffect(() => {
    const handleKeypress = (event) => {
      const validKeys = [
        "C",
        "Backspace",
        "%",
        "/",
        "*",
        "-",
        "+",
        "Enter",
        ".",
        "=",
        ...Array.from({ length: 10 }, (_, i) => i.toString()),
      ];

      if (validKeys.includes(event.key)) {
        if (event.key === "Backspace") {
          handleChange("❌");
        } else if (event.key === "Enter") {
          handleChange("=");
        } else {
          handleChange(event.key);
        }
      }
    };

    window.addEventListener("keydown", handleKeypress);

    return () => {
      window.removeEventListener("keydown", handleKeypress);
    };
  }, [input]); 

  return (
    <div className="app">
      <Display input={input} />
      <div className="container">
        {["C", "❌", "%", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", 0, "00", ".", "="].map(
          (value, index) => (
            <Button key={index} value={value} handleClick={handleChange} />
          )
        )}
      </div>
    </div>
  );
};

export default Calculator;
