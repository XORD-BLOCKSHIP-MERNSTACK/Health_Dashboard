import React from 'react';

// Appointment Data
import { Appointment } from '../../constants/staticData';

// Custom Components
import { MainHeading } from '../other/Heading';
import { Cardlabels, Card } from './Card';
import List from '../other/List';
import Paging from '../other/Paging';

const AppointmentC = () => {
  return (
    <div className='appointment'>
      <div className='heading-con'>
        <MainHeading mainHeading='Appointments' />
      </div>
      <div className='list-con'>
        <Cardlabels />
        <List list={Appointment} Component={Card} />
        <Paging />
      </div>
    </div>
  );
};

export default AppointmentC;
