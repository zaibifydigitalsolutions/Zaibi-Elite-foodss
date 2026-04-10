import React, { useState } from 'react';
import { Search, MapPin, ChevronDown, Star, Phone, Mail, Clock, Map } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Home.css';

const faqs = [
  { q: "What are your delivery hours?", a: "We deliver from 10:00 AM to 11:30 PM, 7 days a week." },
  { q: "Is delivery free?", a: "Delivery is free for orders over $30. Otherwise, a small $2 fee applies." },
  { q: "How long does delivery take?", a: "Our average time is 40-50 minutes, ensuring your food stays hot." }
];

const testimonials = [
  { name: "Sarah L.", text: "Best burgers in town! Lightning fast delivery.", rating: 5 },
  { name: "Mike T.", text: "The pizza is authentic and always arrives hot.", rating: 5 },
  { name: "Jessica R.", text: "I order the Truffle Fries weekly. Absolute perfection.", rating: 4 },
  { name: "Daniel K.", text: "Amazing vegan options, highly recommended.", rating: 5 },
  { name: "Emily C.", text: "Customer service is top notch and the food is great.", rating: 5 }
];

const doubledTestimonials = [...testimonials, ...testimonials];

  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProducts = products.filter(p => activeCategory === "All" || p.category === activeCategory);
  const [openFaq, setOpenFaq] = useState(null);
  const [currentBanner, setCurrentBanner] = useState(0);

  // Auto-slide banners every 2 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner(prev => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Update scroll position when currentBanner changes
  React.useEffect(() => {
    const container = document.querySelector('.banners-container');
    if (container) {
      container.scrollTo({
        left: currentBanner * container.offsetWidth,
        behavior: 'smooth'
      });
    }
  }, [currentBanner]);

  return (
    <div className="container home-page fade-in" style={{ paddingBottom: '120px', overflowX: 'hidden' }}>
      
      {/* Premium Header */}
      <div className="flex-between mb-4">
        <div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Deliver to</p>
          <div className="flex-center gap-1" style={{ cursor: 'pointer' }}>
            <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>Jl. Soekarno Hatta 15A</span>
            <ChevronDown size={18} color="var(--primary)" />
          </div>
        </div>
        <div className="glass-card" style={{ padding: '10px', borderRadius: '50%', boxShadow: 'var(--shadow-sm)' }}>
           <MapPin size={22} color="var(--primary)" />
        </div>
      </div>

      {/* Dynamic Greeting */}
      <div className="mb-4">
        <h1 style={{ marginBottom: '4px' }}>Fastest</h1>
        <h1 style={{ color: 'var(--primary)' }}>Delivery Food ⚡</h1>
      </div>

      {/* Modern Search */}
      <div className="search-bar mb-4" style={{ 
        background: '#F3F4F6', 
        padding: '16px 20px', 
        borderRadius: '20px', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '12px' 
      }}>
        <Search size={22} color="#9CA3AF" />
        <input 
          type="text" 
          placeholder="Search your favorite food..." 
          style={{ 
            background: 'none', 
            border: 'none', 
            width: '100%', 
            fontSize: '1rem', 
            outline: 'none',
            fontWeight: '500'
          }} 
        />
      </div>

      {/* Main Feature Banners - Immersive 3D Slider */}
      <div className="banners-container mb-4">
        <div className="promo-banner" style={{ 
          background: 'var(--primary-gradient)',
          backgroundImage: 'linear-gradient(135deg, #FF6B00 0%, #FF470B 100%)',
          transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          cursor: 'pointer'
        }}>
          <div className="promo-content">
            <span className="badge">Special Offer</span>
            <h2 style={{color: 'white', marginBottom: '8px', fontSize: '2.2rem', fontWeight: '900'}}>30% Daily<br/>Discount!</h2>
            <button className="btn-white">Order Now</button>
          </div>
          <img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=800" alt="Burger" className="promo-img" />
        </div>

        <div className="promo-banner" style={{ 
          background: 'linear-gradient(135deg, #FFB000 0%, #FF8A00 100%)',
          transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          cursor: 'pointer'
        }}>
          <div className="promo-content">
            <span className="badge">Limited Time</span>
            <h2 style={{color: 'white', marginBottom: '8px', fontSize: '2.2rem', fontWeight: '900'}}>Free Delivery<br/>on Pizzas</h2>
            <button className="btn-white">Claim Free</button>
          </div>
          <img src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=800" alt="Pizza" className="promo-img" />
        </div>

        <div className="promo-banner" style={{ 
          background: 'linear-gradient(135deg, #111111 0%, #333333 100%)',
          transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          cursor: 'pointer'
        }}>
          <div className="promo-content">
            <span className="badge" style={{ background: '#FFD700', color: 'black' }}>Gourmet</span>
            <h2 style={{color: 'white', marginBottom: '8px', fontSize: '2.2rem', fontWeight: '900'}}>Premium<br/>Family Feast</h2>
            <button className="btn-primary" style={{ height: '48px', width: 'auto', padding: '0 24px', fontSize: '15px' }}>Grab Deal</button>
          </div>
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800" alt="Feast" className="promo-img" />
        </div>
      </div>

      {/* Sophisticated Categories */}
      <div className="mb-4">
        <div className="flex-between mb-3">
          <h3 style={{ fontSize: '1.4rem' }}>Categories</h3>
          <span style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem' }}>See All</span>
        </div>
        <div className="category-list" style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '10px' }}>
          {categories.map((cat, idx) => (
            <button 
               key={idx} 
               onClick={() => setActiveCategory(cat)}
               style={{
                 padding: '12px 24px',
                 borderRadius: '16px',
                 background: activeCategory === cat ? 'var(--primary)' : 'white',
                 color: activeCategory === cat ? 'white' : 'var(--text-secondary)',
                 fontWeight: '700',
                 boxShadow: activeCategory === cat ? '0 10px 20px rgba(255, 71, 11, 0.2)' : 'var(--shadow-sm)',
                 border: activeCategory === cat ? 'none' : '1px solid #F3F4F6',
                 whiteSpace: 'nowrap'
               }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Popular Items Showcase */}
      <div className="mb-4">
        <div className="flex-between mb-3">
          <h3 style={{ fontSize: '1.4rem' }}>{activeCategory === "All" ? "Top 6 Favorites 🔥" : `${activeCategory} Selections`}</h3>
        </div>
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.slice(0, 6).map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        ) : (
          <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
            <p className="text-secondary">No items found in this section.</p>
          </div>
        )}
      </div>

      {/* Classical Selection (6 Faws) */}
      <div className="mb-4">
          <div className="flex-between mb-3">
              <h3 style={{ fontSize: '1.4rem' }}>Classical Selection 🍷</h3>
              <span className="btn-see-all">Explore Menu</span>
          </div>
          <div className="products-grid">
              {products.filter(p => ["Main", "Pizza", "Pasta", "Entrees"].includes(p.category)).slice(0, 6).map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
              ))}
          </div>
      </div>

      {/* Infinite Marquee Styled Testimonials */}
      <div className="mb-4">
          <h3 className="mb-3" style={{ fontSize: '1.4rem' }}>Happy Foodies ⭐</h3>
          <div className="testimonials-wrapper" style={{ overflow: 'hidden' }}>
            <div className="testimonials-container" style={{ display: 'flex', gap: '20px' }}>
               {doubledTestimonials.map((test, index) => (
                  <div key={index} className="card" style={{ minWidth: '260px', padding: '20px' }}>
                     <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                        {[...Array(test.rating)].map((_, i) => <Star key={i} size={16} fill="#FFB000" color="#FFB000" />)}
                     </div>
                     <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: '500', marginBottom: '15px' }}>"{test.text}"</p>
                     <h4 style={{ fontWeight: '700', fontSize: '1rem' }}>{test.name}</h4>
                  </div>
               ))}
            </div>
          </div>
      </div>

      {/* Elegant Contact Section */}
      <div className="card mb-4" style={{ background: '#111111', color: 'white' }}>
         <h3 className="mb-3" style={{ color: 'white', fontSize: '1.3rem' }}>Need Help? 📞</h3>
         <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '15px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '14px' }}>
                     <Phone size={20} color="var(--primary)" />
                  </div>
                  <div>
                      <p style={{ fontWeight: '700', fontSize: '1rem' }}>+92 331 9068234</p>
                      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>Available 24/7</p>
                  </div>
              </div>
              <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '15px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.1)', padding: '12px', borderRadius: '14px' }}>
                     <Mail size={20} color="var(--primary)" />
                  </div>
                  <div>
                      <p style={{ fontWeight: '700', fontSize: '1rem' }}>orders@zaibielite.com</p>
                      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>Response in 15m</p>
                  </div>
              </div>
         </div>
      </div>

    </div>
  );
};

export default Home;

