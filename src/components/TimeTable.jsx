import React from 'react';
import classnames from 'classnames';

import './Table.css';

export function TimeTableRow({ children, header }) {
  return <div className={classnames('flex-table-row', header ? 'row-header' : '')}>{children}</div>;
}

export function TimeTableCell({ value, children }) {
  return <div className="flex-table-cell">{value || children}</div>;
}

export function TimeTable({ children }) {
  return <div className="flex-table">{children}</div>;
}
