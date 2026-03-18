import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Trustees from './pages/Trustees';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Service Pages
import ChildEducation from './pages/service-pages/ChildEducation';
import AgricultureDevelopment from './pages/service-pages/AgricultureDevelopment';
import WomenEmpowerment from './pages/service-pages/WomenEmpowerment';
import UnemploymentYouth from './pages/service-pages/UnemploymentYouth';
import RuralWomenSupport from './pages/service-pages/RuralWomenSupport';
import HelpingHands from './pages/service-pages/HelpingHands';
import HumanRights from './pages/service-pages/HumanRights';

import FloatingContactButtons from './components/FloatingContactButtons';
import ServicesSubNav from './components/Service/ServicesSubNav';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow pt-20">
          <ServicesSubNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/trustees" element={<Trustees />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />

            {/* Detailed Service Routes */}
            <Route path="/services/child-education" element={<ChildEducation />} />
            <Route path="/services/agriculture-development" element={<AgricultureDevelopment />} />
            <Route path="/services/women-empowerment" element={<WomenEmpowerment />} />
            <Route path="/services/unemployment-youth" element={<UnemploymentYouth />} />
            <Route path="/services/rural-women-support" element={<RuralWomenSupport />} />
            <Route path="/services/helping-hands" element={<HelpingHands />} />
            <Route path="/services/human-rights" element={<HumanRights />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContactButtons />
      </div>
    </Router>
  );
}

export default App;
