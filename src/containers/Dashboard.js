import React, { Fragment } from 'react';

// Custom Components
import Analytics from '../components/analytics/Analytics';
import Activity from '../components/appointments/Activity';

const Dashboard = (props) => {
  return (
    <Fragment>
      <Analytics />
      <Activity {...props} />
    </Fragment>
  );
};

export default Dashboard;
