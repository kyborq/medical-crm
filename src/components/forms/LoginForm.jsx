import React, { useState } from 'react';
import {ErrorMessage} from "../ErrorMessage"
import _ from 'lodash';

import './FormStyle.css';

const Data = {
  login: 'user1',
  password: 'pass123',
};

export function LoginForm() {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const [isSubmit, submit] = useState(false);

  const isFormValid = (login, password) => {
    if (_.isNull(login) && _.isNull(password)) {
      return true;
    }

    if (!_.isNull(login) && _.isEmpty(login)) {
      return { message: 'Пароль или логин введен неверно' };
    }

    if (!_.isNull(password) && _.isEmpty(password)) {
      return { message: 'Пароль или логин введен неверно' };
    }
  };

  const validation = isFormValid(login, password);
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

      {isSubmit && validation && validation.message && (
        <ErrorMessage text={validation.message} />
      )}

      <button
        className="form-button"
        onClick={() => {
          submit(true);
        }}
      >
        Войти
      </button>
    </div>
  );
}
