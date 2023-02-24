import Header from "./components/Header"
import Body from "./components/Body"
import "./styles/App.css"
import React, { useEffect, useState } from 'react';
import Intro from "./components/Intro"

function App() {
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  const [odlawFound, setOdlawFound] = useState(false);
  const [wifiFound, setWifiFound] = useState(false);
  const [cardinalFound, setCardinalFound] = useState(false);
  const [update, setUpdate] = useState(false);

  function setCharTrue(character){
    setUpdate(true);
    switch(character) {
      case "odlaw":
        setOdlawFound(true);
        break;
      case "cardinal":
        setCardinalFound(true);
        break;
      case "wifi":
        setWifiFound(true);
        break;
      default:
        break;    
    }
  }

  function startTimer(){
    setStartTime(!startTime);
  }

  useEffect(()=> {
    if(startTime){
      let timer = setInterval(() => {
        setTime(time+1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [time, startTime]);


  return (
    <div className="App">
      <Header time={time} update={[update, setUpdate]} status={[odlawFound, wifiFound, cardinalFound]}/>
      <Body setCharTrue={setCharTrue}/>
      {!showIntro && 
        <Intro startTime={startTimer} hideIntro={setShowIntro} />
      }
    </div>
  );
}

export default App;
