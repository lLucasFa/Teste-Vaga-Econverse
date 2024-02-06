import React from 'react';
import '../styles/Category.scss';
import corridaImage from '../image/corrida.png';
import ferramentaImage from '../image/ferramenta.png';
import saudeImage from '../image/saude.png';
import whiskeyImage from '../image/whiskey.png';
import monitorImage from '../image/monitor.png';
import supermercadosImage from '../image/supermercados.png';
import modaImage from '../image/moda.png';


const categories = [
  { name: 'Tecnologia', image: monitorImage },
  { name: 'Supermercado', image: supermercadosImage },
  { name: 'Bebidas', image: whiskeyImage },
  { name: 'Ferramentas', image: ferramentaImage },
  { name: 'Saúde', image: saudeImage },
  { name: 'Esportes e Fitness', image: corridaImage },
  { name: 'Moda', image: modaImage },
];

const Category: React.FC = () => {
  return (
    <div className="category-container">
      {categories.map((category, index) => (
        <div key={index} className="category">
          <div className="block">
            <img src={category.image}/>
          </div>
          <div className="title" >{category.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Category;
