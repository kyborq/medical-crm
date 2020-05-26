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

import { TimeTable, TimeTableRow } from '../components/TimeTable';

const schedule = {
  schedule: [
    {
      stuffId: 1,
      stuffName: 'Doctor Name',
      records: [
        // or empty (if no record for this doctor)
        {
          recordId: 1,
          date: '2019-12-12 08:00',
          serviceId: 2,
          serviceName: 'service name',
          serviceDuration: 60, // minutes
          clientId: 1,
          clientFio: 'Ivanov Ivan Ivanovich',
        },
      ],
    },
  ],
};

export function SchedulePage() {
  const generateTimeGrid = (start, end, interval) => {
    // ... TODO
  };

  return (
    <Page>
      <Sidebar />

      <Wrap>
        <Header title="Расписание" />

        <Container>
          <Content>
            <TimeTable>
              <TimeTableRow></TimeTableRow>
            </TimeTable>
          </Content>

          <RightSidebar></RightSidebar>
        </Container>
      </Wrap>
    </Page>
  );
}
