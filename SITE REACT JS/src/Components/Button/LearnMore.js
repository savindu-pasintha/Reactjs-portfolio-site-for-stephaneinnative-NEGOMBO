import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import "./LearnMore.css";
export default function LearnMore() {
  const style = {
    width: "150px",
    height: "45px",
    position: "absolute",

    fontWeight: "bold",
    fontSize: "16px",
    /* Gold */
  };

  return (
    <div className="App">
      <div id="btn" style={style}>
        Learn More {<ArrowRightAltIcon />}
      </div>
    </div>
  );
}
