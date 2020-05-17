import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationButton.css';

export function NavigationButton({ link, icon, label }) {
  return (
    <NavLink exact to={link} className='nav-button' activeClassName='active'>
      <span className='material-icons button-icon'>{icon}</span>
      <span className='button-label'>{label}</span>
    </NavLink>
  );
}
