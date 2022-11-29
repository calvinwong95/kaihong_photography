import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { PageStateProvider } from "./context/PageStateProvider.js";

import ContentContainer from "./service/ContentContainer";
import Home from "./pages/Home";
import Typography from "./pages/Typography";
import Layout from "./pages/Layout";
import Button from "./pages/Button";
import Carousel from "./pages/Carousel";
import Colours from "./pages/Colours";
import Forms from "./pages/Form";

function App() {
  return (
    <>
      <PageStateProvider>
        <Router>
          <Navbar />
          <ContentContainer>
            <Routes>
              {/*This is kaihong's */}
              <Route path="/" element={<Home />} />
              <Route path="/typography" element={<Typography />} />
              <Route path="/colours" element={<Colours />} />
              <Route path="/layout" element={<Layout />} />
              <Route path="/button" element={<Button />} />
              <Route path="/carousel" element={<Carousel />} />
              <Route path="/form" element={<Forms />} />
            </Routes>
          </ContentContainer>
        </Router>
      </PageStateProvider>
    </>
  );
}

export default App;
