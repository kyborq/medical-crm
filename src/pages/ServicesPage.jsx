import React from "react";

import { Sidebar } from "../components/sidebar/Sidebar";
import { Header } from "../components/Header";
import { Panel } from "../components/Panel";
import { Wrap } from "../components/containers/Wrap";
import { Container } from "../components/containers/Container";
import { Content } from "../components/containers/Content";
import { Page } from "../components/containers/Page";
import { RightSidebar } from "../components/containers/RightSidebar";

import { Table, TableRow, TableHeader } from "../components/Table";

import { ServicesForm } from "../components/forms/ServicesForm";

const ServicesData = [
  {
    id: 0,
    service: "Удаление зуба",
    cost: "1300р",
    dur: "30 минут",
  },
  {
    id: 1,
    service: "Профилактический осмотр",
    cost: "500р",
    dur: "5 минут",
  },
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
                values={["Название услуги", "Цена", "Продолжительность (мин)"]}
              />
              {ServicesData.map((service) => (
                <TableRow
                  key={service.id}
                  values={[service.service, service.cost, service.dur]}
                />
              ))}
            </Table>
          </Content>

          <RightSidebar>
            <Panel title="Добавить услугу">
              <ServicesForm />
            </Panel>
          </RightSidebar>
        </Container>
      </Wrap>
    </Page>
  );
}
