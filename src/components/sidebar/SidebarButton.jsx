import React from 'react';

import './SidebarButton.css';

export function SidebarButton({ icon, label, theme, handleClick }) {
  return (
    <button
      className={'side-button ' + theme}
      onClick={() => {
        handleClick();
      }}
    >
      <span className="material-icons side-button-icon">{icon}</span>
      <span className="side-button-label">{label}</span>
    </button>
  );
}
