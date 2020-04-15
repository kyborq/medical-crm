import React from 'react';

import '../styles/NavigationButton.css';

export function NavigationButton(props) {
  return (
    <div className='nav-button'>
      <span className='material-icons button-icon'>{props.icon}</span>
      <span className='button-label'>{props.label}</span>
    </div>
  );
}
