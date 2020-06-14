import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

import { Sidebar } from '../components/sidebar/Sidebar';
import { Header } from '../components/Header';
import { Panel } from '../components/Panel';
import { Wrap } from '../components/containers/Wrap';
import { Container } from '../components/containers/Container';
import { Content } from '../components/containers/Content';
import { Page } from '../components/containers/Page';
import { RightSidebar } from '../components/containers/RightSidebar';

import { Table, TableRow, TableHeader } from '../components/Table';

export function RecordsPage() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    updateData();
  }, []);

  const updateData = () => {
    axios
      .get('http://localhost/schedule')
      .then(function (response) {
        const data = response.data;
        if (data.message === 'ok') {
          console.log(data);
          setRecords(data.content);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Page>
      <Sidebar />

      <Wrap>
        <Header title='Заявки' />

        <Container>
          <Content>
            <TableHeader values={['ФИО клиента', 'ФИО врача', 'Услуга', 'Дата и время записи']} />
            {records.map((record) => (
              <TableRow key={record.record_id} values={[record.client, record.doctor, record.service, moment(record.datetime).format('LLL')]} />
            ))}
          </Content>
        </Container>
      </Wrap>
    </Page>
  );
}
