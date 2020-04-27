import React from 'react';

import './FormStyle.css';

export function ClientsForm() {
  return (
    <div>
      <input type="text" className="form-field" placeholder="ФИО" />
      <input type="text" className="form-field" placeholder="Данные о прописке" />
      <input type="text" className="form-field" placeholder="Дата рождения" />
      <input type="text" className="form-field" placeholder="Номер телефона" />
      <button className="form-button">Добавить</button>
    </div>
  );
}
