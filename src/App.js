import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { DashboardPage } from './pages/DashboardPage';
import { AuthPage } from './pages/AuthPage';
import { ErrorPage } from './pages/ErrorPage';
import { StuffPage } from './pages/StuffPage';
import { ServicesPage } from './pages/ServicesPage';
import { ClientsPage } from './pages/ClientsPage';
import { RecordsPage } from './pages/RecordsPage';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <AuthPage />
        </Route>

        <Route exact path="/dashboard">
          <DashboardPage />
        </Route>

        <Route exact path="/stuff">
          <StuffPage />
        </Route>

        <Route exact path="/services">
          <ServicesPage />
        </Route>

        <Route exact path="/clients">
          <ClientsPage />
        </Route>

        <Route exact path="/records">
          <RecordsPage />
        </Route>

        <Route exact path="*">
          <ErrorPage error="404" message="Not found" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
