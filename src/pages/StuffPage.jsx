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

import { Table, TableRow, TableHeader } from '../components/Table';

import { StuffForm } from '../components/forms/StuffForm';

export function StuffPage() {
  const [stuffList, setStuffList] = useState([]);

  const updateList = () => {
    axios
      .get('http://localhost/stuff')
      .then(function (response) {
        const data = response.data;
        if (data.message === 'ok') {
          // ... TODO
          console.log(data);

          setStuffList(data.content);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!sessionStorage.getItem('login')) {
      location.href = '/';
    } else {
      updateList();
    }
  }, []);

  return (
    <Page>
      <Sidebar />

      <Wrap>
        <Header title="Персонал" />

        <Container>
          <Content>
            <Table>
              <TableHeader values={['ФИО', 'Специализация', 'Время приема']} />
              {stuffList.map((stuff) => (
                <TableRow key={stuff.id} values={[stuff.fio, stuff.spec, stuff.time]} />
              ))}
            </Table>
          </Content>

          <RightSidebar>
            <Panel title="Добавить">
              <StuffForm onSubmitAdd={updateList} />
            </Panel>
          </RightSidebar>
        </Container>
      </Wrap>
    </Page>
  );
}
