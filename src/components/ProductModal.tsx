import React, { useState } from 'react';
import '../styles/ProductModal.scss'; 
interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-modal">
      <div className="modal-content">
        <img src={product.photo} alt={product.productName} />
        <div>
          <div className='product-title'>{product.productName}</div>
          <div className="price">R${product.price.toFixed(2)}</div>
          <div className="description">Many desktop publishing packages and web page editors now many desktop publishing</div>
          <div className="more-product">Veja mais detalhes do produto &nbsp;&gt;</div>

          <div className="quantity-selector">
            <div className="quantity-controls">
              <button onClick={handleDecreaseQuantity}>-</button>
              <div className="quantity-number">{quantity}</div>
              <button onClick={handleIncreaseQuantity}>+</button>
            </div>
          </div>
          <button className="buy-button">Comprar</button>
        </div>
        <button className='button-close' onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default ProductModal;
