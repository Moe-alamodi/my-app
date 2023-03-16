import React, { useEffect, useState } from "react";
import "./login.css";
import { users } from "../fake-server/users";
import { useAuth } from "../context/user-context";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState(false);
  const authUser = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.name === username);
    if (account && account.password === password) {
      authUser.login(account);
      authUser.isAuthenticated(true);

      navigate("/dashboard");
    } else {
      setError(true);
      setpassword("");
      setusername("");
    }
  };
  return (
    <div className="container">
      <h1>Wellcome back</h1>
            <p>Sign in to your profile</p>
            
      <form className=" card login-card" onSubmit={handleSubmit}>
              
        <input
          type="text"
          name="Username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          placeholder="Enter your Username"
        />
              
        <input
          type="password"
          name="Password"
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Enter your Password"
          value={password}
        />
              
        <button className="button" type="submit" value="Submit">
          login
        </button>
        {error && (
          <p className="error">Wrong username or password. Please try again</p>
        )}
              
      </form>
          
    </div>
  );
};

export default Login;
