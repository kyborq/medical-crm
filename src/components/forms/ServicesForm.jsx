import React, { useState } from 'react';
import _ from 'lodash';

import './FormStyle.css';

export function ServicesForm() {
  const [service, setService] = useState(null);
  const [cost, setCost] = useState(null);
  const [duration, setDuration] = useState(null);
  const [isSubmit, submit] = useState(false);

  const isFormValid = (service, cost, duration) => {
    if (_.isNull(service) && _.isNull(cost) && _.isNull(duration)) {
      return true;
    }

    if (!_.isNull(service) && _.isEmpty(service)) {
      return { message: 'Название введено неверно' };
    }

    if (!_.isNull(cost) && _.isInteger(cost)) {
      return { message: 'Стоимость введена неверно' };
    }

    if (!_.isNull(duration) && _.isInteger(duration)) {
      return { message: 'Продолжительность введена неверно' };
    }
  };

  const validation = isFormValid(service, cost, duration);
  return (
    <div>
      {isSubmit && validation && validation.message && (
        <ErrorMessage text={validation.message} />
      )}
      <input
        type="text"
        className="form-field"
        placeholder="Название услуги"
        value={service || ''}
        onChange={(e) => {
          setService(e.target.value);
        }}
      />
      <input
        type="text"
        className="form-field"
        placeholder="Цена"
        value={cost || 0}
        onChange={(e) => {
          if (e.target.value === '') e.target.value = '0';
          setCost(parseInt(e.target.value));
        }}
      />
      <input
        type="text"
        className="form-field"
        placeholder="Продолжительность"
        value={duration || 0}
        onChange={(e) => {
          if (e.target.value === '') e.target.value = '0';
          setDuration(parseInt(e.target.value));
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
