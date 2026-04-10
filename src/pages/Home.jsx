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
  { name: "Emily C.", text: "Customer service is top notch and the food is great.", rating: 5 },
  { name: "Tom B.", text: "The combo deals save me so much money for family dinners.", rating: 4 },
  { name: "Ashley V.", text: "Can't live without their fresh lemonade and wings.", rating: 5 },
  { name: "Chris P.", text: "Very easy to use app and the food is top tier.", rating: 5 },
  { name: "Nicole Y.", text: "I've never had a late order. Absolutely love it.", rating: 5 },
  { name: "David M.", text: "Great interface and even better cheeseburgers.", rating: 4 }
];

// Duplicate for infinite marquee logic
const doubledTestimonials = [...testimonials, ...testimonials];

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProducts = products.filter(p => activeCategory === "All" || p.category === activeCategory);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="container home-page" style={{ paddingBottom: '110px', overflowX: 'hidden' }}>
      
      {/* Header */}
      <div className="flex-between mb-3" style={{ alignItems: 'center' }}>
        <div className="flex-center gap-1" style={{ backgroundColor: 'var(--surface)', padding: '8px 16px', borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ background: 'var(--primary)', borderRadius: '50%', padding: '4px', display: 'flex' }}>
             <MapPin size={14} color="white" />
          </div>
          <span style={{ fontWeight: '600', fontSize: '13px' }}>Jl. Soekarno Hatta 15A</span>
          <ChevronDown size={14} />
        </div>
        <div className="user-avatar" style={{ boxShadow: 'var(--shadow-sm)' }}>
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=60" alt="User" />
        </div>
      </div>

      {/* Greeting */}
      <div className="mb-3">
        <h1 style={{ fontSize: '32px' }}>Fastest <br/>delivery <span style={{ color: 'var(--primary)' }}>🔥</span></h1>
      </div>

      {/* Search */}
      <div className="search-bar mb-3">
        <Search size={22} color="var(--text-primary)" />
        <input type="text" placeholder="Search categories or items..." />
      </div>

      {/* 3 Main Banners */}
      <div className="banners-container mb-3">
        <div className="promo-banner" style={{ background: 'linear-gradient(135deg, #FF6B00 0%, #FF470B 100%)' }}>
          <div className="promo-content">
            <h2 style={{color: 'white', marginBottom: '8px', fontSize: '24px'}}>Get your 30% daily<br/>discount now!</h2>
            <button className="btn-dark mt-2">Order now</button>
          </div>
          <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80" alt="Promo" className="promo-img"/>
        </div>
        <div className="promo-banner" style={{ background: 'linear-gradient(135deg, #FFB000 0%, #FF8A00 100%)' }}>
          <div className="promo-content">
            <h2 style={{color: 'white', marginBottom: '8px', fontSize: '24px'}}>Free Delivery<br/>on Pizzas</h2>
            <button className="btn-dark mt-2">Claim Free</button>
          </div>
          <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=300&q=80" alt="Promo" className="promo-img"/>
        </div>
        <div className="promo-banner" style={{ background: 'linear-gradient(135deg, #43A047 0%, #81C784 100%)' }}>
          <div className="promo-content">
            <h2 style={{color: 'white', marginBottom: '8px', fontSize: '24px'}}>Fresh & Healthy</h2>
            <p style={{color: 'rgba(255,255,255,0.9)', marginBottom: '16px'}}>Explore vegan options.</p>
            <button className="btn-dark mt-1">Explore</button>
          </div>
          <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=300&q=60" alt="Promo" className="promo-img"/>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-3">
        <h3 className="mb-2" style={{ fontSize: '20px', fontWeight: '800' }}>Categories</h3>
        <div className="category-list">
          {categories.map((cat, idx) => (
            <div 
               key={idx} 
               onClick={() => setActiveCategory(cat)}
               className={`category-item ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </div>
          ))}
        </div>
      </div>

      {/* Popular Items filter mapped */}
      <div className="mb-4">
        <div className="flex-between mb-2">
          <h3 style={{ fontSize: '20px', fontWeight: '800' }}>{activeCategory === "All" ? "Popular items 👏" : `${activeCategory} Items`}</h3>
          <button className="btn-see-all">See all</button>
        </div>
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.slice(0,6).map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        ) : (
          <p className="text-secondary" style={{ textAlign: 'center', marginTop: '32px' }}>No items found for this category.</p>
        )}
      </div>

      {/* 3 Flash Sales Banners Carousel (NEW OFFER SECTION) */}
      <div className="mb-4">
        <h3 className="mb-2" style={{ fontSize: '20px', fontWeight: '800' }}>Flash Sales ⚡</h3>
        <div className="banners-container">
            <div className="promo-banner" style={{ height: '140px', background: 'linear-gradient(135deg, #FF9800 0%, #FF5722 100%)' }}>
              <div className="promo-content">
                <h2 style={{color: 'white', marginBottom: '8px', fontSize: '20px'}}>BOGO Burgers</h2>
                <button className="btn-see-all">Buy 1 Get 1</button>
              </div>
              <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=300&q=80" alt="Promo" className="promo-img" style={{ right: '-30px', bottom: '-40px' }}/>
            </div>
            <div className="promo-banner" style={{ height: '140px', background: 'linear-gradient(135deg, #673AB7 0%, #3F51B5 100%)' }}>
               <div className="promo-content">
                <h2 style={{color: 'white', marginBottom: '8px', fontSize: '20px'}}>Student Discount</h2>
                <button className="btn-see-all">20% Off</button>
              </div>
              <img src="https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=300&q=80" alt="Promo" className="promo-img" style={{ right: '-30px', bottom: '-40px' }}/>
            </div>
            <div className="promo-banner" style={{ height: '140px', background: 'linear-gradient(135deg, #CDDC39 0%, #8BC34A 100%)' }}>
               <div className="promo-content">
                <h2 style={{color: 'white', marginBottom: '8px', fontSize: '20px'}}>Healthy Hour</h2>
                <button className="btn-see-all">Half price salads</button>
              </div>
              <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&q=80" alt="Promo" className="promo-img" style={{ right: '-30px', bottom: '-40px' }}/>
            </div>
        </div>
      </div>

      {/* 3 Deals Banners Carousel */}
      <div className="mb-4">
        <h3 className="mb-2" style={{ fontSize: '20px', fontWeight: '800' }}>Exclusive Deals 🎁</h3>
        <div className="banners-container">
            <div className="promo-banner" style={{ height: '140px', background: 'linear-gradient(135deg, #111111 0%, #333333 100%)' }}>
              <div className="promo-content">
                <h2 style={{color: 'white', marginBottom: '8px', fontSize: '20px'}}>Night Owl Meal</h2>
                <button className="btn-see-all">Order After 10PM</button>
              </div>
              <img src="https://images.unsplash.com/photo-1615486171448-4fdaddcb4e52?auto=format&fit=crop&w=300&q=80" alt="Promo" className="promo-img" style={{ right: '-30px', bottom: '-40px' }}/>
            </div>
            <div className="promo-banner" style={{ height: '140px', background: 'linear-gradient(135deg, #F44336 0%, #E53935 100%)' }}>
               <div className="promo-content">
                <h2 style={{color: 'white', marginBottom: '8px', fontSize: '20px'}}>Family Feast</h2>
                <button className="btn-see-all">Save $15 Today</button>
              </div>
              <img src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=300&q=80" alt="Promo" className="promo-img" style={{ right: '-30px', bottom: '-40px' }}/>
            </div>
            <div className="promo-banner" style={{ height: '140px', background: 'linear-gradient(135deg, #00BCD4 0%, #009688 100%)' }}>
               <div className="promo-content">
                <h2 style={{color: 'white', marginBottom: '8px', fontSize: '20px'}}>Thirsty Thursday</h2>
                <button className="btn-see-all">Free Lemonade</button>
              </div>
              <img src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=300&q=80" alt="Promo" className="promo-img" style={{ right: '-30px', bottom: '-40px' }}/>
            </div>
        </div>
      </div>

      {/* Infinite Scrolling Testimonials Marquee */}
      <div className="mb-4">
          <h3 className="mb-2" style={{ fontSize: '20px', fontWeight: '800' }}>Happy Foodies ⭐</h3>
          <div className="testimonials-wrapper">
            <div className="testimonials-container">
               {doubledTestimonials.map((test, index) => (
                  <div key={index} className="testimonial-card">
                     <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}>
                        {[...Array(test.rating)].map((_, i) => <Star key={i} size={14} fill="#FFB000" color="#FFB000" />)}
                     </div>
                     <p style={{ fontStyle: 'italic', color: '#555555', fontSize: '13px', marginBottom: '12px' }}>"{test.text}"</p>
                     <h4 style={{ fontWeight: '700', fontSize: '14px', color: '#111111' }}>- {test.name}</h4>
                  </div>
               ))}
            </div>
          </div>
      </div>

      {/* FAQs */}
      <div className="mb-4">
         <h3 className="mb-2" style={{ fontSize: '20px', fontWeight: '800' }}>FAQs ❓</h3>
         <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => (
                <div key={idx} className="faq-card" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                   <div className="flex-between">
                       <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#111111' }}>{faq.q}</h4>
                       <ChevronDown size={18} style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s' }} />
                   </div>
                   {openFaq === idx && (
                       <p className="mt-1" style={{ color: '#777', fontSize: '14px', lineHeight: '1.5' }}>{faq.a}</p>
                   )}
                </div>
            ))}
         </div>
      </div>

      {/* Contact Section */}
      <div className="mb-1">
         <h3 className="mb-2" style={{ fontSize: '20px', fontWeight: '800' }}>Get in Touch 📞</h3>
         <div className="contact-card">
              <div className="flex-center mb-2" style={{ justifyContent: 'flex-start', gap: '12px' }}>
                  <div style={{ background: 'rgba(255, 71, 11, 0.1)', padding: '12px', borderRadius: '50%' }}>
                     <Phone size={20} color="var(--primary)" />
                  </div>
                  <div>
                      <p style={{ fontWeight: '700', color: '#111111' }}>Phone Support</p>
                      <p style={{ color: '#777', fontSize: '13px' }}>+92 331 9068234</p>
                  </div>
              </div>
              <div className="flex-center mb-2" style={{ justifyContent: 'flex-start', gap: '12px' }}>
                  <div style={{ background: 'rgba(255, 71, 11, 0.1)', padding: '12px', borderRadius: '50%' }}>
                     <Mail size={20} color="var(--primary)" />
                  </div>
                  <div>
                      <p style={{ fontWeight: '700', color: '#111111' }}>Email Us</p>
                      <p style={{ color: '#777', fontSize: '13px' }}>orders@zaibielite.com</p>
                  </div>
              </div>
              <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '12px' }}>
                  <div style={{ background: 'rgba(255, 71, 11, 0.1)', padding: '12px', borderRadius: '50%' }}>
                     <Map size={20} color="var(--primary)" />
                  </div>
                  <div>
                      <p style={{ fontWeight: '700', color: '#111111' }}>Food Kitchen</p>
                      <p style={{ color: '#777', fontSize: '13px' }}>123 Main Street, Food District</p>
                  </div>
              </div>
         </div>
      </div>

    </div>
  );
};

export default Home;
