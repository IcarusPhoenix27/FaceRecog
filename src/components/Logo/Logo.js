import React from 'react';
// import Tilt from 'react-tilt'; 
import Tilt from 'react-parallax-tilt';
import ipl from './ipl.jpg';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ml5 mb5 mt0 pa0'>
    
      <Tilt className="Tilt br2 shadow-2 " options={{ max : 55 }} style={{ height: 600, width: 700 }} >
        <div className="Tilt-inner pa3">
        <a href='https://github.com/IcarusPhoenix27'>
          <img style={{paddingTop: '80px'}} alt='logo' src={ipl}/>
          </a>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;