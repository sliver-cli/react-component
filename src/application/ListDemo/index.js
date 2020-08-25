import React from 'react';
import './index.scss';
import CustomList from '../../components/CustomList';

const ListItem = (props) => {
  const { name, value } = props;
  return (
    <div>
      <span>{name}</span>
      --------------------
      <span>{value}</span>
    </div>
  );
};

const data = [
  { name: '1424', value: 'john' },
  { name: '2424', value: 'king' }
];

const ListDemo = () => {
  const handleSelect = (item) => {
    console.log(item);
  };
  return (
    <div>
      <CustomList data={data} template={ListItem} onSelect={handleSelect} />
    </div>
  );
};

export default ListDemo;
