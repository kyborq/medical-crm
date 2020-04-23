import React from 'react';

import './ServicesPage.css';

import { Sidebar } from '../components/sidebar/Sidebar';
import { Header } from '../components/Header';
import { Panel } from '../components/Panel';

import { Table, TableRow, TableHeader } from '../components/Table';

const ServicesData = [
  ['Удаление зуба', '1300р', '30 минут'],
  ['Профилактический осмотр', '500р', '5 минут'],
];

export function ServicesPage() {
  return (
    <div className="services-page">
      <Sidebar />

      <div className="wrap">
        <Header title="Услуги" />

        <div className="container">
          <div className="content">
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
          </div>

          <Panel title="Добавить услугу"></Panel>
        </div>
      </div>
    </div>
  );
}
