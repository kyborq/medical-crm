import React from 'react';

import './StuffPage.css';

import { Sidebar } from '../components/sidebar/Sidebar';
import { Header } from '../components/Header';
import { Content } from '../components/Content';
import { ToolsBar } from '../components/ToolsBar';
import { Table, TableRow, TableHeader } from '../components/Table';

const StuffData = [
  ['Иванов Иван Иванович', 'Врач', '20 минут'],
  ['John Smith', 'Педиатр', '5 минут'],
];

export function StuffPage() {
  return (
    <div className='stuff-page'>
      <Sidebar />

      <div className='main-wrap'>
        <Header title='Персонал' />

        <Content>
          <p>Список персонала организации:</p>
          <Table>
            <TableHeader values={['ФИО', 'Специализация', 'Время приёма']} />
            {StuffData.map((stuff) => (
              <TableRow values={[stuff[0], stuff[1], stuff[2]]} />
            ))}
          </Table>
        </Content>

        <ToolsBar title='Новый'>
          <input type='text' className='form-field' placeholder='ФИО' />
          <input type='text' className='form-field' placeholder='Специализация' />
          <input type='text' className='form-field' placeholder='Время приёма' />
          <button className='form-button'>Добавить</button>
        </ToolsBar>
      </div>
    </div>
  );
}
