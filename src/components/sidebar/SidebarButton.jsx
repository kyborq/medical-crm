import React from 'react';

const classnames = require('classnames');

import './SidebarButton.css';

export function SidebarButton({ icon, label, theme, handleClick }) {
  return (
    <button
      className={classnames('side-button', theme)}
      onClick={() => {
        handleClick();
      }}
    >
      <span className="material-icons side-button-icon">{icon}</span>
      <span className="side-button-label">{label}</span>
    </button>
  );
}
