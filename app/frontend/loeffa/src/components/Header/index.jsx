import React from 'react';
import logo from '../../assets/logo_techhub.png';
import StyledHeader from './StyledHeader';

function Header() {
  return (
    <StyledHeader>
      <header className="header-container">
        <div className="div-img-container">
          <img src={logo} alt="img-logo" />
        </div>
        <div className="div-ul-container">
          <ul className='ul-container'>
            <li>Inicio</li>
            <li>Salas</li>
            <li>Reservas</li>
          </ul>
        </div>
      </header>
    </StyledHeader>
  );
}

export default Header;
