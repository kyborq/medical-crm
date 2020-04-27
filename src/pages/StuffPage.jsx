import React from 'react';

import './StuffPage.css';

import { Sidebar } from '../components/sidebar/Sidebar';
import { Header } from '../components/Header';
import { Panel } from '../components/Panel';
import { Wrap } from '../components/containers/Wrap';
import { Container } from '../components/containers/Container';
import { Content } from '../components/containers/Content';
import { Page } from '../components/containers/Page';
import { RightSidebar } from '../components/containers/RightSidebar';

import { Table, TableRow, TableHeader } from '../components/Table';

import { StuffForm } from '../components/forms/StuffForm';

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

          <RightSidebar>
            <Panel title='Добавить'>
              <StuffForm />
            </Panel>
          </RightSidebar>
        </Container>
      </Wrap>
    </Page>
  );
}
