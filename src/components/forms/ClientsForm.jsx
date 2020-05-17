import React, { useState } from 'react';
import _ from 'lodash';

import { ErrorMessage } from '../ErrorMessage';

import './FormStyle.css';

export function ClientsForm() {
  const [fio, setFio] = useState(null);
  const [register, setRegister] = useState(null);
  const [birthday, setBirthday] = useState(null);
  const [phone, setPhone] = useState(null);
  const [isSubmit, submit] = useState(false);

  const isFormValid = (fio, registration, birthday, phone) => {
    if (
      _.isNull(fio) &&
      _.isNull(registration) &&
      _.isNull(birthday) &&
      _.isNull(phone)
    ) {
      return true;
    }

    if (!_.isNull(fio) && _.isEmpty(fio) && fio.split(' ').length !== 3) {
      return { message: 'Ф.И.О введен неверно' };
    }

    if (!_.isNull(registration) && _.isEmpty(registration)) {
      return { message: 'Данные о регистрации введены неверно' };
    }

    if (!_.isNull(birthday) && birthday.split('.').length !== 3) {
      return { message: 'Дата рождения введена неверно' };
    }

    if (!_.isNull(phone) && _.isEmpty(phone)) {
      return { message: 'Номер телефона введен неверно' };
    }

    return null;
  };

  const validation = isFormValid(fio, register, birthday, phone);
  return (
    <div>
      {isSubmit && validation && validation.message && (
        <ErrorMessage text={validation.message} />
      )}
      <input
        type="text"
        className="form-field"
        placeholder="ФИО"
        value={fio || ''}
        onChange={(e) => {
          setFio(e.target.value);
        }}
      />
      <input
        type="text"
        className="form-field"
        placeholder="Данные о прописке"
        value={register || ''}
        onChange={(e) => {
          setRegister(e.target.value);
        }}
      />
      <input
        type="text"
        className="form-field"
        placeholder="Дата рождения"
        value={birthday || ''}
        onChange={(e) => {
          if (e.target.value.length === 2) {
            e.target.value += '.';
          }

          if (e.target.value.length === 5) {
            e.target.value += '.';
          }

          if (e.target.value.length > 10) {
            e.target.value = birthday;
          }

          setBirthday(e.target.value);
        }}
      />
      <input
        type="text"
        className="form-field"
        placeholder="Номер телефона"
        value={phone || ''}
        onChange={(e) => {
          if (e.target.value.length < 3) {
            e.target.value = '+7(';
          }

          if (e.target.value.length === 6) {
            e.target.value += ')';
          }

          if (e.target.value.length === 10 || e.target.value.length === 13) {
            e.target.value += '-';
          }

          if (e.target.value.length > 16) {
            e.target.value = phone;
          }

          setPhone(e.target.value);
        }}
      />
      <button
        className="form-button"
        onClick={() => {
          submit(true);
        }}
      >
        Добавить
      </button>
    </div>
  );
}
