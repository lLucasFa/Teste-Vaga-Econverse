import React from 'react';
import '../styles/Partner.scss';

const Partner: React.FC = () => {
  return (
    <div className="text">
        <img className="img1" src={require('../image/product.png')}/>
        <img className="img2" src={require('../image/product.png')}/>
    </div>
    
  );
};

export default Partner;
