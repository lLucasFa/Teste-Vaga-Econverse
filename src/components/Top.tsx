import React from 'react';
import '../styles/Top.scss';

const Top: React.FC = () => {
  return (
    <div className="top-header">
      <ul className='menu'>
        <li className="compra-segura">Compra <span className="highlighted-text-semi-bold">100% segura</span> </li>
        <li className="frete"><span className="highlighted-text-semi-bold">Frete</span> grátis acima de R$ 200</li>
        <li className="parcela"><span className="highlighted-text-semi-bold">Parcele</span> suas compras</li>
      </ul>
    </div>
  );
};

export default Top;
