// src/components/NumberOfEvents.js

import React, { useState } from 'react';

const NumberOfEvents = ({ onNumberChange, defaultNumber = 32 }) => {
  const [numberOfEvents, setNumberOfEvents] = useState(defaultNumber);

  const handleInputChange = (event) => {
    const newNumber = event.target.value;
    setNumberOfEvents(newNumber);
    onNumberChange(newNumber);
  };

  return (
    <div className="NumberOfEvents">
      <label htmlFor="number-of-events">Number of Events:</label>
      <input
        type="number"
        id="number-of-events"
        className="number-of-events"
        value={numberOfEvents}
        onChange={handleInputChange}
        min="1"
      />
    </div>
  );
};

export default NumberOfEvents;
