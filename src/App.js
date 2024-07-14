import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";

import "./_app.scss";
import { useSelector } from "react-redux";
import WatchScreen from "./screens/watchScreen/WatchScreen";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((prevValue) => !prevValue);

  return (
    <div>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app_main border-warning">
          {children}
        </Container>
      </div>
    </div>
  );
};

const App = () => {
  const { accessToken, loading } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (!accessToken && !loading) {
      navigate("/auth");
    }
  }, [accessToken, loading, navigate]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomeScreen />
          </Layout>
        }
      />
      <Route path="/auth" element={<LoginScreen />} />
      <Route
        path="/search"
        element={
          <Layout>
            <h1>Hello Search</h1>
          </Layout>
        }
      />
      <Route
        path="/watch/:id"
        element={
          <Layout>
            <WatchScreen />
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
