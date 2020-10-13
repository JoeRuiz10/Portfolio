import React, { Component } from "react";
import "../CSS/socials.css";
import Github from "../images/github.png";
import Instagram from "../images/instagram.png";
import Facebook from "../images/facebook.png";
import Linkedin from "../images/linkedin.png";
import Twitter from "../images/twitter.png";

class Socials extends Component {
  render() {
    return (
      <div className="bar">
        <img src={Github} alt="github" />
        <img src={Linkedin} alt="linkedin" />
        <img className="btn ig" src={Instagram} alt="instagram" />
        <img src={Facebook} alt="facebook" />
        <img src={Twitter} alt="twitter" />
      </div>
    );
  }
}
export default Socials;
