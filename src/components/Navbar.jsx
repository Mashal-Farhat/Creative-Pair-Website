import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
      className="flex justify-between items-center px-8 py-4 bg-gray-900 shadow-md sticky top-0 z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center font-bold text-xl text-white">
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
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
              className="text-white hover:text-brand-light transition-colors duration-300"
            >
              {link.name}
              <motion.span
                className="absolute left-0 -bottom-1 w-full h-[2px] bg-brand-light origin-left"
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
        className="fixed top-0 right-0 h-full w-64 bg-gray-800 shadow-lg z-50 md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={drawerVariants}
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
                className="text-white text-lg hover:text-brand-light transition-colors duration-300"
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