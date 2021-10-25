import React, { useState } from 'react';

// Navigation
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Containers/Pages
import Appointment from '../containers/Appointment';
import Dashboard from '../containers/Dashboard';

// Custom Components
import Header from '../components/header/Header';
import Navigationbar from '../components/navigationbar/Navigationbar';
import Login from '../containers/Login';
import Register from '../containers/Register';

const Navigation = (props) => {
  // Destructuring Props
  const { appointmentData } = props;

  // Handling Same search bar for multiple lists
  const [appointmentSearch, setAppointmentSearch] = useState(false);
  const [ActivitySearch, setActivitySearch] = useState(false);
  const [searchedAppointmentData, setSearchedAppointmentData] = useState([]);
  const [searchedActivityData, setSearchedActivityData] = useState([]);

  const handleSearch = (text) => {
    if (window.location.pathname === '/') {
      setActivitySearch(true);
      let Filteredlist = appointmentData.slice(0, 5).filter((value) => {
        return value.name.toLowerCase().includes(text.toLowerCase()) !== false;
      });
      setSearchedActivityData(Filteredlist);
    }
    if (window.location.pathname === '/appointment') {
      setAppointmentSearch(true);
      let Filteredlist = appointmentData.filter((value) => {
        return value.name.toLowerCase().includes(text.toLowerCase()) !== false;
      });
      setSearchedAppointmentData(Filteredlist);
    }
  };
  // Handling Same search bar for multiple lists

  return (
    <Router>
      <div className='container'>
        <div
          style={{
            display:
              window.location.pathname === '/login' ||
              window.location.pathname === '/register'
                ? 'none'
                : 'block',
          }}
        >
          <Header
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
          <Navigationbar
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
        </div>
        <Switch>
          <Route exact path='/login' render={() => <Login />} />
          <Route exact path='/register' render={() => <Register />} />
          <Route
            exact
            path='/'
            render={() => (
              <Dashboard
                data={ActivitySearch ? searchedActivityData : appointmentData}
              />
            )}
          />
          <Route
            exact
            path='/appointment'
            render={() => (
              <Appointment
                data={
                  appointmentSearch ? searchedAppointmentData : appointmentData
                }
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default Navigation;
