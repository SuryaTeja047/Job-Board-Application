import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
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
    const result = await response.json();

    if (response.status !== 200 && response.status !== 201) {
      alert(result.message);
    } else {
      console.log(result)
      const token = result.token;
      const role = result.role;
      const username =result.username;
      // localStorage.setItem('token',token)
      onLogin(token,role,username)
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
            <label htmlFor="email">Enter Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"  autoComplete="current-email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Enter Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control" autoComplete="current-password"
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
