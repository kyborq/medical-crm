import React, { useState } from "react";
import _ from "lodash";

import "./FormStyle.css";

// Форма для добавления персонала в таблицу
export function StuffForm() {
  const [fio, setFio] = useState(null);
  const [spec, setSpec] = useState(null);
  const [dur, setDur] = useState(null);
  const [isSubmit, submit] = useState(false);

  const isFormValid = (fio, spec, dur) => {
    // ...
    if (_.isNull(fio) && _.isNull(spec)) {
      return true;
    }

    if (!_.isNull(fio) && _.isEmpty(fio) && fio.split(' ').length !== 3) {
      return { message: "Ф.И.О введен неверно"};
    }

    if (!_.isNull(spec) && _.isEmpty(spec)) {
      return { message: "Специализация введена неверно"};
    }

    if (!_.isNull(dur) && !_.isInteger(dur)) {
      return { message: "Продолжительность приема введена неверно"};
    }

    return null;
  };

  const validation = isFormValid(fio, spec, dur);
  return (
    <div>
      {isSubmit && validation && validation.message && <span>{validation.message}</span>}
      <input
        type="text"
        className="form-field"
        placeholder="ФИО"
        value={fio || ""}
        onChange={(e) => {
          setFio(e.target.value);
        }}
      />
      <input
        type="text"
        className="form-field"
        placeholder="Специализация"
        value={spec || ""}
        onChange={(e) => {
          setSpec(e.target.value);
        }}
      />
      <input
        type="text"
        className="form-field"
        placeholder="Время приема"
        value={dur || 0}
        onChange={(e) => {
          if (e.target.value === "") e.target.value = "0";
          setDur(parseInt(e.target.value));
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
