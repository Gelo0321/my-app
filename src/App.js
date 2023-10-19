import React, { useState } from 'react';
import './App.css';

function CalcButton({ label, onClick, buttonClassName = "CalcButton" }) {
  return (
    <button className={buttonClassName} onClick={onClick}>
      {label}
    </button>
  );
}

function Display({ display }) {
  return (
    <div className="CalcDisplay">
      {display}
    </div>
  );
}

export default function App() {
  const [disp, setDisp] = useState("0");
  const [num1, setNum1] = useState(null);
  const [oper, setOper] = useState(null);
  const [num2, setNum2] = useState(null);
  const [decimalClicked, setDecimalClicked] = useState(false);
  const [negate, setNegate] = useState(false);

  const numberClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (value === "." && decimalClicked) {
      return; // Only allow one decimal point
    }

    if (negate) {
      setDisp(-{value});
      setNum1(-{value});
      setNegate(false);
    } else {
      let num = value;

      if (oper === null) {
        if (num1 !== null) {
          num = num1 + num;
        }
        setNum1(num);
        setDisp(num);
      } else {
        if (num2 !== null) {
          num = num2 + num;
        }
        setNum2(num);
        setDisp(num);
      }

      if (value === ".") {
        setDecimalClicked(true);
      }
    }
  }

  const operatorClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setOper(value);
    setDisp(value);
    setDecimalClicked(false);
  }

  const calculate = () => {
    const x = parseFloat(num1);
    const y = parseFloat(num2);

    switch (oper) {
      case '+':
        return x + y;
      case '-':
        return x - y;
      case '*':
        return x * y;
      case '÷':
        if (y !== 0) {
          return x / y;
        } else {
          return "ERROR";
        }
      case '^':
        return Math.pow(x, y);
      case '%':
        return x % y;
      default:
        return "ERROR";
    }
  }

  const equalClickHandler = (e) => {
    e.preventDefault();

    if (num1 !== null && num2 !== null && oper) {
      const result = calculate();
      setDisp(result);
      setNum1(result.toString());
      setOper(null);
      setNum2(null);
      setDecimalClicked(false);
    }
  }

  const clearClickHandler = (e) => {
    e.preventDefault();
    setDisp("0");
    setNum1(null);
    setOper(null);
    setNum2(null);
    setDecimalClicked(false);
  }

  const negateClickHandler = (e) => {
    e.preventDefault();
    if (num1 !== null && num2 === null) {
      setNum1(-parseFloat(num1));
      setDisp(-parseFloat(num1).toString());
    } else if (num1 !== null && num2 !== null && oper) {
      setNum2(-parseFloat(num2));
      setDisp(-parseFloat(num2).toString());
    }
  }

  const nameClickHandler = (e) => {
    e.preventDefault();
    setDisp("Angelo Manalang");
  }

  return (
    <div className="App">
      <div className="CalcContainer">
        <h1>CALCULATOR OF ANGELO MANALANG CPE3A</h1>
        <Display display={disp} />
        <div className="ButtonContainer">
          <CalcButton label={7} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
          <CalcButton label={8} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
          <CalcButton label={9} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
          <CalcButton label={"C"} onClick={clearClickHandler} />
          <CalcButton label={6} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
          <CalcButton label={5} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
          <CalcButton label={4} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
          <CalcButton label={"*"} onClick={operatorClickHandler} />
          <CalcButton label={3} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
          <CalcButton label={2} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
          <CalcButton label={1} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />
          <CalcButton label={"-"} onClick={operatorClickHandler} />

          <CalcButton label={"="} onClick={equalClickHandler} />
          <CalcButton label={0} onClick={numberClickHandler} buttonClassName={"CalcButtonNum"} />

          <CalcButton label={"÷"} onClick={operatorClickHandler} />
          <CalcButton label={"+"} onClick={operatorClickHandler} />
          <CalcButton label={"^"} onClick={operatorClickHandler} />
          <CalcButton label={"%"} onClick={operatorClickHandler} />
          <CalcButton label={"±"} onClick={negateClickHandler} />
          <CalcButton label={"."} onClick={numberClickHandler} />
        </div>
        <div className="Name">
          <CalcButton label={"Manalang"} onClick={nameClickHandler} buttonClassName={"CalcButtonName"} />
        </div>
      </div>
    </div>
  );
}