import React from 'react';

import './DashboardPage.css';

import { Sidebar } from '../components/sidebar/Sidebar';
import { Header } from '../components/Header';
import { Panel } from '../components/Panel';

export function DashboardPage() {
  return (
    <div className='dashboard-page'>
      <Sidebar />

      <div className='wrap'>
        <Header title='Главная' />

        <div className='container'>
          <div className='content'></div>

          <Panel title='Инструменты' />
        </div>
      </div>
    </div>
  );
}
