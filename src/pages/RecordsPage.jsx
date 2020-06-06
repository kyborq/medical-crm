import React from 'react';

import { Sidebar } from '../components/sidebar/Sidebar';
import { Header } from '../components/Header';
import { Panel } from '../components/Panel';
import { Wrap } from '../components/containers/Wrap';
import { Container } from '../components/containers/Container';
import { Content } from '../components/containers/Content';
import { Page } from '../components/containers/Page';
import { RightSidebar } from '../components/containers/RightSidebar';

import { Table, TableRow, TableHeader } from '../components/Table';

const recordsList = [
  {
    id: 0,
    clientFio: 'Артёмов Артём Артёмович',
    doctorFio: 'Иванов Иван Иванович',
    serviceName: 'Удаление зуба',
    date: '21.05.2020',
  },
];

export function RecordsPage() {
  return (
    <Page>
      <Sidebar />

      <Wrap>
        <Header title="Заявки" />

        <Container>
          <Content>
            <TableHeader values={['ФИО клиента', 'ФИО врача', 'Услуга', 'Дата и время записи']} />
            {recordsList.map((record) => (
              <TableRow key={record.id} values={[record.clientFio, record.doctorFio, record.serviceName, record.date]} />
            ))}
          </Content>
        </Container>
      </Wrap>
    </Page>
  );
}
