import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Menu as MenuIcon, ShoppingCart, DownloadCloud, Tag } from 'lucide-react';
import './BottomNav.css';

const BottomNav = ({ onInstall }) => {
  return (
    <div className="bottom-nav">
      <NavLink to="/" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
        <Home size={24} />
        <span>Home</span>
      </NavLink>
      <NavLink to="/menu" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
        <MenuIcon size={24} />
        <span>Menu</span>
      </NavLink>
      <NavLink to="/deals" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
        <Tag size={24} />
        <span>Deals</span>
      </NavLink>
      <NavLink to="/cart" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
        <ShoppingCart size={24} />
        <span>Cart</span>
      </NavLink>
      <button 
        onClick={onInstall} 
        className="nav-item" 
        style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}
      >
        <DownloadCloud size={24} color="var(--primary)" />
        <span style={{ color: 'var(--primary)', fontWeight: '600' }}>Install</span>
      </button>
    </div>
  );
};

export default BottomNav;

