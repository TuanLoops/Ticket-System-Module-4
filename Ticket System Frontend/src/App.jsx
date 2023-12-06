import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { UserProvider } from "./components/UserContext";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

function App() {
  return (
    <UserProvider>
      <Router>
        <MainRoutes />
      </Router>
    </UserProvider>
  );
}

export default App;
