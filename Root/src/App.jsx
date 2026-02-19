import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./Components/Layout.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import ReadMore from "./Components/ReadMore.jsx";
import Gallery from "./Components/Gallery.jsx";
import Contact from "./Components/Contact.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>

          {/* Scroll Homepage (Default Route) */}
          <Route
            index
            element={
              <div className="scroll-container">
                <section className="scroll-section">
                  <Home />
                </section>

                <section className="scroll-section">
                  <About />
                </section>

                <section className="scroll-section">
                  <ReadMore />
                </section>

                <section className="scroll-section">
                  <Gallery />
                </section>

                <section className="scroll-section">
                  <Contact />
                </section>
              </div>
            }
          />

          {/* Separate Routes */}
          <Route path="about" element={<About />} />
          <Route path="readmore" element={<ReadMore />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
