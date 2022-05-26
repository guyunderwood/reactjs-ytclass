import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  return (
    <div>
      <h1>Accounting Program</h1>
      <p>Recorded data in each day</p>
      <ul>
        <li>
          Travel cost <span>-200</span>
        </li>
        <li>
          Payroll <span>+20,000</span>
        </li>
        <li>
          Food <span>-500</span>
        </li>
      </ul>
    </div>
  );
}

export default App;
