import React from 'react';

import './StuffPage.css';

import { Sidebar } from '../components/sidebar/Sidebar';
import { Header } from '../components/Header';
import { Panel } from '../components/Panel';

import { Table, TableRow, TableHeader } from '../components/Table';

import { StuffForm } from '../components/forms/StuffForm';

const StuffData = [
  ['Иванов Иван Иванович', 'Врач', '20 минут'],
  ['John Smith', 'Педиатр', '5 минут'],
];

export function StuffPage() {
  return (
    <div className="stuff-page">
      <Sidebar />

      <div className="wrap">
        <Header title="Персонал" />

        <div className="container">
          <div className="content">
            <Table>
              <TableHeader values={['ФИО', 'Специализация', 'Время приема']} />
              {StuffData.map((stuff) => (
                <TableRow key={stuff[0]} values={[stuff[0], stuff[1], stuff[2]]} />
              ))}
            </Table>
          </div>

          <Panel title="Добавить">
            <StuffForm />
          </Panel>
        </div>
      </div>
    </div>
  );
}
