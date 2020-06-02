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

import { ClientsForm } from '../components/forms/ClientsForm';

export function ClientsPage() {
  const [stuffList, setStuffList] = useState([]);

  const updateList = () => {
    axios
      .get('http://localhost/clients')
      .then(function (response) {
        const data = response.data;
        if (data.message === 'ok') {
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
        <Header title="Клиенты" />

        <Container>
          <Content>
            <Table>
              <TableHeader values={['ФИО', 'Данные о прописке', 'Дата рождения', 'Номер телефона']} />
              {stuffList.map((stuff) => (
                <TableRow key={stuff.id} values={[stuff.fio, stuff.registration, stuff.bday, stuff.phone]} />
              ))}
            </Table>
          </Content>

          <RightSidebar>
            <Panel title="Добавить">
              <ClientsForm onSubmitAdd={updateList} />
            </Panel>
          </RightSidebar>
        </Container>
      </Wrap>
    </Page>
  );
}
