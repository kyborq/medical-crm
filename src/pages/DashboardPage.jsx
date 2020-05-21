import React, { useEffect } from 'react';

import { Sidebar } from '../components/sidebar/Sidebar';
import { Header } from '../components/Header';
import { Panel } from '../components/Panel';
import { Wrap } from '../components/containers/Wrap';
import { Container } from '../components/containers/Container';
import { Content } from '../components/containers/Content';
import { Page } from '../components/containers/Page';
import { RightSidebar } from '../components/containers/RightSidebar';

export function DashboardPage() {
  useEffect(() => {
    if (!sessionStorage.getItem('login')) {
      location.href = '/';
    }
  });

  return (
    <Page>
      <Sidebar />

      <Wrap>
        <Header title="Главная" />

        <Container>
          <Content></Content>

          <RightSidebar>
            <Panel title="Инструменты" />
          </RightSidebar>
        </Container>
      </Wrap>
    </Page>
  );
}
