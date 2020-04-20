import React from 'react';

import './LoginForm.css';

export function LoginForm() {
  return (
    <div className='auth-form'>
      <h2 className='form-title'>Войти в систему</h2>
      <span className='field-label'>Логин:</span>
      <input type='text' placeholder='Имя пользователя' className='form-field' />
      <span className='field-label'>Пароль:</span>
      <input type='password' placeholder='Пароль' className='form-field' />
      <input type='submit' value='Войти' className='form-button' />
    </div>
  );
}
