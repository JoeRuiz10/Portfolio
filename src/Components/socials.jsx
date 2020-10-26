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
          <a className="fab fa-github" href="https://github.com/Jruiz10"  style={{ textDecoration: 'none' }} ></a>
        </span>
        <span>
        <a className="fab fa-linkedin-in" href="https://www.linkedin.com/in/josephsruiz/" style={{ textDecoration: 'none' }} ></a>
        </span>
        <span>
        <a className="fab fa-youtube" href="https://www.youtube.com/channel/UC2jtCZU0oRqI9dUM4H_oZJA?view_as=subscriber" style={{ textDecoration: 'none' }}></a>
        </span>
        <span>
        <a className="fab fa-instagram" href="https://www.instagram.com/acupof.joe/" style={{ textDecoration: 'none' }}></a>
        </span>
        <span>
        <a className="fab fa-facebook-f" href="https://www.facebook.com/profile.php?id=100004866738900" style={{ textDecoration: 'none' }}></a>
        </span>
        <span>
        <a className="fab fa-twitter" href="https://twitter.com/acupof__joe" style={{ textDecoration: 'none' }}></a>
        </span>
      </div>
    );
  }
}
export default Socials;
