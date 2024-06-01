import React, { useEffect, useState } from "react";
import ProfileDetails from "./ProfileDetails";
import ProfileSidebar from "./ProfileSidebar";

const ProfileDashboard = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchContact();
  }, []);
  const fetchContact = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch("http://127.0.0.1:5000/userdetails", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (Array.isArray(data.user) && data.user.length > 0) {
        setUser(data.user[0]);
    } else {
        setUser(null);
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <ProfileSidebar />
        </div>
        <div className="col-md-9">
          <ProfileDetails user={user}/>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
