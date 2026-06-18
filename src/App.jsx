import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import {
  Home,
  About,
  Services,
  Contact,
  Projects,
  PortfolioWeb,
  MobileAppProjects,
  WebAppProjects,
  DesignProjects,
  UIDesigns,
  GraphicDesign,
  EComProjects,
} from "./pages";
import { Loader } from "./components";

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
    <MainLayout>
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
    </MainLayout>
  );
}

export default App;
