import React from 'react';

import './StuffPage.css';

import { Sidebar } from '../components/sidebar/Sidebar';
import { Header } from '../components/Header';
import { Content } from '../components/Content';
import { ToolsBar } from '../components/ToolsBar';

import { Card } from '../components/Card';

export function StuffPage() {
  return (
    <div className="stuff-page">
      <Sidebar />

      <div className="main-wrap">
        <Header title="Персонал" />

        <Content>
          <Card title="John Smith" />
          <Card title="John Smith" />
          <Card title="John Smith" />
          <Card title="John Smith" />
        </Content>

        <ToolsBar title="Новый"></ToolsBar>
      </div>
    </div>
  );
}
