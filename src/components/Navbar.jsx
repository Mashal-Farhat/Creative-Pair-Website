import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  // Variants for the side drawer animation
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

  // Variants for nav links animation
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
      className="flex justify-between items-center px-8 py-4 shadow-md sticky top-0 z-50"
      style={{ backgroundColor: 'var(--cp-surface)', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center font-bold text-xl text-current">
        <div className="w-11 h-11 flex items-center justify-center mr-2">
          <img
            src="/logo__2.png"
            alt="CP"
            className="w-full h-full object-contain"
          />
        </div>
        Creative Pair
      </Link>

      {/* Hamburger Menu for Mobile/Tablet */}
      <div className="flex items-center gap-4">
        {/* Theme toggle */}
        <button
          onClick={() => {
            const shouldDark = !isDark;
            setIsDark(shouldDark);
            if (shouldDark) document.documentElement.classList.add('dark');
            else document.documentElement.classList.remove('dark');
          }}
          aria-label="Toggle theme"
          className="text-current"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-current">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex space-x-6">
        {navLinks.map((link, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative"
          >
            <Link
              to={link.path}
              className="text-current hover:text-accent transition-colors duration-300"
            >
              {link.name}
              <motion.span
                className="absolute left-0 -bottom-1 w-full h-[2px] bg-accent origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Side Drawer for Mobile/Tablet */}
      <motion.div
        className="fixed top-0 right-0 h-full w-64 shadow-lg z-50 md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={drawerVariants}
        style={{ backgroundColor: 'var(--cp-surface)' }}
      >
        <div className="flex flex-col items-start p-6 space-y-4 mt-16">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              variants={linkVariants}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsOpen(false)} // Close drawer on link click
            >
              <Link
                to={link.path}
                className="text-current text-lg hover:text-accent transition-colors duration-300"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Overlay for Mobile/Tablet */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)} // Close drawer on overlay click
        />
      )}
    </motion.nav>
  );
}