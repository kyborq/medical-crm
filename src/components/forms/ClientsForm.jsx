import React, { useState } from 'react';
import axios from 'axios';
import _ from 'lodash';

import { ErrorMessage } from '../ErrorMessage';

import './FormStyle.css';

export function ClientsForm({ onSubmitAdd }) {
  const [fio, setFio] = useState(null);
  const [register, setRegister] = useState(null);
  const [birthday, setBirthday] = useState(null);
  const [phone, setPhone] = useState(null);
  const [error, setError] = useState(null);

  const isFormValid = (fio, registration, birthday, phone) => {
    if (_.isNull(fio) || _.isNull(registration) || _.isNull(birthday) || _.isNull(phone)) {
      return { message: 'Заполните все поля' };
    }

    if ((!_.isNull(fio) && _.isEmpty(fio)) || (!_.isNull(fio) && fio.split(' ').length !== 3)) {
      return { message: 'Ф.И.О введен неверно' };
    }

    if (!_.isNull(registration) && _.isEmpty(registration)) {
      return { message: 'Данные о регистрации введены неверно' };
    }

    if (!_.isNull(birthday) && birthday.split('-').length !== 3) {
      return { message: 'Дата рождения введена неверно', currentValue: birthday.split('-').length !== 3 };
    }

    if (!_.isNull(phone) && _.isEmpty(phone)) {
      return { message: 'Номер телефона введен неверно' };
    }

    return null;
  };

  return (
    <div>
      {error && error.message && <ErrorMessage text={error.message} />}
      <form
        onSubmit={(e) => {
          e.preventDefault(); // чтобы не происходил HTTP запрос
          const err = isFormValid(fio, register, birthday, phone);
          console.log(err);
          setError(err ? err : null);
        }}
      >
        <span className="field-label">ФИО</span>
        <input
          type="text"
          className="form-field"
          placeholder="ФИО"
          value={fio || ''}
          onChange={(e) => {
            setFio(e.target.value);
          }}
        />

        <span className="field-label">Данные о прописке</span>
        <input
          type="text"
          className="form-field"
          placeholder="Данные о прописке"
          value={register || ''}
          onChange={(e) => {
            setRegister(e.target.value);
          }}
        />

        <span className="field-label">Дата рождения</span>
        <input
          type="date"
          className="form-field"
          placeholder="Дата рождения"
          value={birthday || ''}
          onChange={(e) => {
            setBirthday(e.target.value);
          }}
        />

        <span className="field-label">Номер телефона</span>
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
            if (_.isNull(error)) {
              axios
                .post('http://localhost/clients', {
                  fio,
                  register,
                  birthday,
                  phone,
                })
                .then(function (response) {
                  const data = response.data;
                  if (data.message === 'ok') {
                    console.log(data);
                    setFio(null);
                    setRegister(null);
                    setBirthday(null);
                    setPhone(null);
                    onSubmitAdd();
                  } else {
                    setError({ message: data.message });
                  }
                })
                .catch(function (error) {
                  console.log(data);
                  console.log(error);
                });
            }
          }}
        >
          Добавить
        </button>
      </form>
    </div>
  );
}
