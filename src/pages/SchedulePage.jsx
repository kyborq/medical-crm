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

const scheduleList = [
  {
    doctorid: 1,
    doctor: 'Иванов Иван Иванович',
    records: [
      {
        id: 1,
        doctorid: 1,
        time: '08:00',
        date: '2020-06-02',
        name: 'Удаление зуба',
      },
      {
        id: 2,
        doctorid: 1,
        time: '08:30',
        date: '2020-06-02',
        name: 'Лечение зуба',
      },
    ],
  },
  {
    doctorid: 2,
    doctor: 'Lorem I. S.',
    records: [
      {
        id: 3,
        doctorid: 2,
        time: '09:00',
        date: '2020-06-02',
        name: 'Вставка пломбы',
      },
    ],
  },
];

export function SchedulePage() {
  const [currentDate, setDate] = useState(moment().format('yyyy-MM-DD'));
  const [modalOpened, setModalOpened] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const [selectedTime, selectTime] = useState();
  const [selectedDoctor, selectDoctor] = useState();

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

  const showModal = () => {
    setModalOpened(true);
  };

  const timeGrid = generateTimeGrid('08:00', '21:00', 30);

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
                {/* TODO: при запросе из БД будут полные имена докторов и их нужно перевести в краткую форму вот тут */}
                {scheduleList.map((schedule) => (
                  <TimeTableCell key={schedule.doctorid} value={schedule.doctor} />
                ))}
              </TimeTableRow>

              {timeGrid.map((time) => {
                return (
                  <TimeTableRow>
                    <TimeTableCell key={time} value={time} header />
                    {scheduleList.map((schedule) => {
                      const record = schedule.records.find(
                        (record) => record.time === time && record.date === currentDate
                      );
                      return (
                        <TimeTableCell
                          placeholder='+'
                          value={record ? <CellCard text={record.name} /> : ''}
                          onCellClick={() => {
                            !record ? selectTime(time) & selectDoctor(schedule.doctor) & setShowAddModal(true) : null;
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
          isOpen={modalOpened}
          onClose={() => {
            setShowAddModal(false);
          }}
        >
          <RecordForm selDate={currentDate} selTime={selectedTime} selDoctor={selectedDoctor} />
        </Modal>
      ) : null}
    </Page>
  );
}
