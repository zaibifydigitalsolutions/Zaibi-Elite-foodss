import React from 'react';
import { supabase } from '../supabaseClient';

const Cart = () => {
  return (
    <div className="container" style={{ paddingBottom: '80px' }}>
      <h2 className="mb-3" style={{ fontSize: '28px', fontWeight: '800' }}>Your Order</h2>
      
      <div className="card mb-3 flex-between" style={{ padding: '20px' }}>
        <div className="flex-center gap-2">
          <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=100&q=80" alt="Burger" style={{ width: '60px', height: '60px', borderRadius: '12px', objectFit: 'cover' }} />
          <div>
            <h4 style={{ fontWeight: '700', marginBottom: '4px', color: '#111111' }}>Classic Cheeseburger</h4>
            <p style={{ fontSize: '16px', fontWeight: '800', color: 'var(--primary)' }}>$8.99</p>
          </div>
        </div>
        <div className="flex-center gap-1" style={{ background: 'var(--background)', padding: '4px', borderRadius: 'var(--radius-pill)', border: '1px solid #F0F0F0' }}>
          <button style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#FFFFFF', fontWeight: 'bold', display:'flex', alignItems:'center', justifyContent:'center' }}>-</button>
          <span style={{ margin: '0 8px', fontWeight: '600' }}>1</span>
          <button style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#111111', color: 'white', fontWeight: 'bold', display:'flex', alignItems:'center', justifyContent:'center' }}>+</button>
        </div>
      </div>

      <div className="card mb-3" style={{ padding: '24px' }}>
        <div className="flex-between mb-2">
          <span style={{ color: '#888888', fontWeight: '500' }}>Subtotal</span>
          <span style={{ fontWeight: '600', color: '#111111' }}>$8.99</span>
        </div>
        <div className="flex-between mb-2">
          <span style={{ color: '#888888', fontWeight: '500' }}>Delivery</span>
          <span style={{ fontWeight: '600', color: '#111111' }}>$2.00</span>
        </div>
        <hr style={{ border: 'none', borderTop: '2px dashed #F0F0F0', margin: '16px 0' }} />
        <div className="flex-between mb-3">
          <span style={{ fontWeight: '800', fontSize: '20px', color: '#111111' }}>Total</span>
          <span style={{ fontWeight: '800', fontSize: '24px', color: '#111111' }}>$10.99</span>
        </div>
        
        {/* Unrestricted WhatsApp Order Button */}
        <button 
           className="btn-primary" 
           style={{ backgroundColor: '#25D366', height: '56px', fontSize: '18px', boxShadow: '0 8px 24px rgba(37, 211, 102, 0.3)' }} 
           onClick={async () => {
             // 1. Instantly Generate WhatsApp Format
             const restaurantPhone = "923319068234";
             const message = `Hello Zaibi Elite Foods! 👋\n\nI would like to place an order now.\n\nOrder Details:\n1x Classic Cheeseburger\n\nOrder Total: $10.99\n\nPlease confirm my order!`;
             const whatsappUrl = `https://wa.me/${restaurantPhone}?text=${encodeURIComponent(message)}`;
             
             // 2. Quietly attempt to save metric to Supabase if session exists
             try {
                const { data: { session } } = await supabase.auth.getSession();
                if (session && session.user) {
                   await supabase.from('orders').insert([ 
                     { user_id: session.user.id, total_amount: 10.99, delivery_address: 'Guest' } 
                   ]);
                }
             } catch(e) { }
             
             // 3. Immediately Fire Redirect to WhatsApp
             window.open(whatsappUrl, '_blank');
           }}
        >
           Order via WhatsApp
        </button>
      </div>
    </div>
  );
};

export default Cart;
