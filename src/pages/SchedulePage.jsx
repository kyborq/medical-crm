import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Sidebar } from '../components/sidebar/Sidebar';
import { Header } from '../components/Header';
import { Panel } from '../components/Panel';
import { Wrap } from '../components/containers/Wrap';
import { Container } from '../components/containers/Container';
import { Content } from '../components/containers/Content';
import { Page } from '../components/containers/Page';
import { RightSidebar } from '../components/containers/RightSidebar';

import { TimeTable, TimeTableRow, TimeTableCell } from '../components/TimeTable';

const scheduleList = [
  {
    doctorid: 1,
    doctor: 'Иванов И. И.',
    records: [
      {
        id: 1,
        doctorid: 1,
        time: '8:0',
        name: 'Удаление зуба',
      },
      {
        id: 2,
        doctorid: 1,
        time: '8:30',
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
        time: '9:0',
        name: 'Вставка пломбы',
      },
    ],
  },
];

export function SchedulePage() {
  const generateTimeGrid = (start, end, interval) => {
    let timeStart = new Date(`2020 ${start}`);
    let timeEnd = new Date(`2020 ${end}`);

    let timeArray = [];

    timeArray.push(`${timeStart.getHours()}:${timeStart.getMinutes()}`);

    while (timeStart.getHours() !== timeEnd.getHours()) {
      timeStart.setMinutes(timeStart.getMinutes() + interval);
      timeArray.push(`${timeStart.getHours()}:${timeStart.getMinutes()}`);
    }

    return timeArray;
  };

  const timeGrid = generateTimeGrid('08:00', '21:00', 30);
  return (
    <Page>
      <Sidebar />

      <Wrap>
        <Header title="Расписание" />

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
                      const record = schedule.records.find((record) => record.time === time);
                      return <TimeTableCell value={record ? record.name : ''} />;
                    })}
                  </TimeTableRow>
                );
              })}
            </TimeTable>
          </Content>

          <RightSidebar></RightSidebar>
        </Container>
      </Wrap>
    </Page>
  );
}
