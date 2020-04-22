import React from 'react';

import './DashboardPage.css';

import { Sidebar } from '../components/sidebar/Sidebar';
import { Header } from '../components/Header';
import { Content } from '../components/Content';

export function DashboardPage() {
  return (
    <div className='dashboard-page'>
      <Sidebar />

      <div className='main-wrap'>
        <Header title='Главная' />

        <Content></Content>
      </div>
    </div>
  );
}
