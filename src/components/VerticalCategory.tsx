import React from 'react';
import '../styles/VerticalCategory.scss';

const VerticalCategory: React.FC = () => {
  return (
    <div className="horizontal-category">
      <ul className='menu'>
        <li>CELULAR</li>
        <li>ACESSÓRIOS</li>
        <li>TABLETS</li>
        <li>NOTEBOOKS</li>
        <li>TVS</li>
        <li>VER TODOS</li>
      </ul>
    </div>
  );
};

export default VerticalCategory;
