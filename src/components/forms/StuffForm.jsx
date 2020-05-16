import React, { useState } from "react";

import "./FormStyle.css";

// Форма для добавления персонала в таблицу
export function StuffForm() {
  const [fio, setFio] = useState("");
  const [spec, setSpec] = useState("");
  const [dur, setDur] = useState(0);

  const isFormValid = (fio, spec, dur) => {
    // ...
    if (
      fio !== "" &&
      spec !== "" &&
      fio.trim() === fio &&
      spec.trim() === spec
    ) {
      // ...
      return true;
    } else {
      return false;
    }
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
          if (e.target.value === "") e.target.value = "0";
          setDur(parseInt(e.target.value));
        }}
      />
      <button
        className="form-button"
        onClick={() => {
          if (isFormValid(fio, spec, dur)) {
            console.log("Добавлено");
          } else {
            console.log("Ошибка");
          }
        }}
      >
        Добавить
      </button>
    </div>
  );
}
