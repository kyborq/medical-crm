import React from 'react';

import './Navigation.css';

import { NavigationButton } from './NavigationButton';

export function Navigation() {
  return (
    <div className="sidebar-navigation">
      <NavigationButton icon="dashboard" label="Главная" />
      <NavigationButton icon="people" label="Персонал" />
    </div>
  );
}
