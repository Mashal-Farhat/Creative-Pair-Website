import { useEffect } from 'react';
import { Navbar, Footer, ScrollToTop, ThemeToggle } from '../components';

/**
 * MainLayout Component
 * Wraps main content with navigation, footer, and global components
 */
const MainLayout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-dark text-white min-h-screen flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Main Content */}
      <div className="flex-1">
        <ScrollToTop />
        {children}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
