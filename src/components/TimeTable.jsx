import React from 'react';

import './Table.css';

export function TimeTableHeader() {
  const valueItems = values.map((value) => (
    <div key={value} className="flex-table-cell">
      {value}
    </div>
  ));

  return <div className="flex-table-header">{valueItems}</div>;
}

export function TimeTableRow({ values }) {
  const valueItems = values.map((value) => (
    <div key={value} className="flex-table-cell">
      {value}
    </div>
  ));

  return <div className="flex-table-row">{valueItems}</div>;
}

export function TimeTable() {
  return <div className="flex-table"></div>;
}
