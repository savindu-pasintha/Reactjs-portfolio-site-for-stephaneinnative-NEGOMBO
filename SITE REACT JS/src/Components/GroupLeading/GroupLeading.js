import "./GroupLeading.css";
import img from "./img1.b07b17e2.png";
import Buttons from "../Button/Buttons";

export default function GroupLeading() {
  return (
    <section className="GroupLeading">
      <div className="row">
        <div className="col-md-6">
          <div className="oneitem">
            <h1>Group of Leading </h1>

            <h1>Tech Enthusiasts.</h1>
          </div>
          <div className="twoitem">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
              in et, lectus sit lorem id integer. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id
              integer.
            </p>
          </div>
        </div>
        <div className="col-md-6 text-center threeitem">
          <img src={img} alt="img" width="100%" />
        </div>
      </div>
    </section>
  );
}
