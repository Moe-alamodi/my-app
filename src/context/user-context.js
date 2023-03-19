import React, { useContext, useState } from "react";

const UserContext = React.createContext();

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState(false);

  const updateUser = (updateUser) => {
    setUser({
      ...user,
      name: updateUser.username,
      colour: updateUser.favcolour,
      birthdate: updateUser.birthday,
    });
  };

  const login = (user) => {
    setUser(user);
    setAuthenticated(true);
  };
  const logout = () => {
    setAuthenticated(false);
  };
  const setMode = () => {
    setTheme(!theme);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
        login,
        logout,
        authenticated,
        setMode,
        theme,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export function useAuth() {
  return useContext(UserContext);
}
