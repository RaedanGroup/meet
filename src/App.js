import './App.css';
import logo from './meetApp-logo.jpg';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="MeetApp Logo" style={{ height: '250px' }} />
      <CitySearch />
      <NumberOfEvents />
      <EventList />
    </div>
  );
}

export default App;
