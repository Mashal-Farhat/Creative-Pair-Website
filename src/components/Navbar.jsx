import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import useTheme from "../hooks/useTheme";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const isDark = useTheme();

  // Color palette - dynamically changes based on theme (matching homepage)
  const colors = isDark ? {
    dark: "#0A100D",      // Rich dark background
    light: "#B9BAA3",     // Light text
    accent2: "#902923",   // Deeper rust for hover states
  } : {
    dark: "#FDF8F2",      // Warm off-white background
    light: "#0A100D",     // Rich dark brown text
    accent2: "#973e34",   // Deeper rust for hover states
  };

  const navLinks = [
    { id: "home", name: "Home", path: "/" },
    { id: "about", name: "About", path: "/about" },
    { id: "services", name: "Services", path: "/services" },
    { id: "projects", name: "Projects", path: "/projects" },
    { id: "contact", name: "Contact", path: "/contact" },
  ];

  // Drawer animation variants
  const drawerVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  // Link animation variants
  const linkVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <motion.nav
      className="flex justify-between items-center px-5 py-2 sticky top-3 z-50 mx-3 rounded-3xl"
      style={{
        backgroundColor: isDark ? 'rgba(10, 16, 13, 0.66)' : 'rgba(253, 248, 242, 0.8)',
        backdropFilter: 'blur(10px)',
        boxShadow: isDark ? '0 2px 10px rgba(10, 16, 13, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.05)',
        fontFamily: "'Montserrat', sans-serif",
        border: `1px solid ${isDark ? '#B9BAA3' : '#0A100D'}20`,
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <Link 
        to="/" 
        className="flex items-center font-bold text-xl"
        style={{ color: colors.light, fontFamily: "'Manrope', sans-serif" }}
        onClick={() => setActiveTab("home")}
      >
        <div className="w-25 h-14 flex items-center justify-center mr-2 rounded-full p-1">
          <img
            src="/CP Logo2.png"
            alt="CP"
            className="w-full h-full object-contain"
          />
        </div>
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center space-x-6">
        <div 
          className="flex gap-1 rounded-xl p-1"
          style={{ 
            backgroundColor: isDark ? `${colors.dark}80` : `${colors.light}10`,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className="no-underline"
              onClick={() => setActiveTab(link.id)}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-xs font-medium rounded-lg transition-all duration-300"
                style={{ 
                  fontFamily: "'Montserrat', sans-serif",
                  backgroundColor: activeTab === link.id ? colors.accent2 : "transparent",
                  color: activeTab === link.id ? (isDark ? colors.light : "#FDF8F2") : (isDark ? colors.light : colors.light),
                }}
              >
                {link.name}
              </motion.div>
            </Link>
          ))}
        </div>
        
        
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <ThemeToggle />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full transition-colors duration-300"
          style={{ 
            color: colors.light,
            backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'
          }}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Side Drawer */}
      <motion.div
        className="fixed top-0 right-0 h-full w-64 z-50 md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={drawerVariants}
        style={{
          backgroundColor: isDark ? colors.light : colors.dark,
          borderTopLeftRadius: '20px',
          borderBottomLeftRadius: '20px',
          boxShadow: isDark ? '-4px 0 20px rgba(0, 0, 0, 0.15)' : '-4px 0 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="flex flex-col items-start p-6 space-y-4 mt-16">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              variants={linkVariants}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              onClick={() => {
                setIsOpen(false);
                setActiveTab(link.id);
              }}
              className="w-full"
            >
              <Link
                to={link.path}
                className="block px-4 py-2.5 rounded-lg font-medium transition-all duration-300 hover:shadow-md w-full"
                style={{
                  color: isDark ? colors.dark : colors.light,
                  backgroundColor: activeTab === link.id ? colors.accent2 : 'transparent',
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: '14px'
                }}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 md:hidden"
          style={{ backgroundColor: isDark ? `${colors.dark}CC` : `${colors.light}CC` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </motion.nav>
  );
}