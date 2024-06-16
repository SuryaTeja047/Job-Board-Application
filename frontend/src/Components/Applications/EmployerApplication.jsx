import { useEffect, useState } from "react";
import Applications from "./Applications";

const EmployerApplication = () => {
  const [applications, setApplications] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchApplications();
  }, []);
  const fetchApplications = async () => {
    const response = await fetch("http://localhost:5000/userApplications", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    const applications = data.applications;
    setApplications(applications);
  };
  return <Applications applications={applications} />;
};
export default EmployerApplication;
