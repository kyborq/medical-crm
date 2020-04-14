import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AuthPage } from './pages/AuthPage';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={AuthPage} />
      </Switch>
    </BrowserRouter>
  );
}
