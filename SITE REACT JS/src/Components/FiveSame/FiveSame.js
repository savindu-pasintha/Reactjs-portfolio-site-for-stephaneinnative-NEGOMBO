import "./FiveSame.css";
import img from "./bg.b5c9004b.png";
import img1 from "./download (8).png";
import img2 from "./download.png";
import LearnMore from "../Button/LearnMore";

export default function FiveSame() {
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
                  <img src={img1} alt="jj" /> Executive Cyber protection program
                </h3>
              </div>
            </div>

            <div className="col-6">
              <div id="lines">
                <h3>
                  {" "}
                  <img src={img2} alt="jj" /> Ethical Hacking
                </h3>
              </div>
            </div>

            <div className="row">
              <LearnMore />
            </div>
          </div>
        </div>

        <div />
      </div>
    </section>
  );
}
