import { useState } from "react";
import "../styling/clicker.css";
const cookie = "/cookie.png";

export default function CookieClicker() {
  const [count, setCount] = useState(0);
  function Add() {
    setCount(count + 1);
  }
  function resetButton() {
    setCount(0);
  }
  function subtract() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <button className="btn">
        <img src={cookie} alt="" className="cookie" />
        Add
      </button>
      <p>{count}</p>
      <button className="btn">
        <img src={cookie} alt="" className="cookie" />
        Subtract
      </button>
      <button className="reset-button">Reset</button>
    </div>
  );
}
