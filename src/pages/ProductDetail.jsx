import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Minus, Plus, Heart, Clock, Star } from 'lucide-react';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div>Product Not Found</div>;

  return (
    <div style={{ paddingBottom: '100px', backgroundColor: '#F8F9FA', minHeight: '100vh' }}>
      
      {/* Header Image */}
      <div style={{ position: 'relative', width: '100%', height: '350px' }}>
        <button 
          onClick={() => navigate(-1)} 
          style={{ position: 'absolute', top: '24px', left: '20px', background: 'rgba(255,255,255,0.95)', width: '48px', height: '48px', borderRadius: '50%', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}
        >
            <ChevronLeft size={24} color="#111111" />
        </button>
        <button 
          style={{ position: 'absolute', top: '24px', right: '20px', background: 'rgba(255,255,255,0.95)', width: '48px', height: '48px', borderRadius: '50%', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}
        >
            <Heart size={24} color="var(--primary)" />
        </button>
        <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      
      {/* Product Info Overlay */}
      <div style={{ marginTop: '-40px', position: 'relative', background: '#FFFFFF', borderTopLeftRadius: '32px', borderTopRightRadius: '32px', paddingTop: '32px', paddingBottom: '32px', paddingLeft: '24px', paddingRight: '24px', minHeight: '50vh', boxShadow: '0 -10px 40px rgba(0,0,0,0.04)' }}>
        
        {/* Title & Price */}
        <div className="flex-between mb-2" style={{ alignItems: 'flex-start' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '800', maxWidth: '70%', lineHeight: '1.2', color: '#111111' }}>{product.name}</h1>
          <h2 style={{ fontSize: '26px', color: '#111111', fontWeight: '800' }}>${product.price.toFixed(2)}</h2>
        </div>

        {/* Dynamic Tags */}
        <div className="flex-center mb-3" style={{ justifyContent: 'flex-start', gap: '12px' }}>
          <div className="flex-center" style={{ gap: '6px', color: '#FFB000', fontWeight: '700', fontSize: '15px' }}>
             <Star size={20} fill="#FFB000" /> {product.rating}
             <span style={{color: '#888888', fontWeight: '500', marginLeft: '2px'}}>(4.8k)</span>
          </div>
          <div className="flex-center" style={{ gap: '6px', color: '#111111', fontWeight: '600', fontSize: '15px', marginLeft: '8px' }}>
             <Clock size={18} color="var(--primary)" /> 45 min
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '2px dashed #F5F5F5', margin: '24px 0' }} />

        {/* Text Desc */}
        <h3 className="mb-2" style={{ fontSize: '18px', fontWeight: '800', color: '#111111' }}>Details</h3>
        <p style={{ color: '#777777', lineHeight: '1.7', fontSize: '15px' }}>{product.description} Prepared fresh to order and safely delivered hot with our premium containers to ensure maximal quality. Includes complementary signature dips.</p>
      </div>

      {/* Modern Sticky Action Bar */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding: '24px', background: '#FFFFFF', borderTopLeftRadius: '32px', borderTopRightRadius: '32px', boxShadow: '0 -10px 40px rgba(0,0,0,0.06)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
          
          <div className="flex-center" style={{ background: '#F8F9FA', borderRadius: '50px', padding: '6px', border: '1px solid #EAEAEA' }}>
            <button 
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#FFFFFF', fontWeight: 'bold', display:'flex', alignItems:'center', justifyContent:'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <Minus size={20} color="#111111" />
            </button>
            <span style={{ fontSize: '18px', fontWeight: '800', margin: '0 20px', color: '#111111' }}>{quantity}</span>
            <button 
                onClick={() => setQuantity(q => q + 1)}
                style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#111111', color: 'white', fontWeight: 'bold', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <Plus size={20} color="white" />
            </button>
          </div>

          <button className="btn-primary" style={{ flex: 1, height: '60px', fontSize: '17px', borderRadius: '16px', boxShadow: '0 8px 24px rgba(255, 71, 11, 0.25)' }} onClick={() => navigate('/cart')}>
             Add to order
          </button>
      </div>
    </div>
  );
};

export default ProductDetail;
