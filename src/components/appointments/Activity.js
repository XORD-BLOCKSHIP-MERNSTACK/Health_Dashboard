import React from 'react';

// Custom Components
import { SubHeading } from '../other/Heading';
import { Cardlabels, Card } from './Card';
import List from '../other/List';

const Activity = (props) => {
  // Destructuring props
  const { data } = props;

  return (
    <div className='activity'>
      <div className='heading-con'>
        <SubHeading subHeading='Appointment Activity' />
      </div>
      <div className='list-con'>
        <Cardlabels />
        <List list={data.slice(0, 5)} Component={Card} />
      </div>
    </div>
  );
};

export default Activity;
