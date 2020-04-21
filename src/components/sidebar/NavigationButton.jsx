import React from 'react';

import './NavigationButton.css';

export function NavigationButton({ label, icon }) {
  return (
    <div className='nav-button'>
      <span className='material-icons button-icon'>{icon}</span>
      <span className='button-label'>{label}</span>
    </div>
  );
}
