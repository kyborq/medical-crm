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

const scheduleList = [
  {
    doctorid: 1,
    doctor: 'Иванов И. И.',
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
        <Header title={'Расписание на ' + moment(currentDate).format('LL')} />

        <Container>
          <Content>
            <TimeTable>
              <TimeTableRow header>
                <TimeTableCell value="Время" />
                {scheduleList.map((schedule) => (
                  <TimeTableCell value={schedule.doctor} />
                ))}
              </TimeTableRow>

              {timeGrid.map((time) => {
                return (
                  <TimeTableRow>
                    <TimeTableCell value={time} />
                    {scheduleList.map((schedule) => {
                      const record = schedule.records.find((record) => record.time === time && record.date === currentDate);
                      return <TimeTableCell value={record ? <CellCard text={record.name} onClick={showModal} /> : ''} />;
                    })}
                  </TimeTableRow>
                );
              })}
            </TimeTable>
          </Content>

          <RightSidebar>
            <Panel title="Выбрать дату">
              <input
                type="date"
                className="form-field"
                value={currentDate}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
              <button
                className="form-button"
                onClick={() => {
                  setDate(moment().format('yyyy-MM-DD'));
                }}
              >
                Сбросить
              </button>
            </Panel>
          </RightSidebar>
        </Container>
      </Wrap>

      <Modal
        title="Modal"
        isOpen={modalOpened}
        onClose={() => {
          setModalOpened(false);
        }}
      >
        Hello!
      </Modal>
    </Page>
  );
}
