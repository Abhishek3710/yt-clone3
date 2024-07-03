import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";

import "./_app.scss";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((prevValue) => !prevValue);

  return (
    <div>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container border border-info">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app_main border-warning">
          {children}
        </Container>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
