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
          <a id="github" className="fab fa-github" href="https://github.com/Jruiz10" target="_blank" style={{ textDecoration: 'none' }} ></a>
        </span>
        <span>
        <a id="linkedin" className="fab fa-linkedin-in" href="https://www.linkedin.com/in/josephsruiz/" target="_blank" style={{ textDecoration: 'none' }} ></a>
        </span>
        <span>
        <a id="youtube" className="fab fa-youtube" href="https://www.youtube.com/channel/UC2jtCZU0oRqI9dUM4H_oZJA?view_as=subscriber" target="_blank" style={{ textDecoration: 'none' }}></a>
        </span>
        <span>
        <a id="instagram" className="fab fa-instagram" href="https://www.instagram.com/acupof.joe/" target="_blank" style={{ textDecoration: 'none' }}></a>
        </span>
        <span>
        <a id="facebook" className="fab fa-facebook-f" href="https://www.facebook.com/profile.php?id=100004866738900" target="_blank" style={{ textDecoration: 'none' }}></a>
        </span>
        <span>
        <a id="twitter" className="fab fa-twitter" href="https://twitter.com/acupof__joe" target="_blank" style={{ textDecoration: 'none' }}></a>
        </span>
        <span>
        <a id="github" className="fas fa-file" href="https://quinnipiacuniversity-my.sharepoint.com/:b:/g/personal/jsruiz_quinnipiac_edu/ESAPBbbfzqlBi9J2VCSCyJUBoptraVn-rCZ6p1xWL5EnKQ?e=ymqW2W" target="_blank" style={{ textDecoration: 'none' }} ></a>
        </span>
      </div>
    );
  }
}
export default Socials;
