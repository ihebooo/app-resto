import React from 'react';

const Table = ({ id, reserved, onClick }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <div className={`table ${reserved ? 'reserved' : ''}`} onClick={handleClick}>
      <span>{id}</span>
    </div>
  );
};

export default Table;
