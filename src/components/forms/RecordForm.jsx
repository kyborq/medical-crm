import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import _ from "lodash";

import "./FormStyle.css";

import { SelectBox } from "../SelectBox";
import { ErrorMessage } from "../ErrorMessage";

export function RecordForm({ selDate, selTime, selDoctor, onSubmit }) {
  const [date, setDate] = useState(
    moment(selDate, "YYYY-MM-DD").format("YYYY-MM-DD")
  );
  const [time, setTime] = useState(moment(selTime, "HH:mm").format("HH:mm"));
  const [doctor, setDoctor] = useState(selDoctor || null);
  const [service, setService] = useState(null);
  const [client, setClient] = useState(null);

  const [stuffList, setStuffList] = useState([]);
  const [servicesList, setServiceList] = useState([]);
  const [clientsList, setClientsList] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://medical-crm-server.herokuapp.com/stuff")
      .then((response) => {
        const data = response.data;
        if (data.message === "ok") {
          setStuffList(data.content);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("https://medical-crm-server.herokuapp.com/services")
      .then((response) => {
        const data = response.data;
        if (data.message === "ok") {
          setServiceList(data.content);
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("https://medical-crm-server.herokuapp.com/clients")
      .then((response) => {
        const data = response.data;
        if (data.message === "ok") {
          setClientsList(data.content);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const isFormValid = (date, time, doc, ser, client) => {
    if (
      _.isNull(date) ||
      _.isNull(time) ||
      _.isNull(doc) ||
      _.isNull(ser) ||
      _.isNull(client)
    ) {
      return { message: "Заполните все поля" };
    }

    if (!_.isNull(date) && _.isEmpty(date)) {
      return { message: "Дата введена неверно", currentValue: date };
    }

    if (!_.isNull(time) && _.isEmpty(time)) {
      return { message: "Время введено неверно", currentValue: time };
    }

    if (!_.isNull(doc) && _.isEmpty(doc)) {
      return { message: "Врач не выбран", currentValue: doc };
    }

    if (!_.isNull(client) && _.isEmpty(client)) {
      return { message: "Клиент не выбран", currentValue: client };
    }

    if (!_.isNull(ser) && _.isEmpty(ser)) {
      return { message: "Услуга не выбрана", currentValue: ser };
    }

    return null;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const err = isFormValid(date, time, doctor, service, client);
        console.log(err);
        setError(err ? err : null);
      }}
    >
      <span className="field-label">Дата</span>
      <input
        type="date"
        className="form-field"
        value={date || ""}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <span className="field-label">Время</span>
      <input
        type="time"
        className="form-field"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
      />

      <span className="field-label">Врач</span>
      <SelectBox
        items={stuffList.map((stuff) => stuff.fio)}
        value={doctor}
        itemSelected={(value) => {
          setDoctor(value);
        }}
      />

      <span className="field-label">Клиент</span>
      <SelectBox
        items={clientsList.map((client) => client.fio)}
        value={client}
        itemSelected={(value) => {
          setClient(value);
        }}
      />

      <span className="field-label">Услуга</span>
      <SelectBox
        items={servicesList.map((service) => service.name)}
        value={service}
        itemSelected={(value) => {
          setService(value);
        }}
      />

      {error && error.message && <ErrorMessage text={error.message} />}

      <button
        className="form-button"
        onClick={() => {
          if (_.isNull(isFormValid(date, time, doctor, service, client))) {
            const ser_id = servicesList.find((ser) => ser.name === service).id;
            const client_id = clientsList.find((cli) => client === cli.fio).id;
            const doc_id = stuffList.find((stuff) => doctor === stuff.fio).id;
            const datetime = moment(
              `${date} ${time}`,
              "YYYY-MM-DD HH:mm"
            ).format("YYYY-MM-DD HH:mm");
            console.log(date, time);
            onSubmit(datetime, doc_id, ser_id, client_id);
          }
        }}
      >
        Записать
      </button>
    </form>
  );
}
