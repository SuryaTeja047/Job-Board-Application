import React, { useState } from "react";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import CreateJob from "./Components/Jobs/CreateJob";
import Jobs from "./Components/Jobs/Jobs";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [username, setUsername] = useState(localStorage.getItem("username"));

  const handleLogin = (newToken, newRole, newUsername) => {
    setToken(newToken);
    setRole(newRole);
    setUsername(newUsername);
    localStorage.setItem("token", newToken);
    localStorage.setItem("role", newRole);
    localStorage.setItem("username", newUsername);
  };

  const handleLogout = () => {
    setToken(null);
    setRole(null);
    setUsername(null);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Job Board
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {!token ? (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link">
                      Register
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  {role === "employeer" && (
                    <li className="nav-item">
                      <Link to="/createjobs" className="nav-link">
                        Create Jobs
                      </Link>
                    </li>
                  )}
                  {role === "job seeker" && (
                    <li className="nav-item">
                      <Link to="/jobs" className="nav-link">
                        Jobs
                      </Link>
                    </li>
                  )}
                  <li className="nav-item">
                    <button
                      className="nav-link btn btn-link"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                  <li className="nav-item d-flex align-items-center">
                    <Link to='/' className="nav-link">
                    <img
                      src={"https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"}
                      alt="Profile"
                      className="rounded-circle"
                      width="30"
                      height="30"
                    />
                    &nbsp;{username}
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          {role === "employeer" && (
            <Route path="/createjobs" element={<CreateJob />} />
          )}
          {role === "job seeker" && <Route path="/jobs" element={<Jobs />} />}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
