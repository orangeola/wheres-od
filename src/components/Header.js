import React, { useEffect, useState } from 'react';
import "../styles/Header.css"

function Header(props) {
  return (
    <div className="Header">
      <p>Time: {props.time}</p>
    </div>
  );
}

export default Header;
