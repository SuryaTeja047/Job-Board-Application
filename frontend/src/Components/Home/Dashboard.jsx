import React from 'react';
import Jobs from '../Jobs/Jobs';
import CreateJobs from '../Jobs/CreateJob';

const Dashboard = ({ userRole }) => {
  return (
    <div>
      {userRole === 'job seeker' ? (
        <Jobs />
      ) : (
        <CreateJobs />
      )}
    </div>
  );
};

export default Dashboard;
