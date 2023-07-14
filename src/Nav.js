import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/dogs" activeClassName="active">
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
