import React from 'react';

import './Wrap.css';

export function Wrap(props) {
  return <div className='main-wrap'>{props.children}</div>;
}
