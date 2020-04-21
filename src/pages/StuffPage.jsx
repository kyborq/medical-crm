import React from 'react';

import './StuffPage.css';

import { Sidebar } from '../components/sidebar/Sidebar';
import { Header } from '../components/Header';
import { Content } from '../components/Content';
import { ToolsBar } from '../components/ToolsBar';
import { Table, TableRow, TableHeader } from '../components/Table';

export function StuffPage() {
  return (
    <div className='stuff-page'>
      <Sidebar />

      <div className='main-wrap'>
        <Header title='Персонал' />

        <Content>
          <p>Список персонала организации:</p>
          {/* <table>
            <th>
              <td>ФИО</td>
              <td>Специализация</td>
              <td>Время приёма</td>
            </th>
          </table> */}
          <Table>
            <TableHeader values={['ФИО', 'Специализация', 'Время приёма']} />
            <TableRow values={['banana', 'apple', 'grape']} />
            <TableRow values={['banana', 'apple', 'grape']} />
            <TableRow values={['banana', 'apple', 'grape']} />
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
