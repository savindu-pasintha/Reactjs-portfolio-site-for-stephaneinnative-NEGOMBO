import "./OneSame.css";
import img from "./bg.5c600425.png";
import img1 from "./download (8).png";
import img2 from "./download.png";
import img3 from "./download (1).png";
import img4 from "./download (2).png";
import img5 from "./download (3).png";
import img6 from "./download (4).png";

import LearnMore from "../Button/LearnMore";
export default function OneSame() {
  return (
    <section className="OneSame">
      <div className="row">
        <div className="col-md-6 leftimage">
          <img id="leftimage" src={img} alt="img" width="100%" />
        </div>

        <div className="col-md-6">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto tempora quidem iste officiis odio sequi quaerat
              accusamus optio. Doloremque, nesciunt recusandae pariatur neque
              rem molestiae ab voluptatibus assumenda obcaecati quia?
            </p>
          </div>

          <div className="row">
            <div className="col-6">
              <div id="lines">
                <h3>
                  {" "}
                  <img id="img" src={img1} alt="jj" />
                  Web Applications
                </h3>
              </div>

              <div id="lines">
                <h3>
                  {" "}
                  <img src={img2} alt="jj" /> Websites Solutions (Front End &
                  Back End)
                </h3>
              </div>

              <div id="lines">
                <h3>
                  {" "}
                  <img src={img3} alt="jj" /> S.E.O (Search Engine Optimization)
                </h3>
              </div>

              <div id="lines">
                <h3>
                  {" "}
                  <img src={img4} alt="jj" /> AR / VR Solutions
                </h3>
              </div>
            </div>

            <div className="col-6">
              <div id="lines">
                <h3>
                  {" "}
                  <img src={img5} alt="jj" /> Mobile Applications (Android &
                  iOS)
                </h3>
              </div>

              <div id="lines">
                <h3>
                  {" "}
                  <img src={img6} alt="jj" /> A.S.O. (App Store Optimization)
                </h3>
              </div>
            </div>
            <div className="row">
              <LearnMore />
            </div>
          </div>
        </div>
      </div>

      <div />
    </section>
  );
}
