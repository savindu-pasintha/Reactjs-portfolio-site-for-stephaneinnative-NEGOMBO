import Paragraph from "../Paragraph/Paragraph";
import "./Footer.css";
import React, { useState } from "react";
import useMediaQuery from "./useMediaQuery";

//import InstagramIcon from "@material-ui/icons/Instagram";
import { FiInstagram, FiTwitter, FiMail } from "react-icons/fi";
import { AiOutlineYoutube, AiOutlineMobile } from "react-icons/ai";
import { SiWebmoney } from "react-icons/si";
import { GoLocation } from "react-icons/go";

export default function Footer() {
  const [v, setV] = useState({
    string: "lohjjjjjjjjjjlllllllllllljjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
  });
  const matches = useMediaQuery("(min-width: 600px)");

  return (
    <div className="Footer" id="bg">
      {matches}
      <div className="container-fluid">
        <div className="row pt">
          <div className="col-xs-12 col-sm-6 col-md-3 text-left">
            <ul className="float">
              <li className="d-inline img"></li>
              <br />
              <li className="d-inline">
                <div style={{ width: "100%", padding: "25px  25px 10px 10px" }}>
                  <p>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content.
                  </p>
                </div>
              </li>

              <li className="d-inline">
                <ul>
                  <li className="d-inline">
                    <FiInstagram className="changes" />
                  </li>
                  <li className="d-inline">
                    <SiWebmoney className="changes" />
                  </li>
                  <li className="d-inline">
                    <FiTwitter className="changes" />
                  </li>
                  <li className="d-inline">
                    <AiOutlineYoutube className="changes" />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <br/>
          <div className="col-xs-12 col-sm-6 col-md-3 text-left">
            <ul>
              <li>
                <h1>Quick Links</h1>
              </li>
              <br />
              <li>
                <h4>Home</h4>
              </li>
              <br />
              <li>
                <h4>Contact</h4>
              </li>
              <br />
              <li>
                <h4>About</h4>
              </li>
              <br />
              <li>
                <h4>Portfolio</h4>
              </li>
              <br />
              <li>
                <h4>
                  Careers <span>we're hiring</span>
                </h4>
              </li>
              <br />
            </ul>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 text-left">
            <ul>
              <li>
                <h1>Services</h1>
              </li>
              <br />
              <li>
                <h4>UX/UI Design</h4>
              </li>
              <br />
              <li>
                <h4>App Development</h4>
              </li>
              <br />
              <li>
                <h4>Web Development</h4>
              </li>
              <br />
              <li>
                <h4>Quality Assuarance</h4>
              </li>
              <br />
              <li>
                <h4>Machin Learning</h4>
              </li>
              <br />
            </ul>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 text-left ">
            <ul>
              <li>
                <h1>Reach us</h1>
              </li>
              <br />
              <li>
                <FiMail className="changes" /> hello@ceylonX.com
              </li>
              <br />
              <li>
                <AiOutlineMobile className="changes" /> +94 123 456789
              </li>
              <br />
              <li>
                <GoLocation className="changes" /> 772 Golden Avenue, Kandy, Sri
                Lanka
              </li>
              <br />
              <div className="lankaimg"></div>
              <br />
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-12 col-md-4 text-center">
            <p>@c 2021 CeylonX. All right reseved</p>
          </div>

          <div className="cl-xs-12 col-sm-12 col-md-4"></div>

          <div className="col-xs-6 col-sm-12 col-md-4 text-left">
            <p>
              Terms & Conditions <span>| </span>Privacy Policy<span> | </span>
              Sitemap <span>|</span> Disclaimer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
