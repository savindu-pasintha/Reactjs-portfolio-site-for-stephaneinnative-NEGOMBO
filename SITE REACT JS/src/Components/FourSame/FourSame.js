import "./FourSame.css";
import img from "./bg.647ef635.png";
import LearnMore from "../Button/LearnMore";
import img1 from "./download (6).png";
import img2 from "./download.png";
import img3 from "./download (1).png";
import img4 from "./download (3).png";
import img5 from "./download (4).png";
import img6 from "./download (5).png";
import img7 from "./download (7).png";

export default function FourSame() {
  return (
    <section className="FourSame">
      <div className="row">
        <div className="col-md-6">
          <div className="col-md-6">
            <div className="padd">
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
                    Robotics Design & Development
                  </h3>
                </div>
                <div id="lines">
                  <h3>
                    {" "}
                    <img src={img2} alt="jj" /> Embedded development (Hardware &
                    Sofware)
                  </h3>
                </div>
                <div id="lines">
                  <h3>
                    <img src={img3} alt="jj" /> Big Data analytic solutions
                  </h3>
                </div>

                <div id="lines">
                  <h3>
                    <img src={img4} alt="jj" /> Independent software & hardware
                    testing program
                  </h3>
                </div>
              </div>
              <div className="col-6">
                <div id="lines">
                  <h3>
                    <img src={img5} alt="jj" />
                    AI technology solutions program
                  </h3>
                </div>
                <div id="lines">
                  <h3>
                    <img src={img6} alt="jj" />
                    IoT Solutions
                  </h3>
                </div>
                <div id="lines">
                  <h3>
                    <img src={img7} alt="jj" />
                    Electronic contract manufacturing
                  </h3>
                </div>
              </div>
            </div>
            <div className="row padd">
              <LearnMore />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src={img} alt="img" width="100%" />
        </div>
        <div />
      </div>
    </section>
  );
}
