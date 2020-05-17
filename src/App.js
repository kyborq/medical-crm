import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { DashboardPage } from "./pages/DashboardPage";
import { AuthPage } from "./pages/AuthPage";
import { ErrorPage } from "./pages/ErrorPage";
import { StuffPage } from "./pages/StuffPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ClientsPage } from "./pages/ClientsPage";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth">
          <AuthPage />
        </Route>

        <Route path="/dashboard">
          <DashboardPage />
        </Route>

        <Route path="/stuff">
          <StuffPage />
        </Route>

        <Route path="/services">
          <ServicesPage />
        </Route>

        <Route path="/clients">
          <ClientsPage />
        </Route>

        <Route>
          <ErrorPage error="404" message="Not found" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
