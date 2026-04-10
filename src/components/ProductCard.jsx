import React from 'react';
import { Plus, Star, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
      <div className="product-image-container">
        <img src={product.image} alt={product.name} />
        <div className="delivery-badge">
             <MapPin size={10} color="var(--primary)" /> 40-50min
        </div>
      </div>
      <div className="product-info">
        <h4 className="product-name">{product.name}</h4>
        <div className="flex-center mt-1" style={{ justifyContent: 'flex-start', gap: '6px' }}>
             <Star size={12} color="#FFB000" fill="#FFB000" />
             <span style={{ fontSize: '12px', fontWeight: '600' }}>{product.rating}</span>
             <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>(9.5k)</span>
        </div>
        <div className="flex-between mt-2">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button className="add-btn" onClick={(e) => { e.stopPropagation(); navigate('/cart'); }}>
            <Plus size={18} color="white" strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
