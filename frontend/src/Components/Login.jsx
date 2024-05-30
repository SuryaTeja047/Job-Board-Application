import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    const url = "http://127.0.0.1:5000/login";
    const data = {
      email,
      password,
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
      alert("Login Succesfull!");
      navigate("/");
    }
  };
  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">Login</h1>
        <form method="POST" onSubmit={onSubmit}>
          <div className="form-group">
            <label>Enter Email:</label>
            <input
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Enter Password:</label>
            <input
              className="form-control"
              value={password}
              type = "password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        <p className="mt-3">
          New User? <button className="btn btn-link">Sign Up</button>
        </p>
      </div>
    </div>
  );
};

export default Login;
