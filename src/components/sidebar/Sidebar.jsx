import React from 'react';

import './Sidebar.css';

import { Logo } from './Logo';
import { Navigation } from './Navigation';

export function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <Logo />
        <Navigation />
      </div>
    </div>
  );
}
