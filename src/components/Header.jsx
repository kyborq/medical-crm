import React from 'react';

import './Header.css';

export function Header(props) {
  return (
    <div className='header'>
      <h2 className='page-title'>{props.title}</h2>
    </div>
  );
}
