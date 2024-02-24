// src/components/Event.js

import { useState } from "react";
import moment from "moment";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(prevState => !prevState);
  };

  return (
    <li className="event">
      <h2>{event?.summary}</h2>
      <p>{event?.location}</p>
      <p>{event && moment(event.created).format('MMMM Do YYYY, h:mm:ss a')}</p>
      {showDetails && <p className="details">{event?.description}</p>}
      <button className="details-btn" onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
    </li>
  );
};

export default Event;
