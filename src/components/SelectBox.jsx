import React from 'react';

import './SelectBox.css';

export function SelectBox({ items, itemSelected }) {
  const handleSelected = (value) => {
    return itemSelected(value);
  };

  return (
    <select
      className="select-box"
      onChange={(e) => {
        handleSelected(e.target.value);
      }}
    >
      {items.map((item) => (
        <SelectOption key={item.id} value={item.name} />
      ))}
    </select>
  );
}

export function SelectOption({ value }) {
  return <option value={value}>{value}</option>;
}
