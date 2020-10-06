import React, { Component } from "react";
import "../CSS/landing.css";

class Navbar extends Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://kit.fontawesome.com/8b2c71d9d2.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <nav className="navbar">
        <div className="logo">
          <i class="fab fa-dev" name="ios-heart" /> Joe Ruiz
        </div>
      </nav>
    );
  }
}

export default Navbar;
