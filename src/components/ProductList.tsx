import React, { useState } from 'react';
import ProductModal from './ProductModal';
import '../styles/ProductList.scss';

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
  old: number;
}

interface ProductListProps {
  products: Product[];
  formatPrice: (price: number) => string;
}

const ProductList: React.FC<ProductListProps> = ({ products, formatPrice }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPosition, setCurrentPosition] = useState(0);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleNext = () => {
    if (currentPosition < products.length - 4) {
      setCurrentPosition(currentPosition + 1);
    }
  };

  const handlePrev = () => {
    if (currentPosition > 0) {
      setCurrentPosition(currentPosition - 1);
    }
  };

  const visibleProducts = products.slice(currentPosition, currentPosition + 4);

  return (
    <div className="product-list">
      <div className="carousel-container">
        <div className="product-carousel" style={{ transform: `translateX(-${currentPosition * 25}%)` }}>
          {visibleProducts.map((product, index) => (
            <div key={index} className="product-card" onClick={() => openModal(product)}>
              <img src={product.photo} alt={product.productName} />
              <div className="product-info">
                <h3>{product.productName}</h3>
                <div className="price-container">
                  <span className="old-price">R$ {formatPrice(product.old)},00</span>
                  <span className="new-price">R$ {formatPrice(product.price)},00</span>
                </div>
                <div className="installments">Em até 12x de $650.33</div>
                  <div className="free-shipping">Frete Grátis</div>
                  <button className="buy-button">Comprar</button>
                </div>
            </div>
          ))}
        </div>
        <button className="prev-button" onClick={handlePrev} disabled={currentPosition === 0}>
          &#8249;
        </button>
        <button className="next-button" onClick={handleNext} disabled={currentPosition >= products.length - 4}>
          &#8250;
        </button>
      </div>
      {selectedProduct && <ProductModal product={selectedProduct} onClose={closeModal} />}
    </div>
  );
};

export default ProductList;
