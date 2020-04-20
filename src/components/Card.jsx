import React from 'react';

import './Card.css';

export function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt="" className="card-image" />
      <h3 className="card-title">{props.title}</h3>
    </div>
  );
}
