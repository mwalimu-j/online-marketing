import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer'; // Import the Footer component
import Home from './pages/Home'; // Import Home page
import About from './pages/About'; // Import About page
import Services from './pages/Services'; // Import Services page
import Contact from './pages/Contact'; // Import Contact page

const App = () => {
  return (
    <div>
      {/* Include the Header at the top of every page */}
      <Header />

      {/* Main content area where different pages will render based on routes */}
      <main>
        <Routes>
          {/* Define the routes for the pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Include the Footer at the bottom of every page */}
      <Footer />
    </div>
  );
};

export default App;
