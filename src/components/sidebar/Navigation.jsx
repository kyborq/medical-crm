import React from 'react';

import './Navigation.css';

import { NavigationButton } from './NavigationButton';

export function Navigation() {
  return (
    <div className='sidebar-navigation'>
      <NavigationButton icon='dashboard' label='Главная' link='/dashboard' />
      <NavigationButton icon='people' label='Персонал' link='/stuff' />
    </div>
  );
}
