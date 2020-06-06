import React from 'react';
import classnames from 'classnames';

import './Modal.css';

export function Modal({ children, isOpen, onClose, title }) {
  return (
    <div className={classnames('modal-dialogue')}>
      <div className='modal-container'>
        <div className='modal-header'>
          <h3 className='modal-title'>{title}</h3>
          <div className='modal-actions'>
            <button
              className='modal-action-button material-icons'
              onClick={() => {
                onClose();
              }}
            >
              close
            </button>
          </div>
        </div>

        <div className='modal-content'>{children}</div>
      </div>
    </div>
  );
}
