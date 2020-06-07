import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';

moment.locale('ru');

import { Sidebar } from '../components/sidebar/Sidebar';
import { Header } from '../components/Header';
import { Panel } from '../components/Panel';
import { Wrap } from '../components/containers/Wrap';
import { Container } from '../components/containers/Container';
import { Content } from '../components/containers/Content';
import { Page } from '../components/containers/Page';
import { RightSidebar } from '../components/containers/RightSidebar';

import { TimeTable, TimeTableRow, TimeTableCell } from '../components/TimeTable';
import { CellCard } from '../components/CellCard';
import { Modal } from '../components/Modal';
import { SelectBox } from '../components/SelectBox';
import { RecordForm } from '../components/forms/RecordForm';

export function SchedulePage() {
  const [currentDate, setDate] = useState(moment().format('yyyy-MM-DD'));
  const [showAddModal, setShowAddModal] = useState(false);

  const [selectedTime, selectTime] = useState();
  const [selectedDoctor, selectDoctor] = useState();

  const [records, setRecords] = useState([]);
  const [stuffList, setStuffList] = useState([]);

  useEffect(() => {
    updateData();
  }, []);

  const updateData = () => {
    axios
      .get('http://localhost/schedule')
      .then(function (response) {
        const data = response.data;
        if (data.message === 'ok') {
          console.log(data);
          setRecords(data.content);
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get('http://localhost/stuff')
      .then(function (response) {
        const data = response.data;
        if (data.message === 'ok') {
          console.log(data);
          setStuffList(data.content);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const generateTimeGrid = (start, end, interval) => {
    const startTime = moment(start, 'HHmm');
    const endTime = moment(end, 'HHmm');

    const timeArray = [];

    let tmpTime = startTime.format('HH:mm');

    while (tmpTime < endTime.format('HH:mm')) {
      timeArray.push(tmpTime);
      tmpTime = moment(tmpTime, 'HHmm').add(interval, 'minutes').format('HH:mm');
    }

    timeArray.push(endTime.format('HH:mm'));
    return timeArray;
  };

  const timeGrid = generateTimeGrid('08:00', '21:00', 30);

  const uniqueArr = (arr) => Array.from(new Set(arr));

  return (
    <Page>
      <Sidebar />

      <Wrap>
        <Header title={'Расписание на ' + moment(currentDate).format('LL')}>
          <span className='field-label'>Выбор даты</span>
          <input
            type='date'
            className='form-field'
            value={currentDate}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </Header>

        <Container>
          <Content>
            <TimeTable>
              <TimeTableRow header>
                <TimeTableCell value='' />
                {stuffList.map((stuff) => (
                  <TimeTableCell key={stuff.id} value={stuff.fio} />
                ))}
              </TimeTableRow>

              {timeGrid.map((time) => {
                return (
                  <TimeTableRow>
                    <TimeTableCell key={time} value={time} header />
                    {stuffList.map((stuff) => {
                      const record = records.find(
                        (record) =>
                          record.doctor_id === stuff.id && moment(record.datetime).format('HH:mm') === time && moment(record.datetime).format('yyyy-MM-DD') === currentDate
                      );

                      return (
                        <TimeTableCell
                          placeholder='+'
                          value={record ? <CellCard text={record.service} /> : ''}
                          onCellClick={() => {
                            !record ? selectTime(time) & selectDoctor(stuff.fio) & setShowAddModal(true) : null;
                          }}
                        />
                      );
                    })}
                  </TimeTableRow>
                );
              })}
            </TimeTable>
          </Content>
        </Container>
      </Wrap>

      {showAddModal ? (
        <Modal
          title='Modal'
          onClose={() => {
            setShowAddModal(false);
          }}
        >
          <RecordForm
            selDate={currentDate}
            selTime={selectedTime}
            selDoctor={selectedDoctor}
            onSubmit={(datetime, doc, ser, client) => {
              axios
                .post('http://localhost/records', {
                  datetime,
                  doc,
                  ser,
                  client,
                })
                .then(function (response) {
                  const data = response.data;
                  if (data.message === 'ok') {
                    console.log(data);
                    setShowAddModal(false);
                    updateData();
                  } else {
                    console.log('ошибочка');
                    // setError({ message: 'запрос не выполнен' });
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            }}
          />
        </Modal>
      ) : null}
    </Page>
  );
}
