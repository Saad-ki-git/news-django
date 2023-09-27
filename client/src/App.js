import React from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import SuperNavbar from "./components/Navbar";
import BlogDetail from "../src/containers/BlogDetail"
import Contact from "./containers/Contact";
import Team from "./containers/Team";
import Footer from "./components/Footer";
function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<SuperNavbar/>} />
          <Route path="/" element={<SuperNavbar />} />
          <Route path="/:slug" element={<BlogDetail />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<Team />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/" element={<Footer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;