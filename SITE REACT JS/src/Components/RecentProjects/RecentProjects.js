import "./RecentProjects.css";
import img1 from "./Project1.png";
import img2 from "./Project2.png";
import img3 from "./Project3.png";
import img4 from "./Project4.png";
import img5 from "./Project5.png";
import img6 from "./Project6.png";

import {} from "@material-ui/icons";
export default function RecentProjects() {
  return (
    <div className=" bgc ">
      <div className="row">
        <div className=" col-xs-12 col-sm-12 col-md-6">
          <img src={img1} alt="img1" class="response " />
        </div>

        <div className=" col-xs-12 col-sm-12 col-md-6">
          <img src={img2} alt="img1" class="response " />
          <img src={img3} alt="img1" class="response " />
          <img src={img6} alt="img1" class="response " />
        </div>
        <div className=" col-xs-12 col-sm-12 col-md-6"></div>
        <div className=" col-xs-12 col-sm-12">
          <img src={img4} alt="img1" class="response " />
        </div>
        <div className=" col-xs-12 col-sm-12">
          <img src={img5} alt="img1" class="response " />
        </div>

        <div className=" col-xs-12 col-sm-12">
          <img src={img6} alt="img1" class="response " />
        </div>
      </div>
    </div>
  );
}
