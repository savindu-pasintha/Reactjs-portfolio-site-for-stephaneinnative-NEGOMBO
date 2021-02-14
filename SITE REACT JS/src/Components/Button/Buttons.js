import Button from '@material-ui/core/Button';

function Buttons(props) {

  const style = {
    width: "150px",
    height: "45px",
    borderRadius: "25px",
    position: "absolute",
   
    /* Gold */
    background: "linear-gradient(94.67deg, #B08C42 -16.25%, #D9B652 90.67%)",
  };

  return (
    <div className="App">
      <Button style={style} className="round" variant="contained" color="secondary">
       {props.name}
      </Button>
    </div>
  );
}

export default Buttons;