import { useEffect } from "react";
import "../styles/Header.css"

function Header(props) {

  useEffect(()=> {
    if(props.status[0] === true){
      let test = document.getElementById("odlaw");
      test.className = "found";
    } 
    if(props.status[1] === true){
      let test = document.getElementById("wifi");
      test.className = "found";
    } 
    if(props.status[2] === true){
      let test = document.getElementById("cardinal");
      test.className = "found";
    }
    props.update[1](false);
  })

  return (
    <div className="Header">
      <p>Time: {props.time}</p>
      <div className="chars">
        <p className="notFound" id="cardinal">Cardinal</p>
        <p className="notFound" id="odlaw">Odlaw's child</p>
        <p className="notFound" id="wifi">Wi-fi</p>
      </div>
    </div>
  );
}

export default Header;
