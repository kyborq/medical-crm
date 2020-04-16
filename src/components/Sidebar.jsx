import React from 'react';

import './Sidebar.css';

import { Navigation } from './Navigation';

export function Sidebar() {
  return (
    <div className='left-sidebar'>
      <Navigation />

      <div className='footer'>
        <a href='#'>Ссылка</a>
        <a href='#'>Ссылка</a>
      </div>
    </div>
  );
}
