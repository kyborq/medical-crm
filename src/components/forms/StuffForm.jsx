import React, { useState } from 'react';
import _ from 'lodash';
import { ErrorMessage } from '../ErrorMessage';

import './FormStyle.css';

const specList = [
  { id: 0, name: 'Врач ' },
  { id: 1, name: 'Педиатр ' },
  { id: 2, name: 'Хирург ' },
  { id: 3, name: 'Логопед ' },
  { id: 4, name: 'Велосипед ' },
];

// Форма для добавления персонала в таблицу
export function StuffForm() {
  const [fio, setFio] = useState(null);
  const [spec, setSpec] = useState(null);
  const [dur, setDur] = useState(null);
  const [error, setError] = useState(null);
  // const [isSubmit, submit] = useState(false);

  const isFormValid = (fio, spec, dur) => {
    if (_.isNull(fio) && _.isNull(spec)) {
      return { message: 'Заполните все поля' };
    }

    if (!_.isNull(fio) && _.isEmpty(fio) && fio.split(' ').length !== 3) {
      return { message: 'Ф.И.О введен неверно' };
    }

    if (!_.isNull(spec) && _.isEmpty(spec)) {
      return { message: 'Специализация не выбрана' };
    }

    if (!_.isNull(dur) && !_.isInteger(dur) && dur === 0) {
      return { message: 'Продолжительность приема введена неверно' };
    }

    return null;
  };

  // const validation = isFormValid(fio, spec, dur);
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
        <input
          type="text"
          className="form-field"
          placeholder="ФИО"
          value={fio || ''}
          onChange={(e) => {
            setFio(e.target.value);
          }}
        />
        {/* <input
          type="text"
          className="form-field"
          placeholder="Специализация"
          value={spec || ''}
          onChange={(e) => {
            setSpec(e.target.value);
          }}
        /> */}

        <select
          onChange={(e) => {
            setSpec(e.target.value);
          }}
        >
          {/* <option value="Чебурашка">Чебурашка</option>
          <option value="Крокодил Гена">Крокодил Гена</option>
          <option value="Шапокляк">Шапокляк</option>
          <option value="Крыса Лариса">Крыса Лариса</option> */}
          {specList.map((spec) => (
            <option key={spec.id} value={spec.name}>
              {spec.name}
            </option>
          ))}
        </select>

        <input
          type="text"
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
            // submit(true);
          }}
        >
          Добавить
        </button>
      </form>
    </div>
  );
}
