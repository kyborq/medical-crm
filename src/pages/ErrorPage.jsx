import React from 'react';

import './ErrorPage.css';

export function ErrorPage({ error, message }) {
  return (
    <div className='error-page'>
      <div className='error-box'>
        <h1 className='error-title'>{error}</h1>
        <p className='error-text'>{message}</p>
      </div>
    </div>
  );
}
