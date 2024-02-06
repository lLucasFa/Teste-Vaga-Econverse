import React from 'react';
import '../styles/Header.scss';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={require('../image/logo.png')}/>
      </div>
      <div className="search-bar-container">
        <input type="text" placeholder="O que você está procurando?" />
        <button>
          <img  src={require('../image/lupa.png')}  alt="Pesquisar" /> 
        </button>
      </div>
      <div className="icons-container">
        <img  className="icons" src={require('../image/Group.png')} /> 
        <img  className="icons" src={require('../image/Heart.png')} /> 
        <img  className="icons" src={require('../image/UserCircle.png')} /> 
        <img  className="icons" src={require('../image/ShoppingCart.png')} /> 
      </div>
    </div>
  );
};

export default Header; 
