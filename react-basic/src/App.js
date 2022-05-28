import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Trans from "./components/Trans";

const Desc = () => <p>Recorded data in each day</p>;
const Design = {color:'red', textAlign:'center', fontSize:'1.5rem'};
function App() {
  return (
    <div className="container">
      <h1 style={Design}>Accounting Program</h1>
      {/* <Desc /> */}
      <Trans />
    </div>
  );
}

export default App;
