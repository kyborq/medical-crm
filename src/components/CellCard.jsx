import React from 'react';

import './CellCard.css';

export function CellCard({ text, onClick }) {
  return (
    <div
      className="cell-card"
      onClick={() => {
        onClick();
      }}
    >
      {text}
    </div>
  );
}
