import React, { Component } from "react";
import logo from "./images/logo.png";
import "./App.css";
import Button from "react-bootstrap/Button";
import NavBar from "./Components/navbar";
import Content from "./Components/content";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Content />
      </div>
    );
  }
}

export default LandingPage;
