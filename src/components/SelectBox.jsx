import React from 'react';

import './SelectBox.css';

export function SelectBox({ items, itemSelected, value }) {
  const handleSelected = (value) => {
    return itemSelected(value);
  };

  return (
    <select
      className='select-box'
      value={value || ''}
      onChange={(e) => {
        handleSelected(e.target.value);
      }}
    >
      <SelectOption key='' value='' />
      {items.map((item) => (
        <SelectOption
          key={item.hasOwnProperty('id') ? item.id : item}
          value={item.hasOwnProperty('name') ? item.name : item}
        />
      ))}
    </select>
  );
}

export function SelectOption({ value }) {
  return <option value={value}>{value}</option>;
}
