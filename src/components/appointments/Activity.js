import React from 'react';

// Appointment Data
import { Appointment } from '../../constants/staticData';

// Custom Components
import { SubHeading } from '../other/Heading';
import { Cardlabels, Card } from './Card';
import List from '../other/List';

const Activity = () => {
  return (
    <div className='activity'>
      <div className='heading-con'>
        <SubHeading subHeading='Appointment Activity' />
      </div>
      <div className='list-con'>
        <Cardlabels />
        <List list={Appointment} Component={Card} />
      </div>
    </div>
  );
};

export default Activity;
