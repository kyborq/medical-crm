import React, { useState } from "react";

import "./FormStyle.css";

export function ClientsForm() {
  const [fio, setFio] = useState("");
  const [register, setRegister] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phone, setPhone] = useState("");

  const isFormValid = (fio, registration, birthday, phone) => {
    // ...
    if (
      fio !== "" &&
      registration !== "" &&
      birthday !== "" &&
      phone !== "" &&
      fio === fio.trim() &&
      registration === registration.trim()
    ) {
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
          if (e.target.value.length === 2) {
            e.target.value += ".";
          }

          if (e.target.value.length === 5) {
            e.target.value += ".";
          }

          if (e.target.value.length > 10) {
            e.target.value = birthday;
          }

          setBirthday(e.target.value);
        }}
      />
      <input
        type="text"
        className="form-field"
        placeholder="Номер телефона"
        value={phone}
        onChange={(e) => {
          if (e.target.value.length < 3) {
            e.target.value = "+7(";
          }

          if (e.target.value.length === 6) {
            e.target.value += ")";
          }

          if (e.target.value.length === 10 || e.target.value.length === 13) {
            e.target.value += "-";
          }

          if (e.target.value.length > 16) {
            e.target.value = phone;
          }

          setPhone(e.target.value);
        }}
      />
      <button
        className="form-button"
        onClick={() => {
          if (isFormValid(fio, register, birthday, phone)) {
            console.log("Добавлено");
          } else {
            console.log("Ошибка!");
          }
        }}
      >
        Добавить
      </button>
    </div>
  );
}
