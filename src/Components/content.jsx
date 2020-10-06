import React, { Component } from "react";
import "../CSS/landing.css";
import LeftLanding from "../images/left-landing.jpg";
import RightLanding from "../images/right-landing.jpg";

class Content extends Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "./main.js";
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    return (
      <div className="content">
        <div className="split left">
          <img src={LeftLanding} alt="" className="Left" />
          <div className="text">
            <p className="subtitle">Designing</p>
            <h1 className="title">
              UX/UI <br />
            </h1>
            <p className="desc">
              UI/UX Designer with a passion for designing beautiful and
              functional user experiences.
            </p>
            <button className="button">View Projects</button>
          </div>
        </div>
        <div className="split right">
          <img src={RightLanding} alt="" className="Right" />
          <div className="text">
            <p className="subtitle">Coding</p>
            <h1 className="title">
              Front-End <br />
            </h1>
            <p className="desc">
              Front End Developer who focuses on writing clean, elegant and
              efficient code.
            </p>
            <button className="button">View Projects</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Content;
