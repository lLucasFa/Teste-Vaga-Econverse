import React from 'react';
import '../styles/VerticalMenu.scss';

const VerticalMenu: React.FC = () => {
  return (
    <div className="horizontal-menu">
      <ul className='menu'>
        <li>TODAS AS CATEGORIAS</li>
        <li>SUPERMERCADO</li>
        <li>LIVROS</li>
        <li>MODA</li>
        <li>LANCAMENTOS</li>
        <li>OFERTA DO DIA</li>
        <li className="assinatura">ASSINATURA </li>
      </ul>
    </div>
  );
};

export default VerticalMenu;
