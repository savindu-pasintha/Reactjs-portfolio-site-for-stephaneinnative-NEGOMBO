import "./RecentProjects.css";
import img1 from "./SamsungGalaxyS9.png";
import img2 from "./MacbookPro.png";
import img3 from "./iPhoneX.png";
import img4 from "./iPhoneSE2020.png";
import img5 from "./MacbookPro.png";
import img6 from "./Screen.png";
import img7 from "./ProjectCover3.png";
import img8 from "./Screen.png";
import { Repeat } from "@material-ui/icons";
export default function RecentProjects() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-4 col-md-4">
          <div id="one">
            <h5>Netallar</h5> <h5>Project Management</h5>
            <h>Android</h>
            <br />
            <img src={img1} alt="img1" />
            <img src={img6} alt="img6" />
          </div>
        </div>

        <div className="col-xs-12 col-sm-8 col-md-8 ">
          <div className="row">
            <div className="col-xs-12  col-md-12 w-100" id="">
              <div id="two">
                <h5>Humango</h5>
                <h5>Angular</h5>
                <img src={img2} alt="img2" />
                <img src={img8} alt="img7" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className=" " id="three">
                <h5>Thunder</h5>
                <h5>Swift .iOS</h5>
                <img src={img3} alt="img3" />
                <img src={img6} alt="img6" />
              </div>
            </div>

            <div className="col-xs-12 col-md-6">
              <div className=" " id="four">
                <h5>Thunder VPN</h5>
                <h5>Android</h5>
                <img src={img4} alt="img4" />
                <img src={img6} alt="img6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-8 col-md-8" id="">
          <div className=" " id="five">
            <h5>MEDUSA HR Management</h5>
            <h5>React Native</h5>
            <img src={img5} alt="img5" />
            <img src={img8} alt="img8" />
          </div>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4 " id="">
          <div className=" " id="six">
            <h5>JANE Yoga</h5>
            <h5>Android & Swift</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
