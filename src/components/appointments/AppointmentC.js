import React from 'react';

// Custom Components
import { MainHeading } from '../other/Heading';
import { Cardlabels, Card } from './Card';
import { List } from '../other/List';
import Paging from '../other/Paging';

const AppointmentC = (props) => {
  // Destructuring props
  const { data } = props;

  return (
    <div className='appointment'>
      <div className='heading-con'>
        <MainHeading mainHeading='Appointments' />
      </div>
      <div className='list-con'>
        <Cardlabels />
        <List list={data} Component={Card} />
        <Paging />
      </div>
    </div>
  );
};

export default AppointmentC;
