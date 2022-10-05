import React from 'react';

const MyBigList = ({ listItems, handleClick }) => {
  console.log('MyBigList ; recreated');
  return (
    <ul>
      {listItems?.map((item) => {
        return <li onClick={handleClick}>{item.title}</li>;
      })}
    </ul>
  );
};

export default React.memo(MyBigList);
