import React from 'react';

import './Modal.css';

export function Modal({ children, isOpen }) {
  isOpen ?? <div className="modal-dialogue">{children}</div>;
}
