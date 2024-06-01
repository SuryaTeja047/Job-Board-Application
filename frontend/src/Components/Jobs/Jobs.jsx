import { useState, useEffect } from "react";
import JobList from "./JobList"

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const response = await fetch("http://127.0.0.1:5000/jobs");
    const data = await response.json();
    setJobs(data.jobs);
  };
  return (
      <JobList jobs={jobs} role="job seeker"/>
  );
};

export default Jobs;
