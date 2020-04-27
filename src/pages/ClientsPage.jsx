import React from 'react';

import './StuffPage.css';

import { Sidebar } from '../components/sidebar/Sidebar';
import { Header } from '../components/Header';
import { Panel } from '../components/Panel';
import { Wrap } from '../components/Wrap';
import { Container } from '../components/Container';
import { Content } from '../components/Content';
import { Page } from '../components/Page';

import { Table, TableRow, TableHeader } from '../components/Table';

import { ClientsForm } from '../components/ClientsForm';

const StuffData = [
  ['Иванов Иван Иванович', '123', '20 ноября 1987', '8(800)555-35-35'],
  ['John Smith', '123', '20 ноября 1987', '8(800)555-35-35'],
  ['Иванов Иван Иванович', '123', '20 ноября 1987', '8(800)555-35-35'],
];

export function ClientsPage() {
  return (
    <Page>
      <Sidebar />

      <Wrap>
        <Header title='Клиенты' />

        <Container>
          <Content>
            <Table>
              <TableHeader values={['ФИО', 'Данные о прописке', 'Дата рождения', 'Номер телефона']} />
              {StuffData.map((stuff) => (
                <TableRow key={stuff[0]} values={[stuff[0], stuff[1], stuff[2], stuff[3]]} />
              ))}
            </Table>
          </Content>

          <Panel title='Добавить'>
            <ClientsForm />
          </Panel>
        </Container>
      </Wrap>
    </Page>
  );
}
