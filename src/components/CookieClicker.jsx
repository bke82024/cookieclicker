import { useState } from "react";
import cookie from "./cookie.png";

export default function App() {
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
    <div>
      <p>{count}</p>
      <button></button>
    </div>
  );
}
