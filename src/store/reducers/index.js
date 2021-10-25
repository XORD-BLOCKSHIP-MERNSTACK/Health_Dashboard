import { combineReducers } from 'redux';
import { appointment_reducer } from './appointmentReducer';

export default combineReducers({
  appointment: appointment_reducer,
});
