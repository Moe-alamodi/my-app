import React, { useContext, useState } from "react";

const UserContext = React.createContext();

export function useAuth() {
  return useContext(UserContext);
}

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState(false);
  const isAuthenticated = () => {
    setAuthenticated(true);
  };
  const login = (user) => {
    setUser(user);
  };
  const logout = () => {
    setAuthenticated(false);
  };
  const setMode = () => {
    setTheme(!theme);
  };
  console.log(user);
  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        authenticated,
        isAuthenticated,
        setMode,
        theme,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
