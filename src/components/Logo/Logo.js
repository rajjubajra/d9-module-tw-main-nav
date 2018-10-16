import React from 'react';
import Tilt from 'react-tilt';
import YwLogo from './YwLogo.png';
import './Logo.css';
const Logo = () => {
  return(
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner"><img src={YwLogo} alt="Logo"/> </div>
      </Tilt>
    </div>
  );
}

export default Logo;
