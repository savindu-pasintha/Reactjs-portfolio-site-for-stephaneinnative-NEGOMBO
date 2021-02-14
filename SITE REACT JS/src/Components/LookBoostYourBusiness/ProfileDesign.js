import React from "react";
import "./ProfileDesign.css";
import img from "./Ellips.png";
function ProfileDesign() {
  return (
    <div className="artboard-1 dove-gray-border-1px">
      <div className="ellipse-1"></div>
      <img className="ellipse-2" src={img} alt="user pic" />
    </div>
  );
}
export default ProfileDesign;
