import React from 'react';

import './StuffPage.css';

import { LeftSidebar } from '../components/sidebar/LeftSidebar';
import { Header } from '../components/Header';
import { Panel } from '../components/Panel';
import { Wrap } from '../components/Wrap';
import { Container } from '../components/Container';
import { Content } from '../components/Content';
import { Page } from '../components/Page';
import { RightSidebar } from '../components/RightSidebar';

import { Table, TableRow, TableHeader } from '../components/Table';

import { StuffForm } from '../components/forms/StuffForm';

const StuffData = [
  ['Иванов Иван Иванович', 'Врач', '20 минут'],
  ['John Smith', 'Педиатр', '5 минут'],
];

export function StuffPage() {
  return (
    <Page>
      <LeftSidebar />

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
