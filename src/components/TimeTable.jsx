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

export function TimeTableRow({ values }) {
  const valueItems = values.map((value) => (
    <div key={value} className="flex-table-cell">
      {value}
    </div>
  ));

  return <div className="flex-table-row">{valueItems}</div>;
}

export function TimeTable({ header, content }) {
  return (
    <div className="flex-table">
      <TableHeader key={item.id} values={header} />

      {content.map((item) => (
        <TableRow key={item.id} values={[item.fio, stuff.reg, stuff.bday, stuff.phone]} />
      ))}
    </div>
  );
}
