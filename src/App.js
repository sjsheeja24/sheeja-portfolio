import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from "./blog.js";
import Footer from "./components/Footer.js";
import Education from "./components/Education.js";
import Skills from "./page/Skills.js";
import Contact from "./page/Contact.js";


function Layout({ children }) {
  return (
    <>
      {children} 
      <Footer />
        
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;