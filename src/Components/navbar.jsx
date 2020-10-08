import React, { Component } from "react";
import "../CSS/landing.css";
import { HamburgerSpring } from "react-animated-burgers";

class Navbar extends Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://kit.fontawesome.com/8b2c71d9d2.js";
    script.async = true;

    document.body.appendChild(script);
  }
  state = {
    isActive: false,
  };

  toggleButton = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  render() {
    return (
      <nav className="navbar">
        <HamburgerSpring
          isActive={this.state.isActive}
          toggleButton={this.toggleButton}
          barColor="white"
        />
        <div className="logo">
          <i class="fab fa-dev" name="ios-heart" /> Joe Ruiz
        </div>
      </nav>
    );
  }
}

export default Navbar;
