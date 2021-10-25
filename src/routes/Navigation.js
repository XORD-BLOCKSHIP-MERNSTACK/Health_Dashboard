import React from 'react';

// Navigation
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Containers/Pages
import Appointment from '../containers/Appointment';
import Dashboard from '../containers/Dashboard';

// Custom Components
import Header from '../components/header/Header';
import Navigationbar from '../components/navigationbar/Navigationbar';

const Navigation = (props) => {
  const { appointmentData } = props;

  return (
    <Router>
      <div className='container'>
        <Header />
        <Navigationbar />
        <Switch>
          <Route
            exact
            path='/'
            render={() => <Dashboard data={appointmentData} />}
          />
          <Route
            exact
            path='/appointment'
            render={() => <Appointment data={appointmentData} />}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default Navigation;
