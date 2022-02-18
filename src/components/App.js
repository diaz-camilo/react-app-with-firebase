import React from "react";
import { Container, Nav } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Signup from "./Signup";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import RequireAuth from "./RequireAuth";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";


function App() {
  const { currentUser } = useAuth();
  return (

    <Router>
      <NavBar />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <Routes>
          <Route exact path="/" element={<RequireAuth><Dashboard /></RequireAuth>} />
          <Route path="update-profile" element={<RequireAuth><UpdateProfile /></RequireAuth>} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<div>
            <h1>There is nothing here</h1>
          </div>} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App;
