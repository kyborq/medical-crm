import React, { useState, useEffect } from "react";
import axios from "axios";

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

export function ServicesPage() {
  const [servicesList, setServicesList] = useState([]);

  const updateList = () => {
    console.log("up");

    axios
      .get("https://medical-crm-server.herokuapp.com/services")
      .then(function (response) {
        const data = response.data;
        if (data.message === "ok") {
          console.log(data);
          setServicesList(data.content);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!sessionStorage.getItem("login")) {
      window.location.href = "/";
    } else {
      updateList();
    }
  }, []);

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
              {servicesList.map((service) => (
                <TableRow
                  key={service.id}
                  values={[service.name, service.cost, service.duration]}
                />
              ))}
            </Table>
          </Content>

          <RightSidebar>
            <Panel title="Добавить услугу">
              <ServicesForm onSubmitAdd={updateList} />
            </Panel>
          </RightSidebar>
        </Container>
      </Wrap>
    </Page>
  );
}
