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
      <div className="row container-fluid justify-content-center">
        <span>
          <link className="fab fa-github"></link>
        </span>
        <span>
        <link className="fab fa-linkedin-in"></link>
        </span>
        <span>
        <link className="fab fa-youtube"></link>
        </span>
        <span>
        <link className="fab fa-instagram"></link>
        </span>
        <span>
        <link className="fab fa-facebook-f"></link>
        </span>
        <span>
        <link className="fab fa-twitter"></link>
        </span>
      </div>
    );
  }
}
export default Socials;
