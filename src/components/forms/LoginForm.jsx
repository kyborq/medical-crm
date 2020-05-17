import React, { useState } from "react";
import { ErrorMessage } from "../ErrorMessage";
import _ from "lodash";

import "./FormStyle.css";

const Data = {
  login: "user1",
  password: "pass123",
};

export function LoginForm() {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  // const [isSubmit, submit] = useState(false);

  const isFormValid = (login, password) => {
    if (_.isNull(login) || _.isNull(password)) {
      return { message: "Заполните все поля" };
    }

    if (_.isNull(login) || _.isEmpty(login)) {
      return { message: "Логин введен неверно" };
    }

    if (_.isNull(password) || _.isEmpty(password) || password.length < 6) {
      return { message: "Пароль введен неверно" };
    }

    return null;
  };

  return (
    <div className="auth-form">
      <h2 className="form-title">Войти в систему</h2>

      <form onSubmit={(e) => {
        e.preventDefault(); // чтобы не происходил HTTP запрос
        const err = isFormValid(login, password);
        console.log(err);
        setError(err ? err : null);
      }}>
        <span className="field-label">Логин:</span>
        <input
          type="text"
          className="form-field"
          placeholder="Имя пользователя"
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        />

        <span className="field-label">Пароль:</span>
        <input
          type="password"
          className="form-field"
          placeholder="Пароль"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        {error && error.message && (
          <ErrorMessage text={error.message} />
        )}

        <button
          className="form-button"
          onClick={() => {
            // submit(true);
          }}
        >
          Войти
        </button>
      </form>
    </div>
  );
}
