import React, { useEffect } from 'react';
import axios from 'axios';

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
  { id: 0, fio: 'Иванов Иван Иванович', spec: 'Врач', dur: '20 минут' },
  { id: 1, fio: 'John Smith', spec: 'Педиатр', dur: '5 минут' },
];

export function StuffPage() {
  useEffect(() => {
    console.log('Stuff page loaded');
    axios
      .get('http://localhost/stuff')
      .then(function (response) {
        const data = response.data;
        if (data.message === 'ok') {
          console.log(data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return (
    <Page>
      <Sidebar />

      <Wrap>
        <Header title="Персонал" />

        <Container>
          <Content>
            <Table>
              <TableHeader values={['ФИО', 'Специализация', 'Время приема']} />
              {StuffData.map((stuff) => (
                <TableRow key={stuff.id} values={[stuff.fio, stuff.spec, stuff.dur]} />
              ))}
            </Table>
          </Content>

          <RightSidebar>
            <Panel title="Добавить">
              <StuffForm />
            </Panel>
          </RightSidebar>
        </Container>
      </Wrap>
    </Page>
  );
}
