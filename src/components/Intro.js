import "../styles/Intro.css"
import cardinal from '../img/cardinal.png';
import odlaw from '../img/odlaw.jpg';
import wifi from '../img/wifi.png';


function Intro(props) {

  const startGame = ()=> {
    props.startTime();
    props.hideIntro(true);
  }

  return (
    <div className="Intro">
      <div className="Instructions">
        <p>Find the three things below as quick as you can!</p>
        <button onClick={startGame}>Begin</button>
      </div>
      <div className="Objects">
        <img src={cardinal} alt="red bird"></img>
        <img src={odlaw} alt="odlaw from wheres wally"></img>
        <img src={wifi} alt="wifi logo"></img>
      </div>
    </div>
  );
}

export default Intro;
