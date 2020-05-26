import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Sidebar } from '../components/sidebar/Sidebar';
import { Header } from '../components/Header';
import { Panel } from '../components/Panel';
import { Wrap } from '../components/containers/Wrap';
import { Container } from '../components/containers/Container';
import { Content } from '../components/containers/Content';
import { Page } from '../components/containers/Page';
import { RightSidebar } from '../components/containers/RightSidebar';

export function SchedulePage() {
  return (
    <Page>
      <Sidebar />

      <Wrap>
        <Header title="Расписание" />

        <Container>
          <Content></Content>

          <RightSidebar></RightSidebar>
        </Container>
      </Wrap>
    </Page>
  );
}
