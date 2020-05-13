import React, { useState } from "react";

import "./FormStyle.css";

export function ServicesForm() {
  const [service, setService] = useState("");
  const [cost, setCost] = useState(0);
  const [duration, setDuration] = useState(0);

  const isFormValid = (service, cost, duration) => {
    // ...
    if (service !== "" && cost !== "" && duration !== "") {
      // ...
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
          setCost(e.target.value);
        }}
      />
      <input
        type="text"
        className="form-field"
        placeholder="Продолжительность"
        value={duration}
        onChange={(e) => {
          setDuration(e.target.value);
        }}
      />
      <button
        className="form-button"
        onClick={() => {
          console.log(
            "Сервис: " +
              service +
              ", Стоимость: " +
              cost +
              ", Продолжительность: " +
              duration
          );
          isFormValid(service, cost, duration);
        }}
      >
        Добавить
      </button>
    </div>
  );
}
