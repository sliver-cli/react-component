import React from 'react';
import './index.scss';

const CustomList = (props) => {
  const { data, template, onSelect } = props;
  const Template = template;
  const handleClick = (item) => {
    onSelect(item.target);
  };
  return (
    <div onClick={handleClick}>
      {data.length === 0 && <div>无数据</div>}
      {data.map((item) => (
        <Template {...item} />
      ))}
    </div>
  );
};

export default CustomList;
