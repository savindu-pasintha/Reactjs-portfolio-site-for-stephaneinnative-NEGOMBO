import "./Building.css";
import Buttons from "../Button/Buttons";
export default function Building() {
  return (
    <section className="Building">
      <div className="item1">
        <h1>Building Vision </h1>

        <h1>Creating Realities.</h1>
      </div>
      <div className="item">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer.
        </p>
      </div>
      <div className="item">
        <Buttons name="Get in touch" />
      </div>
    </section>
  );
}
