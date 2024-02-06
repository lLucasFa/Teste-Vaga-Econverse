import React from 'react';
import '../styles/Brands.scss';
import brandImage from '../image/vtex.png';

const brands = [
  { name: '', image: brandImage },
  { name: '', image: brandImage },
  { name: '', image: brandImage },
  { name: '', image: brandImage },
  { name: '', image: brandImage },
];

const Brands: React.FC = () => {
  return (
    <div className="brand-container">
      {brands.map((category, index) => (
        <div key={index} className="brand">
          <div>
            <img className='brand-logo' src={category.image}/>
          </div>
          <div className="title" >{category.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Brands;
