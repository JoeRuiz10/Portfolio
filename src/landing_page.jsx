import React, { Component } from "react";
import logo from "./images/logo.png";
import "./App.css";
import Button from "react-bootstrap/Button";
import NavBar from "./Components/navbar";
import Content from "./Components/content";
import Socials from "./Components/socials";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Content />
        <Socials />
      </div>
    );
  }
}

export default LandingPage;
