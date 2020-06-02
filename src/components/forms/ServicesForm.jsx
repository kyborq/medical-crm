import React, { useState } from 'react';
import _ from 'lodash';
import { ErrorMessage } from '../ErrorMessage';
import axios from 'axios';

import './FormStyle.css';

export function ServicesForm({ onSubmitAdd }) {
  const [service, setService] = useState(null);
  const [cost, setCost] = useState(null);
  const [duration, setDuration] = useState(null);
  const [error, setError] = useState(null);

  const isFormValid = (service, cost, duration) => {
    if (_.isNull(service) || _.isNull(cost) || _.isNull(duration)) {
      return { message: 'Заполните все поля' };
    }

    if (!_.isNull(service) && _.isEmpty(service)) {
      return { message: 'Название введено неверно', currentValue: service };
    }

    if (!_.isNull(cost) && !_.isEmpty(cost)) {
      return { message: 'Стоимость введена неверно', currentValue: cost };
    }

    if (!_.isNull(duration) && !_.isEmpty(duration)) {
      return { message: 'Продолжительность введена неверно', currentValue: duration };
    }

    return null;
  };

  return (
    <div>
      {error && error.message && <ErrorMessage text={error.message} />}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const err = isFormValid(service, cost, duration);
          console.log(err);
          setError(err ? err : null);
        }}
      >
        <span className="field-label">Название услуги</span>
        <input
          type="text"
          className="form-field"
          placeholder="Название услуги"
          value={service || ''}
          onChange={(e) => {
            setService(e.target.value);
          }}
        />

        <span className="field-label">Цена (р)</span>
        <input
          type="number"
          min="0"
          className="form-field"
          placeholder="Цена"
          value={cost || ''}
          onChange={(e) => {
            setCost(parseInt(e.target.value));
          }}
        />

        <span className="field-label">Продолжительность (мин)</span>
        <input
          type="number"
          min="5"
          max="60"
          className="form-field"
          placeholder="Продолжительность"
          value={duration || ''}
          onChange={(e) => {
            setDuration(parseInt(e.target.value));
          }}
        />
        <button
          className="form-button"
          onClick={() => {
            if (_.isNull(error)) {
              axios
                .post('http://localhost/services', {
                  service,
                  cost,
                  duration,
                })
                .then(function (response) {
                  const data = response.data;
                  if (data.message === 'ok') {
                    console.log(data);
                    setService(null);
                    setCost(null);
                    setDuration(null);
                    onSubmitAdd();
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
