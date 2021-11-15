import React from 'react';
import { NavLink } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <header>
      <NavLink to="/" className="nav-link" activeClassName={'active'}>
        Home
      </NavLink>
      <GoogleAuth />
    </header>
  );
};

export default Header;
