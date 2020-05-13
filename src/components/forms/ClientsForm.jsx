import React, { useState } from "react";

import "./FormStyle.css";

export function ClientsForm() {
  const [fio, setFio] = useState("");
  const [register, setRegister] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phone, setPhone] = useState("");

  const isFormValid = (fio, registration, birthday, phone) => {
    // ...
    if (fio !== "" && registration !== "" && birthday !== "" && phone !== "") {
      // ...
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
        placeholder="Данные о прописке"
        value={register}
        onChange={(e) => {
          setRegister(e.target.value);
        }}
      />
      <input
        type="text"
        className="form-field"
        placeholder="Дата рождения"
        value={birthday}
        onChange={(e) => {
          setBirthday(e.target.value);
        }}
      />
      <input
        type="text"
        className="form-field"
        placeholder="Номер телефона"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <button
        className="form-button"
        onClick={() => {
          console.log(
            "fio: " +
              fio +
              ", reg: " +
              register +
              ", bday: " +
              birthday +
              ", phone: " +
              phone
          );
          isFormValid(fio, register, birthday, phone);
        }}
      >
        Добавить
      </button>
    </div>
  );
}
