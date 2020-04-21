import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationButton.css';

export function NavigationButton({ label, icon, link }) {
  return (
    <NavLink to={link} activeClassName='nav-active'>
      <div className='nav-button'>
        <span className='material-icons button-icon'>{icon}</span>
        <span className='button-label'>{label}</span>
      </div>
    </NavLink>
  );
}
