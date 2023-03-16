import React, { useState } from "react";
import "./styles.css";
function App() {
  const [total, setTotal] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleMathOperation = (operation) => {
    const number = Number(inputValue);
    switch (operation) {
      case "+":
        setTotal(total + number);
        break;
      case "-":
        setTotal(total - number);
        break;
      case "*":
        setTotal(total * number);
        break;
      case "/":
        setTotal(total / number);
        break;
      default:
        break;
    }
    setInputValue("");
  };

  const handleResetInput = () => {
    setInputValue("");
  };

  const handleResetTotal = () => {
    setTotal(0);
  };

  return (
    <div className="app">
      <h2>Simplest working Calculator</h2>
      <p>Result: {total}</p>
      <div>
        <input type="number" value={inputValue} onChange={handleInputChange} />
      </div>
      <div className="input">
        <button className="button" onClick={() => handleMathOperation("+")}>
          Add
        </button>
        <button className="button" onClick={() => handleMathOperation("-")}>
          Subtract
        </button>
        <button className="button" onClick={() => handleMathOperation("*")}>
          Multiply
        </button>
        <button className="button" onClick={() => handleMathOperation("/")}>
          Divde
        </button>
        <button className="button reset" onClick={handleResetInput}>
          Reset Input
        </button>
        <button className="button reset" onClick={handleResetTotal}>
          Reset Result
        </button>
      </div>
    </div>
  );
}

export default App;
