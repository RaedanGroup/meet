// ./App.js

import './App.css';
import logo from './meetApp-logo512.png';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import CityEventsChart from './components/CityEventsChart';
import EventGenresChart from './components/EventGenresChart';
import InstallButton from './components/InstallButton';
import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';

function App() {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");
  const [isInstallable, setIsInstallable] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(true);

  // Add event listener to listen for beforeinstallprompt event
  useEffect(() => {
    const handleAppInstallable = (event) => {
      // Set the value of `isInstallable` and `deferredPrompt` based on the event detail
      setIsInstallable(event.detail.isInstallable);
      setDeferredPrompt(event.detail.deferredPrompt);
    };

    window.addEventListener('app-installable', handleAppInstallable);

    return () => {
      window.removeEventListener('app-installable', handleAppInstallable);
    };
  }, []);

  // Hide the install button after use
  const hideInstallButton = () => {
    setShowInstallButton(false);
  };

  useEffect(() => {
    // Check if the application is online or offline
    if (!navigator.onLine) {
      setWarningAlert("You are offline. The data shown may not be up to date.");
    } else {
      setWarningAlert(""); // Clear warning message when online
    }
    fetchData();
  }, [currentCity, currentNOE]);

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
      {/* Render Alerts */}
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert}/> : null}
        {warningAlert ? <WarningAlert text={warningAlert} /> : null}
      </div>
      {/* Render the InstallButton component if the app is installable */}
      {isInstallable && showInstallButton && 
        <div className="install-button-container">
          <InstallButton deferredPrompt={deferredPrompt} onInstallClicked={hideInstallButton}/>
        </div>
      }
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} setInfoAlert={setInfoAlert} />
      <NumberOfEvents defaultNumber={currentNOE} onNumberChange={handleNumberChange} setErrorAlert={setErrorAlert} />
      {/* Render Event Charts */}
      <div className="charts-container">
        <EventGenresChart events={events} />
        <CityEventsChart allLocations={allLocations} events={events} />
      </div>
      <EventList events={events} />
    </div>
  );
}

export default App;