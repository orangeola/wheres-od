import wallyImg from '../img/schoolwally.jpg';
import "../styles/Body.css"


function Body() {
  function coords(event){
    let bounds = event.target.getBoundingClientRect();
    let x = event.clientX - bounds.left;
    let y = event.clientY - bounds.top;
    console.log(x + " " + y);
  }
  return (
    <div className="Body">
      <img src={wallyImg} alt="Crowded school" onClick={coords}></img>
    </div>
  );
}

export default Body;
