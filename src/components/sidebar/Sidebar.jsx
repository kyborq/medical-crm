import React from 'react';

import './Sidebar.css';

import { Navigation } from './Navigation';

export function Sidebar() {
  return (
    <div className='left-sidebar'>
      <div className='sidebar-content'>
        <h1 className='text-logo'>
          Medical <span className='text-logo-part'>CRM</span>
        </h1>

        <Navigation />
      </div>
    </div>
  );
}
