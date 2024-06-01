import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();
  const handleRegisterClick = () => navigate("/login");
  const onSubmit = async (e) => {
    e.preventDefault();
    const url = "http://127.0.0.1:5000/register";
    const data = {
      username,
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
      role,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, options);

    if (response.status !== 200 && response.status !== 201) {
      const data = await response.json();
      alert(data.message);
    } else {
      alert("Registration Succesfull!");
      navigate("/login");
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-tile">Register User</h1>
        <form method="POST" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Enter Username:</label>
            <input
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label>Enter First Name:</label>
            <input
              className="form-control"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label>Enter Last Name:</label>
            <input
              className="form-control"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label>Enter Email:</label>
            <input
              className="form-control"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label>Enter Password:</label>
            <input
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              autoComplete="current-password" 
            ></input>
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              autoComplete="current-password"
            ></input>
          </div>
          <div className="form-group">
            <label>Enter Role:</label>
            <select
              className="form-control"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option>Select an Option</option>
              <option value={"Job Seeker"}>Job Seeker</option>
              <option value={"Employeer"}>Employer</option>
            </select>
          </div>
          <br />
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </form>
        <p className="mt-3">
          Already a User?{" "}
          <button className="btn btn-link" onClick={handleRegisterClick}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
