import React from 'react';

import './FormStyle.css';

export function ServicesForm() {
  const [service, setService] = useState('');
  const [cost, setCost] = useState(0);
  const [duration, setDuration] = useState(0);

  const isFormValid = (serviceName, cost, duration) => {
    if (typeof serviceName === 'string') {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <input
        type='text'
        className='form-field'
        placeholder='Название услуги'
        onInput={(e) => {
          setService(e.target.value);
        }}
      />
      <input
        type='text'
        className='form-field'
        placeholder='Цена'
        onInput={(e) => {
          setCost(e.target.value);
        }}
      />
      <input
        type='text'
        className='form-field'
        placeholder='Продолжительность'
        onInput={(e) => {
          setDuration(e.target.value);
        }}
      />
      <button
        className='form-button'
        onClick={() => {
          isFormValid(service, cost, duration);
        }}
      >
        Добавить
      </button>
    </div>
  );
}
