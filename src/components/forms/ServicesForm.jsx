import React from 'react';

import './FormStyle.css';

export function ServicesForm() {
  return (
    <div>
      <input type="text" className="form-field" placeholder="Название услуги" />
      <input type="text" className="form-field" placeholder="Цена" />
      <input type="text" className="form-field" placeholder="Продолжительность" />
      <button className="form-button">Добавить</button>
    </div>
  );
}
