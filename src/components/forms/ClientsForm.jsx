import React from 'react';

import './FormStyle.css';

export function ClientsForm() {
  const [fio, setFio] = useState('');
  const [register, setRegister] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');

  const isFormValid = (fio, registration, birthday, phone) => {
    if (fio.split(' ').length === 3 && typeof registration === 'string') {
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
        placeholder='ФИО'
        onInput={(e) => {
          setFio(e.target.value);
        }}
      />
      <input
        type='text'
        className='form-field'
        placeholder='Данные о прописке'
        onInput={(e) => {
          setRegister(e.target.value);
        }}
      />
      <input
        type='text'
        className='form-field'
        placeholder='Дата рождения'
        onInput={(e) => {
          setBirthday(e.target.value);
        }}
      />
      <input
        type='text'
        className='form-field'
        placeholder='Номер телефона'
        onInput={(e) => {
          setPhone(e.target.value);
        }}
      />
      <button
        className='form-button'
        onClick={() => {
          isFormValid(fio, register, birthday, phone);
        }}
      >
        Добавить
      </button>
    </div>
  );
}
