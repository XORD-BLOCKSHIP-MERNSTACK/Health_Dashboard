import React, { Fragment } from 'react';

// Custom Components
import Analytics from '../components/analytics/Analytics';
import Activity from '../components/appointments/Activity';

const Dashboard = () => {
  return (
    <Fragment>
      <Analytics />
      <Activity />
    </Fragment>
  );
};

export default Dashboard;
