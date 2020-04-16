import React from 'react';

import './Container.css';

export function Container(props) {
  return <div className='main-wrap'>{props.children}</div>;
}
