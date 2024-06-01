import React from "react";
import { resolvePath } from "react-router-dom";

const ProfileDetails = ({ user }) => {
  return (
    <>
      <div className="container mt-4">
        <div className="row align-items-center">
          <div className="col">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="rounded-circle"
              width="150"
              height="150"
            />
          </div>
          <div className="col-9">
            <h1>{user.fullName}</h1>
            <p>{user.role}</p>
          </div>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">Profile Details</h5>
          <p className="card-text">
            <strong>Username: </strong>{user.username}
          </p>
          <p className="card-text">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="card-text">
            <strong>Full Name:</strong> {user.fullName}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
