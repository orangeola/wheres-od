import "../styles/Header.css"

function Header(props) {
  return (
    <div className="Header">
      <p>Time: {props.time}</p>
      <div className="chars">
        <p className="notFound">Cardinal</p>
        <p className="notFound">Odlaw's child</p>
        <p className="notFound">Wi-fi</p>
      </div>
    </div>
  );
}

export default Header;
