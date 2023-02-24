import Header from "./components/Header"
import Body from "./components/Body"
import Intro from "./components/Intro"
import React, { useState } from 'react';

function App() {
  const [introOn, setIntroOn] = useState(true);

  const turnOffIntro = () => {
    setIntroOn(false);
  }

  return (
    <div className="App">
      {introOn ? <Intro switch={turnOffIntro} /> : null}
      <Header />
      <Body />
    </div>
  );
}

export default App;
