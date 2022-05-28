import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Trans from "./components/Trans";

const Desc = () => <p>Recorded data in each day</p>;

function App() {
  return (
    <div>
      <h1>Accounting Program</h1>
      <Desc />
      <Trans />
    </div>
  );
}

export default App;
