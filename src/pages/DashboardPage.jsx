import React from 'react';

import { Sidebar } from '../components/Sidebar';
import { Container } from '../components/Container';
import { Header } from '../components/Header';

import './DashboardPage.css';

export function DashboardPage() {
  return (
    <div className='dashboard-page'>
      <Sidebar />

      <Container>
        <Header />
      </Container>
    </div>
  );
}
