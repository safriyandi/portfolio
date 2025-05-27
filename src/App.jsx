import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './assets/components/Header/Header'; // header utama
import Home from './assets/components/UI/Home';          // halaman portfolio utama
import ProjectBucin from './pages/ProjectBucin';         // halaman project bucin
import Footer from './assets/components/Footer/Footer';  // footer

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Home />} /> {/* Bisa akses portfolio via / atau /portfolio */}
          <Route path="/project-bucin" element={<ProjectBucin />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
