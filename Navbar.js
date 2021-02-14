import React from "react";
import Buttons from "../Button/Buttons";
import "./Navbar.css";

import Footer from "../Footer/Footer";
import Look from "../LookBoostYourBusiness/Look";
import ListenYourClient from "../ListenYourClient/ListenYourClient";
import RecentProjects from "../RecentProjects/RecentProjects";

function Navbar() {
  const fonts = {
    //  position: 'absolute',
    width: "79px",
    height: "20px",

    top: "37px",

    fontFamily: "Manrope",

    fontWeight: "bold",
    fontSize: "15px",
    lineHeight: "20px",
    //   paddingRight: "25px",
    //color: "#8E8E8E",
  };

  const img = {
    width: "148.03px",
    height: "45px",
    left: "65px",
    top: "25px",
  };

  return (
    <div className="Navbar ">
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <h1 className="navbar-brand" href="5">
          <img
            className="imghover"
            style={img}
            src="./ceylonX.png"
            alt="ceylonx"
          />
        </h1>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse  box " id="navbar Color03 ">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item active">
              <h4 style={fonts} className="nav-link active" href="#">
                Home
              </h4>
              <span className="sr-only">(current)</span>
            </li>
            <li className="nav-item">
              <h4 style={fonts} className="nav-link" href="#">
                About
              </h4>
            </li>
            <li className="nav-item">
              <h4 style={fonts} className="nav-link" href="#">
                componanies
              </h4>
            </li>

            <li className="nav-item">
              <h4 style={fonts} className="nav-link" href="#">
                Services
              </h4>
            </li>

            <li className="nav-item">
              <h4 style={fonts} className="nav-link" href="#">
                Portfolio
              </h4>
            </li>

            <li className="nav-item">
              <Buttons name=" Get in touch" />
            </li>
          </ul>
        </div>
      </nav>

      <RecentProjects />
      <ListenYourClient />
      <Look />
      <Footer />
    </div>
  );
}

export default Navbar;
