// Types
import * as actionTypes from '../constants/actionTypes';

// Initial State
const initialState = {
  appointments: [],
};

// Reducer
export const appointment_reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_APPOINTMENTS:
      return getAppointments(state, action);
    default:
      return state;
  }
};

//
const getAppointments = (state, action) => {
  return { ...state, appointments: action.data };
};
