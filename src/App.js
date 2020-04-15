import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthPage } from './pages/AuthPage';
import { DashboardPage } from './pages/DashboardPage';

import './styles/App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/' component={AuthPage} />
      </Switch>
    </BrowserRouter>
  );
}
