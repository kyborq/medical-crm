import React from 'react';

import './FormStyle.css';

export function StuffForm() {
  return (
    <div>
      <input type="text" className="form-field" placeholder="ФИО" />
      <input type="text" className="form-field" placeholder="Специализация" />
      <input type="text" className="form-field" placeholder="Время приема" />
      <button className="form-button">Добавить</button>
    </div>
  );
}
