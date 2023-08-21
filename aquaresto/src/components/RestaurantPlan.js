import React, { useState } from 'react';
import Table from './Table';

const RestaurantPlan = () => {
  const [tables, setTables] = useState([
    { id: 1, reserved: false },
    { id: 2, reserved: false },
    { id: 3, reserved: false },
    // add more tables here
  ]);

  const handleTableClick = (tableId) => {
    // update the table with the given ID to be reserved
    setTables((prevTables) => {
      return prevTables.map((table) => {
        if (table.id === tableId) {
          return { ...table, reserved: true };
        }
        return table;
      });
    });
  };

  return (
    <div>
      <h1>Restaurant Plan</h1>
      <div className="tables-container">
        {tables.map((table) => (
          <Table
            key={table.id}
            id={table.id}
            reserved={table.reserved}
            onClick={handleTableClick}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantPlan;
