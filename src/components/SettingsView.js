import React, { useState, useEffect } from "react";
import { useAuth } from "../context/user-context";
import "./SettingsView.css";

const SettingsView = () => {
  const authUser = useAuth();
  const { name, birthdate, colour } = authUser.user;
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("");
  const [favcolour, setColour] = useState("");
  const [birthday, setBirthday] = useState("");
  console.log(username, favcolour, birthday);

  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    authUser.login({ username, favcolour, birthday });
    setIsEditing(false);
  };
  const toggleTheme = () => {
    authUser.setMode();
  };

  return (
    <div className="settings">
      <h1>Welcome to your Profile {username}</h1>
      <div className="settings__container">
        <button className="button emoji" onClick={toggleTheme}>
          {authUser.theme ? "🌚" : "🌝"}
        </button>
        <div className="card card__info">
          {!isEditing && (
            <div>
              <button className="button" onClick={handleEdit}>
                Edit
              </button>

              <div className="row">
                <span className="info">Name:</span>
                <span className="info">{username}</span>
              </div>
              <div className="row">
                <span className="info">Birthday:</span>
                <span className="info">{birthday}</span>
              </div>
              <div className="row">
                <span className="info">Favourite Colour:</span>
                <span className="info">{favcolour}</span>
              </div>
            </div>
          )}
          {/*  */}
          {isEditing && (
            <form onSubmit={handleSubmit}>
                    
              <div className="row">
                <span className="info">Name:</span>
                <input
                  type="text"
                  name="colour"
                  onChange={(e) => setUsername((prev) => e.target.value)}
                  value={name}
                  required
                />
              </div>
              <div className="row">
                <span className="info">Birthday:</span>
                <input
                  type="text"
                  name="colour"
                  onChange={(e) => setBirthday(e.target.value)}
                  value={birthdate}
                  required
                />
              </div>
                    
              <div className="row">
                <span className="info">Favourite Colour:</span>
                <input
                  type="text"
                  name="colour"
                  onChange={(e) => setColour(e.target.value)}
                  value={colour}
                  required
                />
              </div>
                    
              <button className="button" type="submit" value="Submit">
                submit
              </button>
                    
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsView;
