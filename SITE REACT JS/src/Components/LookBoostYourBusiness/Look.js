import "./Look.css";
import Buttons from "../Button/Buttons";
import ProfileDesign from "./ProfileDesign";
export default function Look() {
  return (
    <div>
      <div className="container-fluid w-100">
        <div className="row x">
          <div className=" col-xs-12 col-sm-6 y">
            <div className="row p">
              <h3 id="h3" style={{}}>
                Looking to boost your <br /> business ?
              </h3>
            </div>
            <div className="row q">
              <p id="p" style={{}}>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
              </p>
            </div>
            <div className="row r">
              <div className="btn " id="h3">
                <Buttons style={{}} name="Lets Connect" />
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <ProfileDesign />
          </div>
        </div>
      </div>
    </div>
  );
}
