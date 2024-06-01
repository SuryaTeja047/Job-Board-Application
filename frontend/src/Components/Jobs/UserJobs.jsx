import { useEffect, useState } from "react";
import JobList from "./JobList";

const UserJobs = () => {
  const [userJobs, setUserJobs] = useState([]);

  useEffect(() => {
    fetchUserJobs();
  }, []);

  const fetchUserJobs = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch("http://127.0.0.1:5000/userJobs",{
        method:"GET",
        headers:{
            'Content-Type':'application/json',
            Authorization: `Bearer ${token}`,
        }
    });
    const data = await response.json();
    setUserJobs(data.userJobs);
  };
  return <JobList jobs={userJobs} role="employeer"/>;
};
export default UserJobs;
