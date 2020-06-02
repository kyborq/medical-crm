import React from 'react';

import './Table.css';

export function TimeTableHeader({ values }) {
  const valueItems = values.map((value) => (
    <div key={value} className="flex-table-cell">
      {value}
    </div>
  ));

  return <div className="flex-table-header">{valueItems}</div>;
}

export function TimeTableRow({ children }) {
  return <div className="flex-table-row">{children}</div>;
}

export function TimeTableCell({ value, children }) {
  return <div className="flex-table-cell">{value || children}</div>;
}

export function TimeTable({ children }) {
  return <div className="flex-table">{children}</div>;
}
