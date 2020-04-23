import React from 'react';

import './Header.css';

export function Header({ title }) {
  return (
    <div className='header'>
      <h2 className='page-title'>{title}</h2>
    </div>
  );
}
