import React, { useState } from 'react';

import './FormStyle.css';

const Data = {
  login: 'user1',
  password: 'pass123',
};

export function LoginForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = (login, password) => {
    if (
      login === Data.login &&
      password === Data.password &&
      login.length < 20 &&
      password.length > 6
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="auth-form">
      <h2 className="form-title">Войти в систему</h2>

      <span className="field-label">Логин:</span>
      <input
        type="text"
        className="form-field"
        placeholder="Имя пользователя"
        onInput={(e) => {
          setLogin(e.target.value);
        }}
      />

      <span className="field-label">Пароль:</span>
      <input
        type="password"
        className="form-field"
        placeholder="Пароль"
        onInput={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button
        className="form-button"
        onClick={() => {
          if (isFormValid(login, password)) {
            location.href = '/dashboard';
          }
        }}
      >
        Войти
      </button>

      {!isFormValid(login, password) && (
        <div className="not-valid">Ошибка входа. Не валидные данные!</div>
      )}
    </div>
  );
}
