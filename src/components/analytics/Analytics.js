import React from 'react';

// Analytics Data
import { AnalyticsStats } from '../../constants/staticData';

// Custom Components
import Card from './Card';
import { List } from '../other/List';
import { Earninggraphs, Patientsgraph } from './Graph';

const Analytics = () => {
  return (
    <div className='analytics'>
      <div className='analytics-stats'>
        <div className='row'>
          <List list={AnalyticsStats} Component={Card} />
        </div>
      </div>
      <div className='analytics-graphs'>
        <Patientsgraph />
        <Earninggraphs />
      </div>
    </div>
  );
};

export default Analytics;
