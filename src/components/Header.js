import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/user-context";
import "./Header.css";

const Header = () => {
  const authUser = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    authUser.logout();
    navigate("/");
  };

  return (
    <header className="header">
      <Link to={"/"}>
        <h1>Pizzafy</h1>
      </Link>
      {authUser.authenticated ? (
        <nav className="list">
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>

            <li>
              <Link to="/settings">Settings</Link>
            </li>

            <li>
              <button className="button" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
