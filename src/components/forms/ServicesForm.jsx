import React, { useState } from "react";

import "./FormStyle.css";

export function ServicesForm() {
  const [service, setService] = useState("");
  const [cost, setCost] = useState(0);
  const [duration, setDuration] = useState(0);

  const isFormValid = (service, cost, duration) => {
    // ...
    if (service !== "" && service.trim() === service) {
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
        placeholder="Название услуги"
        value={service}
        onChange={(e) => {
          setService(e.target.value);
        }}
      />
      <input
        type="text"
        className="form-field"
        placeholder="Цена"
        value={cost}
        onChange={(e) => {
          if (e.target.value === "") e.target.value = "0";
          setCost(parseInt(e.target.value));
        }}
      />
      <input
        type="text"
        className="form-field"
        placeholder="Продолжительность"
        value={duration}
        onChange={(e) => {
          if (e.target.value === "") e.target.value = "0";
          setDuration(parseInt(e.target.value));
        }}
      />
      <button
        className="form-button"
        onClick={() => {
          if (isFormValid(service, cost, duration)) {
            console.log("Добавлено");
          } else {
            console.log("Ошибка! Данные не валидны");
          }
        }}
      >
        Добавить
      </button>
    </div>
  );
}
