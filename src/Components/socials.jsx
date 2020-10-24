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
          <link className="fab fa-github" href="https://github.com/Jruiz10"></link>
        </span>
        <span>
        <link className="fab fa-linkedin-in" href="https://www.linkedin.com/in/josephsruiz/"></link>
        </span>
        <span>
        <link className="fab fa-youtube" href="https://www.youtube.com/channel/UC2jtCZU0oRqI9dUM4H_oZJA?view_as=subscriber"></link>
        </span>
        <span>
        <link className="fab fa-instagram" href="https://www.instagram.com/acupof.joe/"></link>
        </span>
        <span>
        <link className="fab fa-facebook-f" href="https://www.facebook.com/profile.php?id=100004866738900"></link>
        </span>
        <span>
        <link className="fab fa-twitter" href="https://twitter.com/acupof__joe"></link>
        </span>
      </div>
    );
  }
}
export default Socials;
