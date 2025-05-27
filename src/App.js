import { useEffect } from "react";
import Aos from "aos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";
import Hero from "./assets/components/UI/Hero";
import Services from "./assets/components/UI/Services";
import Portfolio from './assets/components/UI/Portfolio';
import Contact from "./assets/components/UI/Contact";

import ProjectBucin from "./assets/components/pages/ProjectBucin";  // pastikan path ini benar

function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-bucin" element={<ProjectBucin />} />
      </Routes>
    </Router>
  );
}

export default App;
