import React from 'react';

import './Navigation.css';

import { NavigationButton } from './NavigationButton';

export function Navigation() {
  return (
    <div className="navigation">
      <NavigationButton link="/dashboard" icon="dashboard" label="Главная" />
      <NavigationButton link="/stuff" icon="person" label="Персонал" />
      <NavigationButton link="/clients" icon="people" label="Клиенты" />
      <NavigationButton link="/services" icon="assignment" label="Услуги" />
      <NavigationButton link="/records" icon="schedule" label="Заявки" />
    </div>
  );
}
