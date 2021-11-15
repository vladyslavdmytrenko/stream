import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <NavLink to="/" className="nav-link" activeClassName={'active'}>
        Home
      </NavLink>
    </header>
  );
};

export default Header;
