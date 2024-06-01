import React from "react";
import JobCard from './JobCard';
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation

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
      {jobs.length === 0 ? (
        <div>
          <p>No jobs posted.</p>
          {role === "employeer" && (
            <div>
              <p>Post a job now!</p>
              <Link to="/createjobs" className="btn btn-primary">
                Post Job
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="row">
          {jobs.map((job) => (
            <div key={job.id} className="col-12 mb-3">
              <JobCard job={job} role={role} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;
