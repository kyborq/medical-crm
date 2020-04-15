import React from 'react';

import { Navigation } from '../components/Sidebar';

export function Sidebar() {
  return (
    <div className='left-sidebar'>
      <div className='logo'></div>

      <div className='navigation'>
        <div className='nav-button'>
          <span className='material-icons button-icon'>dashboard</span>
          <span className='button-label'>Dashboard</span>
        </div>

        <div className='nav-button'>
          <span className='material-icons button-icon'>today</span>
          <span className='button-label'>Shedule</span>
        </div>

        <div className='nav-button'>
          <span className='material-icons button-icon'>account_box</span>
          <span className='button-label'>Stuff</span>
        </div>
      </div>

      <div className='footer'>
        <a href='#'>Ссылка</a>
        <a href='#'>Ссылка</a>
      </div>
    </div>
  );
}
