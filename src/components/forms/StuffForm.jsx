import React, { useState } from "react";

import "./FormStyle.css";

// Форма для добавления персонала в таблицу
export function StuffForm() {
  const [fio, setFio] = useState("");
  const [spec, setSpec] = useState("");
  const [dur, setDur] = useState(0);

  const isFormValid = (fio, spec, dur) => {
    // ...
  };

  return (
    <div>
      <input
        type="text"
        className="form-field"
        placeholder="ФИО"
        value={fio}
        onChange={(e) => {
          setFio(e.target.value);
        }}
      />
      <input
        type="text"
        className="form-field"
        placeholder="Специализация"
        value={spec}
        onChange={(e) => {
          setSpec(e.target.value);
        }}
      />
      <input
        type="text"
        className="form-field"
        placeholder="Время приема"
        value={dur}
        onChange={(e) => {
          setDur(e.target.value);
        }}
      />
      <button
        className="form-button"
        onClick={() => {
          console.log("ФИО: " + fio + " Спец.: " + spec + " Время: " + dur);
          isFormValid(fio, spec, dur);
        }}
      >
        Добавить
      </button>
    </div>
  );
}
