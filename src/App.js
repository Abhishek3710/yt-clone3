import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./homeScreen/HomeScreen";
import { Container } from "react-bootstrap";
import "./_app.scss";
import { useState } from "react";
const App = () => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((prevValue) => !prevValue);

  return (
    <div>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container border border-info">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app_main border-warning">
          <HomeScreen />
        </Container>
      </div>
    </div>
  );
};

export default App;
