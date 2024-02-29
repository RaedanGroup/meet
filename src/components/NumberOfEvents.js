// src/components/NumberOfEvents.js
import React, { useState } from 'react';

const NumberOfEvents = ({ onNumberChange, defaultNumber = 32, setErrorAlert }) => {
  const [numberOfEvents, setNumberOfEvents] = useState(defaultNumber);

  const handleInputChange = (event) => {
    const newNumber = event.target.value;

    if (newNumber < 0) {
      setErrorAlert("Only positive numbers.");
      return;
    } else if (newNumber > 100) {
      setErrorAlert("Max 100 entries.");
      return;
    } else if (!newNumber.match(/^\d+$/)) {
      setErrorAlert("Numbers only.");
      return;
    } else {
      // If validation passes, clear any error messages and proceed
      setErrorAlert("");
      setNumberOfEvents(newNumber);
      onNumberChange(newNumber);
    }
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
        // min="1"
      />
    </div>
  );
};

export default NumberOfEvents;
