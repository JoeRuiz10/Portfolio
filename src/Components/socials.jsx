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
      <span className="row justify-content-center">
        <img className="btn col" src={Github} alt="github" />
        <img className="btn col" src={Linkedin} alt="linkedin" />
        <img className="btn col" src={Instagram} alt="instagram" />
        <img className="btn col" src={Facebook} alt="facebook" />
        <img className="btn col" src={Twitter} alt="twitter" />
      </span>
    );
  }
}
export default Socials;
