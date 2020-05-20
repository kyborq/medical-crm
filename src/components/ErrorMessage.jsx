import React from 'react';

import './ErrorMessage.css';

export function ErrorMessage({ text }) {
  return <div className="error-message">{text}</div>;
}
