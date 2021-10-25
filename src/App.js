import React, { useState, useEffect } from 'react';

// Style
import './App.scss';

// React Redux
import { useDispatch } from 'react-redux';

// Redux Action
import { get_Appointments } from './store/actions/appointmentAction';

// Routes
import Navigation from './routes/Navigation';

const App = () => {
  const [Appointment, setAppointment] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    let appointments = dispatch(get_Appointments(1));
    setAppointment(appointments.data);
  }, [dispatch]);

  return (
    <div className='app'>
      <Navigation appointmentData={Appointment} />
    </div>
  );
};

export default App;
