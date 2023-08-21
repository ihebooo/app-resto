import React, { useState } from "react";

const RestaurantPlan = () => {
  const [selectedTable, setSelectedTable] = useState(null);
  const [reservationName, setReservationName] = useState("");

  const handleTableClick = (tableId) => {
    setSelectedTable(tableId);
  };

  const handleReservationSubmit = (event) => {
    event.preventDefault();
    // Here you can write your code to submit the reservation
    console.log("Table:", selectedTable);
    console.log("Name:", reservationName);
  };

  const tableStyles = {
    width: "80px",
    height: "80px",
    margin: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderRadius: "10px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)"
  };

  const reservedStyles = {
    ...tableStyles,
    backgroundColor: "red",
    color: "white",
    fontWeight: "bold",
    cursor: "default"
  };

  const availableStyles = {
    ...tableStyles,
    backgroundColor: "green",
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div>
      <h1>Restaurant Plan</h1>
      <p>Click on a table to reserve it:</p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div
          onClick={() => handleTableClick(1)}
          style={selectedTable === 1 ? reservedStyles : availableStyles}
        >
          Table 1
        </div>
        <div
          onClick={() => handleTableClick(2)}
          style={selectedTable === 2 ? reservedStyles : availableStyles}
        >
          Table 2
        </div>
        <div
          onClick={() => handleTableClick(3)}
          style={selectedTable === 3 ? reservedStyles : availableStyles}
        >
          Table 3
        </div>
      </div>
      {selectedTable && (
        <form onSubmit={handleReservationSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={reservationName}
              onChange={(e) => setReservationName(e.target.value)}
            />
          </label>
          <button type="submit">Reserve Table {selectedTable}</button>
        </form>
      )}
    </div>
  );
};

export default RestaurantPlan;
