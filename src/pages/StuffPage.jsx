import React from 'react';

import './StuffPage.css';

import { Sidebar } from '../components/Sidebar';
import { Wrap } from '../components/Wrap';
import { Header } from '../components/Header';
import { Content } from '../components/Content';
import { ToolsBar } from '../components/ToolsBar';

export function StuffPage() {
  return (
    <div className='stuff-page'>
      <Sidebar />

      <Wrap>
        <Header title='Управление персоналом' />

        <Content></Content>

        <ToolsBar title='Добавить сотрудника'>
          <input type='text' className='form-field' placeholder='ФИО' />
          <input type='text' className='form-field' placeholder='Возраст' />
        </ToolsBar>
      </Wrap>
    </div>
  );
}
