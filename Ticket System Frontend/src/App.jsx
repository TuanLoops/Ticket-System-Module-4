import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./components/UserContext";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Ticket from "./components/Ticket";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/ticket" element={<Ticket/>} />
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
