import React from 'react';

import './Navigation.css';

import { NavigationButton } from './NavigationButton';
import { SidebarButton } from './SidebarButton';

export function Navigation() {
  return (
    <div className="navigation">
      <NavigationButton link="/dashboard" icon="dashboard" label="Главная" />
      <NavigationButton link="/stuff" icon="person" label="Персонал" />
      <NavigationButton link="/clients" icon="people" label="Клиенты" />
      <NavigationButton link="/services" icon="assignment" label="Услуги" />
      <NavigationButton link="/records" icon="schedule" label="Заявки" />
      <NavigationButton link="/schedule" icon="schedule" label="Расписание" />

      {sessionStorage.getItem('login') && (
        <SidebarButton
          label="Выход"
          icon="exit_to_app"
          theme="red"
          handleClick={() => {
            sessionStorage.removeItem('login');
            location.href = '/';
          }}
        />
      )}
    </div>
  );
}
