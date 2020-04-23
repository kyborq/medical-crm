import React from 'react';

import './Table.css';

export function TableHeader({ values }) {
  const valueItems = values.map((value) => (
    <div key={value} className='flex-table-cell'>
      {value}
    </div>
  ));

  return <div className='flex-table-header'>{valueItems}</div>;
}

export function TableRow({ values }) {
  const valueItems = values.map((value) => (
    <div key={value} className='flex-table-cell'>
      {value}
    </div>
  ));

  return <div className='flex-table-row'>{valueItems}</div>;
}

export function Table({ children }) {
  return <div className='flex-table'>{children}</div>;
}
