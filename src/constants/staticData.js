import AppointmentIcon from '../assets/analytics/appointmentIcon.svg';
import PatientIcon from '../assets/analytics/patientIcon.svg';
import OperationIcon from '../assets/analytics/operationIcon.svg';
import EarningIcon from '../assets/analytics/earningIcon.svg';

export const NavLinks = [
  {
    path: '/',
    name: 'Dashboard',
    dropdown: false,
  },
  {
    path: '/appointment',
    name: 'Appointments',
    dropdown: false,
  },
  {
    path: '/',
    name: 'Doctors',
    dropdown: false,
  },
  {
    path: '/',
    name: 'Departments',
    dropdown: false,
  },
  {
    path: '/',
    name: 'Patients',
    dropdown: false,
  },
  {
    path: '/',
    name: 'Payments',
    dropdown: false,
  },
  {
    path: '/',
    name: 'Service Pages',
    dropdown: false,
  },
  {
    path: '/',
    name: 'Help',
    dropdown: false,
  },
];

export const AnalyticsStats = [
  {
    title: 'Appointments',
    stats: '213',
    image: AppointmentIcon,
  },
  {
    title: 'New Patients',
    stats: '104',
    image: PatientIcon,
  },
  {
    title: 'Operations',
    stats: '24',
    image: OperationIcon,
  },
  {
    title: 'Hospital Earnings',
    stats: '$ 12,174',
    image: EarningIcon,
  },
];
