import React, { Component } from "react";
import "../CSS/landing.css";
import LeftLanding from "../images/left-landing.jpg";
import RightLanding from "../images/right-landing.jpg";
import NavBar from "./navbar";
import Socials from "./socials";
import {Link } from "react-router-dom";

class Content extends Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "./main.js";
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    return (
      <div>
        <NavBar style={{ zIndex: 10 }} />
        <div className="row content">
          <div className="split left">
            <img src={LeftLanding} alt="" className="Left" />
            <div className="text">
              <p className="subtitle">Videographer</p>
              <h1 className="title">
                Creator
                <br />
              </h1>
              <p className="desc">
                Professional video shooting and editing using industry standard
                programs.
              </p>
              <Link to="/creator"><button className="button">View Work</button></Link>
            </div>
          </div>
          <div className="split right">
            <img src={RightLanding} alt="" className="Right" />
            <div className="text">
              <p className="subtitle">Programmer</p>
              <h1 className="title">
                Developer
                <br />
              </h1>
              <p className="desc">
                Full stack Developer who focuses on writing clean, elegant and
                efficient code.
              </p>
              <Link to="/developer"><button className="button">View Work</button></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Content;
