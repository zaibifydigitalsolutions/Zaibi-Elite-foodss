import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Menu as MenuIcon, ShoppingCart, User, Tag } from 'lucide-react';
import './BottomNav.css';

const BottomNav = () => {
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
      <NavLink to="/profile" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
        <User size={24} />
        <span>Profile</span>
      </NavLink>
    </div>
  );
};

export default BottomNav;
