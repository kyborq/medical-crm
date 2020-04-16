import React from 'react';

import { Sidebar } from '../components/Sidebar';
import { Wrap } from '../components/Wrap';
import { Header } from '../components/Header';
import { Content } from '../components/Content';
import { ToolsBar } from '../components/ToolsBar';

import './DashboardPage.css';

export function DashboardPage() {
  return (
    <div className='dashboard-page'>
      <Sidebar />

      <Wrap>
        <Header title='Главная' />

        <Content></Content>

        <ToolsBar title='Управление'></ToolsBar>
      </Wrap>
    </div>
  );
}
