import React from "react";
import JobCard from "./JobCard";

const JobList = ({ jobs, role }) => {
  let heading;
  if (role == "job seeker") {
    heading = "Jobs Available";
  } else {
    heading = "My Jobs";
  }
  return (
    <div className="container mt-5">
      <h1 className="mb-4">{heading}</h1>
      <div className="row">
        {jobs.map((job) => (
          <div key={job.id} className="col-12 mb-3">
            <JobCard job={job} role={role} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
