// src/App.tsx

import React from 'react';
import ProductList from './components/ProductList';
import VerticalMenu from './components/VerticalMenu'; 
import './styles/App.scss';
import Banner from './components/Banner';
import Header from './components/Header';
import Top from './components/Top';
import Category from './components/Category'
import BannerInfo from './components/Partner';
import Partner from './components/Partner';
import Brands from './components/Brands';
import Footers from './components/Footer';
import Footer from './components/Footer';
import VerticalCategory from './components/VerticalCategory';



interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
  old: number;
}



interface ProductListResponse {
  success: boolean;
  products: Product[];
}

const App: React.FC = () => {
  const jsonData: ProductListResponse = {
    "success": true,
    "products": [
      {
        "productName": "Iphone 11 PRO MAX BRANCO 1",
        "descriptionShort": "Iphone 11 PRO MAX BRANCO 1",
        "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        "price": 15000,
        "old": 18000

      },
      {
        "productName": "Iphone 13 MINI 1",
        "descriptionShort": "IPHONE 13 MINI 1",
        "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        "price": 9000,
        "old": 12000
      },
      {
        "productName": "Iphone 11 PRO MAX BRANCO 2",
        "descriptionShort": "Iphone 11 PRO MAX BRANCO 2",
        "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        "price": 14990,
        "old": 17300
      },
      {
        "productName": "Iphone 13 MINI 2",
        "descriptionShort": "IPHONE 13 MINI 2",
        "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        "price": 12000,
        "old": 12000
      },
      {
        "productName": "Iphone 11 PRO MAX BRANCO 3",
        "descriptionShort": "Iphone 11 PRO MAX BRANCO 3",
        "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        "price": 4550,
        "old": 6340
      },
      {
        "productName": "Iphone 13 MINI 3",
        "descriptionShort": "IPHONE 13 MINI 3",
        "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        "price": 38000,
        "old": 53400
      },
      {
        "productName": "Iphone 11 PRO MAX BRANCO 4",
        "descriptionShort": "Iphone 11 PRO MAX BRANCO 4",
        "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        "price": 42000,
        "old": 54300
      },
      {
        "productName": "Iphone 13 MINI 4",
        "descriptionShort": "IPHONE 13 MINI 4",
        "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        "price": 520,
        "old": 780
      },
      {
        "productName": "Iphone 11 PRO MAX BRANCO 5",
        "descriptionShort": "Iphone 11 PRO MAX BRANCO 5",
        "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        "price": 149990,
        "old": 179990
      },
      {
        "productName": "Iphone 13 MINI 5",
        "descriptionShort": "IPHONE 13 MINI 5",
        "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        "price": 100000,
        "old": 160000
      }    
    ]
  };

  const products = jsonData.products;

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  return (
    <div className="app">
      <Top/>
      <Header />
      <VerticalMenu />
      <Banner />
      <Category/>
      <div className="product-list-container">
        <h1>Produtos relacionados</h1>
      <VerticalCategory/>  
        <ProductList products={products} formatPrice={formatPrice} />
      <Partner/>
      <h1>Produtos Relacionados</h1>
      <h2>Ver Todos</h2>
      <Partner/>
      <h1 className="no-line">Navegue por marcas</h1>
      <Brands/>
      <Footer/>
      </div>
    </div>
  );
};




export default App;
