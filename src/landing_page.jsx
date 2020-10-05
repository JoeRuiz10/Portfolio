import React, { Component } from "react";
import logo from "./images/logo.png";
import "./App.css";
import Button from "react-bootstrap/Button";

class LandingPage extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 id="title">Joe Ruiz Web Developer Portfolio</h1>
        <Button variant="outline-info">View Portfolio</Button>
      </header>
    );
  }
}

export default LandingPage;
