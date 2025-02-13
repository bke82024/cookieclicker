import { useState } from "react";
import "../styling/clicker.css";
const cookie = "/cookie.png";

export default function CookieClicker() {
  const [count, setCount] = useState(0);
  function Add() {
    setCount(count + 1);
  }
  function ResetButton() {
    setCount(0);
  }
  return (
    <div className="container">
      <button id="add-btn" onClick={Add}>
        <img src={cookie} alt="" className="cookie" />
      </button>
      <p>{count}</p>
      <button id="reset-button" onClick={ResetButton}>
        Reset
      </button>
    </div>
  );
}
