import Header from "./components/Header"
import Body from "./components/Body"
import "./styles/App.css"
import React, { useEffect, useState } from 'react';
import Intro from "./components/Intro"

function App() {
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

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
      <Header time={time} />
      <Body />
      {!showIntro && 
        <Intro startTime={startTimer} hideIntro={setShowIntro} />
      }
    </div>
  );
}

export default App;
