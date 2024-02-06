import React from 'react';
import '../styles/Banner.scss';

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className='text-h1 no-line'>Venha conhecer nossas <br/>promoções</h1>
        <h2 className='text-h2'>50% off nos produtos</h2>
        <button className='button'>Ver produto</button>
      </div>
      <img
        src={require('../image/banner.png')}
        alt="Banner"
      />
    </div>
  );
};

export default Banner;
