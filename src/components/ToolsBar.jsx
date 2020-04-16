import React from 'react';

import './ToolsBar.css';

export function ToolsBar(props) {
  return (
    <div className='right-sidebar'>
      <h3 className='sidebar-title'>{props.title}</h3>
      {props.children}
    </div>
  );
}
