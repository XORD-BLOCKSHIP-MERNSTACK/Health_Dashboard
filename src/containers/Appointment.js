import React, { Fragment } from 'react';

// Custom Components
import AppointmentC from '../components/appointments/AppointmentC';

const Appointment = (props) => {
  return (
    <Fragment>
      <AppointmentC {...props} />
    </Fragment>
  );
};

export default Appointment;
