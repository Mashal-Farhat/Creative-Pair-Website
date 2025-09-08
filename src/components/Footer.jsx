import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  // Variants for link animation
  const linkVariants = {
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <footer className="bg-gray-900 text-white py-8 px-8 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Website Name/Logo - Left */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center font-bold text-xl">
            <div className="w-11 h-11 flex items-center justify-center mr-2">
              <img
                src="/logo__2.png"
                alt="CP"
                className="w-full h-full object-contain"
              />
            </div>
            Creative Pair
          </Link>
        </div>

        {/* Menu Links - Center */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              variants={linkVariants}
              whileHover="hover"
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

        {/* Contact Information - Right */}
        <div className="text-center md:text-right">
          <p className="text-sm">Contact Us</p>
          <p className="text-sm">Email: hr.creativepair@gmail.com</p>
          <p className="text-sm">Phone: (+92) 327-4968541</p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Creative Pair. All rights reserved.
      </div>
    </footer>
  );
}