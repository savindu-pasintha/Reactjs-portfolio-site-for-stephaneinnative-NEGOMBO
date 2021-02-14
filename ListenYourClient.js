import React from "react";
import "./ListenYourClient.css";
import img1 from "./Photo-1.png";
import img2 from "./Photo-2.png";
import img3 from "./Photo-3.png";
import img4 from "./Photo4.png";
import img from "./Photo.png";
export default function ListenYourClient() {
  return (
    <div id="body">
      <div className=" container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 text-center">
            <h id="h">Listen to our clients</h>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 pbox">
            <p id="p">
              <span id="quto">"</span>
              We had an incredible experience woking with CeyloneX and were
              impressed they made such a big difference in only three weeks. Our
              team is so gratefull for the wonderful improvements they made and
              their ability to get familiar with the product concept so quickly.
              it acted as acatalyst to take our business to the next level and
              get more eye on our product.
            </p>
          </div>
        </div>
      </div>
      <div className=" container">
        <div className="row p-5 text-center">
          <li className="col-xs-6 col-sm-2 col-md-2">
            <img src={img4} alt="image1" />
          </li>

          <li className="col-xs-6 col-sm-2 col-md-2">
            <img src={img2} alt="image2" />
          </li>

          <li className="col-xs-12 col-sm-2 col-md-2">
            <img src={img} alt="image2" />
            <br />
            <h4 id="sara">Sarah McMillan</h4>
            
            <p id="sara">CEO, NBT Technologies</p>
          </li>

          <li className="col-xs-6 col-sm-2 col-md-2">
            <img src={img1} alt="image3" />
          </li>

          <li className="col-xs-6  col-sm-2 col-md-2">
            <img src={img3} alt="image4" />
          </li>
        </div>
      </div>
    </div>
  );
}
