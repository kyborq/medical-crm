import React, { useState } from 'react';
import _ from 'lodash';
import { ErrorMessage } from '../ErrorMessage';
import axios from 'axios';

import { SelectBox } from '../SelectBox';

import './FormStyle.css';

const specList = [
  { id: 0, name: '' },
  { id: 1, name: 'Врач' },
  { id: 2, name: 'Педиатр' },
  { id: 3, name: 'Хирург' },
  { id: 4, name: 'Логопед' },
];

// Форма для добавления персонала в таблицу
export function StuffForm() {
  const [fio, setFio] = useState(null);
  const [spec, setSpec] = useState(null);
  const [dur, setDur] = useState(null);
  const [error, setError] = useState(null);

  const isFormValid = (fio, spec, dur) => {
    if (_.isNull(fio) && _.isNull(spec)) {
      return { message: 'Заполните все поля' };
    }

    if ((!_.isNull(fio) && _.isEmpty(fio)) || fio.split(' ').length !== 3) {
      return { message: 'Ф.И.О введен неверно' };
    }

    if (!_.isNull(spec) && _.isEmpty(spec)) {
      return { message: 'Специализация не выбрана' };
    }

    if ((!_.isNull(dur) && !_.isInteger(dur)) || dur <= 0 || dur > 30) {
      return { message: 'Продолжительность приема введена неверно' };
    }

    return null;
  };

  return (
    <div>
      {error && error.message && <ErrorMessage text={error.message} />}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const err = isFormValid(fio, spec, dur);
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

        <span className="field-label">Специализация</span>
        <SelectBox
          items={specList}
          itemSelected={(value) => {
            setSpec(value);
          }}
        />

        <span className="field-label">Время приема</span>
        <input
          type="number"
          min="5"
          max="30"
          className="form-field"
          placeholder="Время приема"
          value={dur || 0}
          onChange={(e) => {
            if (e.target.value === '') e.target.value = '0';
            setDur(parseInt(e.target.value));
          }}
        />
        <button
          className="form-button"
          onClick={() => {
            if (_.isNull(error)) {
              axios
                .post('http://localhost/stuff', {
                  fio,
                  spec,
                  dur,
                })
                .then(function (response) {
                  const data = response.data;
                  if (data.message === 'ok') {
                    console.log(data);
                    setFio(null);
                    setSpec(null);
                    setDur(null);
                  } else {
                    setError({ message: 'запрос не выполнен' });
                  }
                })
                .catch(function (error) {
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
