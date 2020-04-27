import React from 'react';

import './ServicesPage.css';

import { Sidebar } from '../components/sidebar/Sidebar';
import { Header } from '../components/Header';
import { Panel } from '../components/Panel';
import { Wrap } from '../components/containers/Wrap';
import { Container } from '../components/containers/Container';
import { Content } from '../components/containers/Content';
import { Page } from '../components/containers/Page';
import { RightSidebar } from '../components/containers/RightSidebar';

import { Table, TableRow, TableHeader } from '../components/Table';

const ServicesData = [
  ['Удаление зуба', '1300р', '30 минут'],
  ['Профилактический осмотр', '500р', '5 минут'],
];

export function ServicesPage() {
  return (
    <Page>
      <Sidebar />

      <Wrap>
        <Header title="Услуги" />

        <Container>
          <Content>
            <Table>
              <TableHeader
                values={['Название услуги', 'Цена', 'Продолжительность (мин)']}
              />
              {ServicesData.map((service) => (
                <TableRow
                  key={service[0]}
                  values={[service[0], service[1], service[2]]}
                />
              ))}
            </Table>
          </Content>
          
          <RightSidebar>
            <Panel title="Добавить услугу"></Panel>
          </RightSidebar>
        </Container>
      </Wrap>
    </Page>
  );
}
