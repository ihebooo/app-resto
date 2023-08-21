import React, { useState } from 'react';

const ReservationForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [partySize, setPartySize] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const reservation = {
      name: name,
      date: date,
      time: time,
      partySize: partySize
    };
    // send reservation to server to save
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Date:
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        Time:
        <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />
      </label>
      <label>
        Party Size:
        <input type="text" value={partySize} onChange={(e) => setPartySize(e.target.value)} />
      </label>
      <button type="submit">Make Reservation</button>
    </form>
  );
};

export default ReservationForm;
