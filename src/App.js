import "./App.css";
import { Route, Navigate, Routes } from "react-router-dom";
import DashboardView from "./components/DashboardView";
import SettingsView from "./components/SettingsView";
import Layout from "./components/Layout";
import { useAuth } from "./context/user-context";
import Header from "./components/Header";

function App() {
  const authUser = useAuth();

  return (
    <div className={!authUser.theme ? "light-theme" : "dark-theme"}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Layout />} />
        <Route
          path="/dashboard"
          element={
            authUser.authenticated ? <DashboardView /> : <Navigate to="/" />
          }
        />

        <Route
          path="/settings"
          element={
            authUser.authenticated ? <SettingsView /> : <Navigate to="/" />
          }
        />
        <Route path="/*" element={<h1>code 404. page is not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
