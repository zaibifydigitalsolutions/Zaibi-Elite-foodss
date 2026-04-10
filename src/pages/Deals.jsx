import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

// Extra deals data – 10 premium deals
const extraDeals = [
  { id: 1, title: 'Family Feast', description: '2 Large Pizzas + 4 Sides for $25', bg: 'linear-gradient(135deg, #FF7043 0%, #FF5722 100%)', buttonText: 'Grab Family Feast' },
  { id: 2, title: 'Burger Bonanza', description: 'Buy 2 Burgers, Get 1 Free', bg: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)', buttonText: 'Get Burger Deal' },
  { id: 3, title: 'Midnight Snack', description: 'All items 20% off after 10 PM', bg: 'linear-gradient(135deg, #212121 0%, #424242 100%)', buttonText: 'Order Late' },
  { id: 4, title: 'Healthy Hour', description: 'Salads & Smoothies 30% off', bg: 'linear-gradient(135deg, #4CAF5 0%, #81C784 100%)', buttonText: 'Go Healthy' },
  { id: 5, title: 'Student Discount', description: 'Show student ID for 15% off any order', bg: 'linear-gradient(135deg, #2196F3 0%, #64B5F6 100%)', buttonText: 'Save Now' },
  { id: 6, title: 'Weekend Combo', description: 'Buy any 2 items get 20% off', bg: 'linear-gradient(135deg, #FF5722 0%, #FF8A65 100%)', buttonText: 'Grab Deal' },
  { id: 7, title: 'Family Pack', description: 'Family-sized pizza + 2 drinks for $20', bg: 'linear-gradient(135deg, #8E24AA 0%, #AB47BC 100%)', buttonText: 'Order Now' },
  { id: 8, title: 'Lunch Special', description: 'Any sandwich + soup for $12', bg: 'linear-gradient(135deg, #3949AB 0%, #5C6BC0 100%)', buttonText: 'Enjoy Lunch' },
  { id: 9, title: 'Dessert Duo', description: 'Two desserts for $9', bg: 'linear-gradient(135deg, #F4511E 0%, #FF7043 100%)', buttonText: 'Treat Yourself' },
  { id: 10, title: 'Happy Hour Drinks', description: 'All drinks 30% off 4-6pm', bg: 'linear-gradient(135deg, #00ACC1 0%, #26C6DA 100%)', buttonText: 'Sip & Save' }
];

const Deals = () => {
  return (
    <div className="container" style={{ paddingBottom: '80px' }}>
      <h2 className="mb-2">Hot Deals</h2>

      {/* Original Combo Offer */}
      <div className="promo-banner mb-3" style={{
        background: 'linear-gradient(135deg, var(--secondary) 0%, #FFB74D 100%)',
        borderRadius: 'var(--radius-large)',
        padding: '20px',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h2 style={{ marginBottom: '8px' }}>Combo Offer</h2>
          <p style={{ marginBottom: '16px' }}>Burger + Fries + Drink for $12</p>
          <button style={{ background: 'white', color: 'var(--secondary)', padding: '8px 16px', borderRadius: '8px', fontWeight: '600' }}>Claim Now</button>
        </div>
      </div>

      {/* Additional Deal Banners */}
      <div className="deals-grid" style={{ display: 'grid', gap: '16px', gridTemplateColumns: '1fr 1fr' }}>
        {extraDeals.map((deal) => (
          <div key={deal.id} className="promo-banner" style={{
            background: deal.bg,
            borderRadius: 'var(--radius-large)',
            padding: '20px',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h3 style={{ marginBottom: '8px' }}>{deal.title}</h3>
              <p style={{ marginBottom: '12px' }}>{deal.description}</p>
              <button style={{ background: 'white', color: '#333', padding: '8px 14px', borderRadius: '8px', fontWeight: '600' }}>{deal.buttonText}</button>
            </div>
          </div>
        ))}
      </div>

      {/* Discounted Items Section */}
      <h3 className="mb-2" style={{ marginTop: '24px' }}>Discounted Items</h3>
      <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {products.slice(0, 2).map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default Deals;
