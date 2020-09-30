import React from "react";
import logo from "./logo.png";
import "./App.css";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Joe Ruiz Web Developer Portfolio</h1>
        <Button variant="outline-info">View Portfolio</Button>
      </header>
    </div>
  );
}

export default App;
