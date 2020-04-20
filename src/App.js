import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthPage } from './pages/AuthPage';
import { StuffPage } from './pages/StuffPage';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/stuff' component={StuffPage} />
        <Route path='/' component={AuthPage} />
      </Switch>
    </BrowserRouter>
  );
}
