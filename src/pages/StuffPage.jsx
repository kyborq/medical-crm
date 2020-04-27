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

import { StuffForm } from '../components/StuffForm';

const StuffData = [
  ['Иванов Иван Иванович', 'Врач', '20 минут'],
  ['John Smith', 'Педиатр', '5 минут'],
];

export function StuffPage() {
  return (
    <Page>
      <Sidebar />

      <Wrap>
        <Header title='Персонал' />

        <Container>
          <Content>
            <Table>
              <TableHeader values={['ФИО', 'Специализация', 'Время приема']} />
              {StuffData.map((stuff) => (
                <TableRow key={stuff[0]} values={[stuff[0], stuff[1], stuff[2]]} />
              ))}
            </Table>
          </Content>

          <Panel title='Добавить'>
            <StuffForm />
          </Panel>
        </Container>
      </Wrap>
    </Page>
  );
}
