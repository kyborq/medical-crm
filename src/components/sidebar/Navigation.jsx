import React from 'react';

import './Navigation.css';

import { NavigationButton } from './NavigationButton';
import { SidebarButton } from './SidebarButton';

export function Navigation() {
  const isLogin = () => {
    if (sessionStorage.getItem('login')) {
      return (
        <SidebarButton
          label="Выход"
          icon="exit_to_app"
          theme="red"
          handleClick={() => {
            sessionStorage.removeItem('login');
            location.href = '/';
          }}
        />
      );
    }
  };
  return (
    <div className="navigation">
      <NavigationButton link="/dashboard" icon="dashboard" label="Главная" />
      <NavigationButton link="/stuff" icon="person" label="Персонал" />
      <NavigationButton link="/clients" icon="people" label="Клиенты" />
      <NavigationButton link="/services" icon="assignment" label="Услуги" />

      {isLogin()}
    </div>
  );
}
