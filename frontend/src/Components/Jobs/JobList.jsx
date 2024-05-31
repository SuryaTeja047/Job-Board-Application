import React from 'react';
import JobCard from './JobCard'

const JobList = ({ jobs }) => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Jobs Available</h1>
      <div className="row">
        {jobs.map((job) => (
          <div key={job.id} className="col-12 mb-3">
            <JobCard
              title={job.title}
              description={job.description}
              location={job.location}
              salary={job.salary}
              company={job.company}
              username={job.username}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
