import React from 'react';

import './StuffPage.css';

import { Sidebar } from '../components/sidebar/Sidebar';
import { Header } from '../components/Header';
import { Panel } from '../components/Panel';

import { Table, TableRow, TableHeader } from '../components/Table';

import { ClientsForm } from '../components/forms/ClientsForm';

const StuffData = [
  ['Иванов Иван Иванович', '123', '20 ноября 1987', '8(800)555-35-35'],
  ['John Smith', '123', '20 ноября 1987', '8(800)555-35-35'],
  ['Иванов Иван Иванович', '123', '20 ноября 1987', '8(800)555-35-35'],
];

export function ClientsPage() {
  return (
    <div className='stuff-page'>
      <Sidebar />

      <div className='wrap'>
        <Header title='Клиенты' />

        <div className='container'>
          <div className='content'>
            <Table>
              <TableHeader
                values={['ФИО', 'Данные о прописке', 'Дата рождения', 'Номер телефона']}
              />
              {StuffData.map((stuff) => (
                <TableRow values={[stuff[0], stuff[1], stuff[2], stuff[3]]} />
              ))}
            </Table>
          </div>

          <Panel title='Добавить'>
            <ClientsForm />
          </Panel>
        </div>
      </div>
    </div>
  );
}
