import React from 'react';
import JobSeeker from './JobSeeker'
import Employer from './Employer'

const Dashboard = ({ userRole }) => {
  return (
    <div>
      {userRole === 'job seeker' ? (
        <JobSeeker />
      ) : (
        <Employer />
      )}
    </div>
  );
};

export default Dashboard;
