import "../styles/Header.css"

function Header(props) {

  const updateCharStatus = ()=> {
    if(props.status[0] === true){
      let test = document.getElementById("odlaw");
      test.className = "found";
    } else if(props.status[1] === true){
      let test = document.getElementById("wifi");
      test.className = "found";
    } else if(props.status[2] === true){
      let test = document.getElementById("cardinal");
      test.className = "found";
    }
  }

  return (
    <div className="Header">
      <p>Time: {props.time}</p>
      <div className="chars">
        <p className="notFound" id="cardinal">Cardinal</p>
        <p className="notFound" id="odlaw">Odlaw's child</p>
        <p className="notFound" id="wifi">Wi-fi</p>
        {updateCharStatus()}
      </div>
    </div>
  );
}

export default Header;
