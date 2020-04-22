import React from 'react';

import './Table.css';

export function TableHeader({ values }) {
  const valuesItems = values.map((value) => (
    <th className='table-cell' key={value}>
      {value}
    </th>
  ));

  return <tr className='table-header'>{valuesItems}</tr>;
}

export function TableRow({ values }) {
  const valuesItems = values.map((value) => (
    <td className='table-cell' key={value}>
      {value}
    </td>
  ));

  return <tr className='table-row'>{valuesItems}</tr>;
}

export function Table({ children }) {
  return (
    <table className='table'>
      <tbody>{children}</tbody>
    </table>
  );
}
