import './App.css';
import logo from './meetApp-logo.jpg';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';

function App() {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");

  useEffect(() => {
    fetchData();
  }, [currentCity, currentNOE]); // Add currentNOE as a dependency

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE)); // Use currentNOE to slice the events
    setAllLocations(extractLocations(allEvents));
  };

  // Function to handle change in the number of events
  const handleNumberChange = (number) => {
    setCurrentNOE(number);
  };

  return (
    <div className="App">
      <img src={logo} alt="MeetApp Logo" style={{ height: '250px' }} />
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
      <NumberOfEvents defaultNumber={currentNOE} onNumberChange={handleNumberChange} />
      <EventList events={events} />
    </div>
  );
}

export default App;