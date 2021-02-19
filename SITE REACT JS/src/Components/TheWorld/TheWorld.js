import "./TheWorld.css";
import img from "./img2.6ed14022.png";

export default function TheWorld() {
  return (
    <section className="TheWorld">
      <div className="row">
        <div className="col-md-6">
          <h1 id="h1">
            The worlsd is shifting to all digital, don't let you flop{" "}
          </h1>
        </div>
        <div className="col-md-6">
          <p id="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
            in et, lectus sit lorem id integer. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id
            integer.
          </p>
        </div>
        <div />
      </div>

      <div className="image">
        <img src={img} alt="img" width="100%" />
      </div>
    </section>
  );
}
