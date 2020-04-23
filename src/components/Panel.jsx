import React from 'react';

import './Panel.css';

export function Panel({ title, children }) {
  return (
    <div className='panel'>
      <h3 className='panel-title'>{title}</h3>
      {children}
    </div>
  );
}
