import React from 'react';

export function LoginForm() {
  return (
    <div className='auth-form'>
      <span className='field-label'>Логин:</span>
      <input type='text' className='form-field' />
      <span className='field-label'>Пароль:</span>
      <input type='password' className='form-field' />
      <input type='submit' className='form-button' />
    </div>
  );
}
