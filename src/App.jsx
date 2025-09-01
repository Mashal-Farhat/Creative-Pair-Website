import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div className="bg-brand-dark text-white min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
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

          {/* Design Projects Sub-Routes */}
          <Route path="/projects/design" element={<DesignProjects />} />
          <Route path="/projects/design/ui" element={<UIDesigns />} />
          <Route path="/projects/design/graphic" element={<GraphicDesign />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
