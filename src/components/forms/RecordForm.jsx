import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import _ from 'lodash';

import './FormStyle.css';

import { SelectBox } from '../SelectBox';
import { ErrorMessage } from '../ErrorMessage';

export function RecordForm({ selDate, selTime, selDoctor }) {
  const [date, setDate] = useState(moment(selDate, 'YYYY-MM-DD').format('YYYY-MM-DD'));
  const [time, setTime] = useState(moment(selTime, 'HH:mm').format('HH:mm'));
  const [doctor, setDoctor] = useState(selDoctor || null);
  const [service, setService] = useState(null);

  const [stuffList, setStuffList] = useState([]);
  const [servicesList, setServiceList] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost/stuff')
      .then((response) => {
        const data = response.data;
        if (data.message === 'ok') {
          setStuffList(data.content.map((stuff) => stuff.fio));
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get('http://localhost/services')
      .then((response) => {
        const data = response.data;
        if (data.message === 'ok') {
          setServiceList(data.content.map((service) => service.name));
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const isFormValid = (date, time, doc, ser) => {
    if (_.isNull(date) || _.isNull(time) || _.isNull(doc) || _.isNull(ser)) {
      return { message: 'Заполните все поля' };
    }

    if (!_.isNull(date) && _.isEmpty(date)) {
      return { message: 'Дата введена неверно', currentValue: date };
    }

    if (!_.isNull(time) && _.isEmpty(time)) {
      return { message: 'Время введено неверно', currentValue: time };
    }

    if (!_.isNull(doc) && _.isEmpty(doc)) {
      return { message: 'Врач не выбран', currentValue: doc };
    }

    if (!_.isNull(ser) && _.isEmpty(ser)) {
      return { message: 'Услуга не выбрана', currentValue: ser };
    }

    return null;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const err = isFormValid(date, time, doctor, service);
        console.log(err);
        setError(err ? err : null);
      }}
    >
      <span className='field-label'>Дата</span>
      <input
        type='date'
        className='form-field'
        value={date || ''}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <span className='field-label'>Время</span>
      <input
        type='time'
        className='form-field'
        value={time}
        onChange={(e) => {
          console.log(e.target.value);
          setTime(e.target.value);
        }}
      />

      <span className='field-label'>Врач</span>
      <SelectBox
        items={stuffList}
        value={doctor}
        itemSelected={(value) => {
          setDoctor(value);
        }}
      />

      <span className='field-label'>Услуга</span>
      <SelectBox
        items={servicesList}
        value={service}
        itemSelected={(value) => {
          console.log(value);

          setService(value);
        }}
      />

      {error && error.message && <ErrorMessage text={error.message} />}

      <button
        className='form-button'
        onClick={() => {
          if (_.isNull(isFormValid(date, time, doctor, service))) {
            // TODO: Перенести мокап данных в стейт
            // TODO: Добавить выполнение запросов и обновление данных
            // axios
            //   .post('http://localhost/records', {
            //     date,
            //     time,
            //     doctor,
            //     service,
            //   })
            //   .then(function (response) {
            //     const data = response.data;
            //     if (data.message === 'ok') {
            //       console.log(data);
            //     } else {
            //       setError({ message: 'запрос не выполнен' });
            //     }
            //   })
            //   .catch(function (error) {
            //     console.log(error);
            //   });
          }
        }}
      >
        Записать
      </button>
    </form>
  );
}
