import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import PortfolioWeb from "./pages/PortfolioWeb";
import MobileAppProjects from "./pages/MobileAppProjects";
import WebAppProjects from "./pages/WebAppProjects";
import DesignProjects from "./pages/DesignProjects";
import UIDesigns from "./pages/UIDesigns";
import GraphicDesign from "./pages/GraphicDesign";
import EComProjects from "./pages/E-comProjects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ThemeToggle from "./components/ThemeToggle";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); //2 sec

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-brand-dark">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-brand-dark text-white min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1">
        <ScrollToTop />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          {/* Projects Section */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/portfolio" element={<PortfolioWeb />} />
          <Route path="/projects/mobile-apps" element={<MobileAppProjects />} />
          <Route path="/projects/web-apps" element={<WebAppProjects />} />
          <Route path="/projects/ecommerce" element={<EComProjects />} />

          {/* Design Projects */}
          <Route path="/projects/design" element={<DesignProjects />} />
          <Route path="/projects/design/ui" element={<UIDesigns />} />
          <Route path="/projects/design/graphic" element={<GraphicDesign />} />
        </Routes>
      </div>

      <Footer />
      <ThemeToggle />
    </div>
  );
}

export default App;
