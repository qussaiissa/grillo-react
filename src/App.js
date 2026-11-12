
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Services from "./pages/Services.js";
import Menu from "./pages/Menu.js";
import Contact from "./pages/Contact.js";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="*"
            element={
              <div className="wrap">
                <h1>Page not found</h1>
                <Link to="/">Back to Home</Link>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;