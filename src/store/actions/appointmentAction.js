// Types
import * as actionTypes from '../constants/actionTypes';

// Appointment Data
import { Appointment } from '../../constants/staticData';

export const get_Appointments = (id) => {
  const filteredAppointments = Appointment.filter(
    (appointment) => appointment.doctorId === id
  );
  console.log(filteredAppointments);
  return {
    type: actionTypes.GET_APPOINTMENTS,
    data: filteredAppointments,
  };
};
