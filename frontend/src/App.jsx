import Register from "./Components/Register";
import Login from "./Components/Login";
import Home  from "./Components/Home";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";


function App() {
  const [role, setRole] = useState("");
   
  const handleLogin = (role) => {
    setRole(role);
    console.log(role);
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
              <li className="nav-item">
                <Link to="/Login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route
            path="/login"
            element={<Login onlogin={handleLogin} />}
          ></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
