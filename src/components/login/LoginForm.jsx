import React, { useState } from 'react';

import './LoginForm.css';

const Data = {
  login: 'user1',
  password: 'pass123',
};

export function LoginForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = () => {
    if (login === Data.login && password === Data.password) {
      // location.pathname = '/stuff';
      return <div className="valid">Данные совпадают!</div>;
    } else {
      return <div className="not-valid">Ошибка входа. Не валидные данные!</div>;
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

      <input
        type="submit"
        value="Войти"
        className="form-button"
        onClick={() => {
          isFormValid();
        }}
      />

      {isFormValid()}
    </div>
  );
}
