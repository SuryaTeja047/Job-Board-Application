import React from 'react';

const ProfileSidebar = () => {
    return (
        <div className="nav flex-column nav-pills mt-4">
            <a className="nav-link" href="#settings">Settings</a>
            <a className="btn-danger btn">Delete Account</a>
        </div>
    );
};

export default ProfileSidebar;
