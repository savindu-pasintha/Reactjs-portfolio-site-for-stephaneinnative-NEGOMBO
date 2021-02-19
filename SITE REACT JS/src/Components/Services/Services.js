import "./Services.css";
import img1 from "./download (5).png";
import img2 from "./download.png";
import img3 from "./download (1).png";
import img4 from "./download (2).png";

import img5 from "./download (3).png";
import img6 from "./download (4).png";
import img7 from "./download (6).png";
import img8 from "./download (7).png";

export default function Services() {
  return (
    <section className="Services">
      <div className="row">
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-left p-3">Serving around the globe.</h2>
            </div>
            <div className="col-md-12">
              <h6 className="text-left p-3">
                Customers who trust CeylonX to build their new digital brands.
              </h6>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-md-3">
                  <img src={img1} alt="ggg" width="100%" />
                </div>
                <div className="col-md-3">
                  <img src={img2} alt="ggg" width="100%" />
                </div>
                <div className="col-md-3">
                  <img src={img3} alt="ggg" width="100%" />
                </div>
                <div className="col-md-3">
                  <img src={img4} alt="ggg" width="100%" />
                </div>
              </div>{" "}
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-md-3">
                  <img src={img5} alt="ggg" width="100%" />
                </div>
                <div className="col-md-3">
                  <img src={img6} alt="ggg" width="100%" />
                </div>
                <div className="col-md-3">
                  <img src={img7} alt="ggg" width="100%" />
                </div>
                <div className="col-md-3">
                  <img src={img8} alt="ggg" width="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
