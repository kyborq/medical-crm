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

import { ClientsForm } from "../components/forms/ClientsForm";

const StuffData = [
  {
    id: 0,
    fio: "Иванов Иван Иванович",
    reg: "123",
    bday: "20 ноября 1987",
    phone: "8(800)555-35-35",
  },
  {
    id: 1,
    fio: "John Smith",
    reg: "123",
    bday: "20 ноября 1987",
    phone: "8(800)555-35-35",
  },
  {
    id: 2,
    fio: "Иванов Иван Иванович",
    reg: "123",
    bday: "20 ноября 1987",
    phone: "8(800)555-35-35",
  },
];

export function ClientsPage() {
  return (
    <Page>
      <Sidebar />

      <Wrap>
        <Header title="Клиенты" />

        <Container>
          <Content>
            <Table>
              <TableHeader
                values={[
                  "ФИО",
                  "Данные о прописке",
                  "Дата рождения",
                  "Номер телефона",
                ]}
              />
              {StuffData.map((stuff) => (
                <TableRow
                  key={stuff.id}
                  values={[stuff.fio, stuff.reg, stuff.bday, stuff.phone]}
                />
              ))}
            </Table>
          </Content>

          <RightSidebar>
            <Panel title="Добавить">
              <ClientsForm />
            </Panel>
          </RightSidebar>
        </Container>
      </Wrap>
    </Page>
  );
}
