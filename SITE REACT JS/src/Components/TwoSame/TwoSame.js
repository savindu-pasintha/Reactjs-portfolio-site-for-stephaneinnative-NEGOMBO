import "./TwoSame.css";
import img from "./bg.6bacd16b.png";
import LearnMore from "../Button/LearnMore";
import img1 from "./download (1).png";
import img2 from "./download (2).png";
import img3 from "./download (3).png";
import img4 from "./download.png";
import img5 from "./download (4).png";
import img6 from "./download (5).png";

export default function TwoSame() {
  return (
    <section className="TwoSame">
      <br />
      <div className="row">
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
                  Firewall Protection
                </h3>
              </div>
              <div id="lines">
                <h3>
                  {" "}
                  <img src={img2} alt="jj" /> Data Protection
                </h3>
              </div>
              <div id="lines">
                <h3>
                  <img src={img3} alt="jj" /> Email Security
                </h3>
              </div>
            </div>
            <div className="col-6">
              <div id="lines">
                <h3>
                  <img src={img4} alt="jj" /> Executive Cyber protection program
                </h3>
              </div>
              <div id="lines">
                <h3>
                  <img src={img5} alt="jj" /> Ethical Hacking
                </h3>
              </div>
              <div id="lines">
                <h3>
                  <img src={img6} alt="jj" /> Threat Research & Analysis
                </h3>
              </div>
            </div>
          </div>
          <div className="row padd">
            <LearnMore />
          </div>
        </div>

        <div className="col-md-6">
          <img id="rightimage" src={img} alt="img" width="100%" />
        </div>
      </div>
    </section>
  );
}
