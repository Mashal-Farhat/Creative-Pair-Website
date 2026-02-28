import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegEnvelope,
} from "react-icons/fa";
import useTheme from "../hooks/useTheme";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isDark = useTheme();

  // Color palette - dynamically changes based on theme (matching homepage)
  const colors = isDark ? {
    dark: "#0A100D",      
    light: "#B9BAA3",    
    accent2: "#902923",  
    accent3: "#4a2523"    
  } : {
    dark: "#FDF8F2",      // Warm off-white background
    light: "#0A100D",     // Rich dark brown text
    accent2: "#B83222",   // Deeper rust for hover states
    accent3: "#F0E6D8"    // Warm beige for accents
  };

  return (
    <footer
      className="pt-12 pb-8"
      style={{
        backgroundColor: colors.dark,
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-10">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-full p-1 flex items-center justify-center"
                style={{ backgroundColor: isDark ? "#B9BAA3" : "#F0E6D8" }}
              >
                <img
                  src="/CP Simple.png"
                  alt="Creative Pair Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <h2
                className="text-2xl font-bold tracking-wide"
                style={{ color: colors.light }}
              >
                Creative Pair
              </h2>
            </Link>

            <p
              className="mt-4 leading-relaxed max-w-sm text-sm"
              style={{ color: isDark ? "#B9BAA3" : "#0A100D" }}
            >
              Where creation meets innovation. We design and build digital
              experiences that elevate brands and drive results.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-5">
              {[FaLinkedinIn, FaInstagram, FaTwitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full transition-transform hover:scale-110"
                  style={{
                    backgroundColor: isDark ? "#902923" : "#c94e40",
                    color: isDark ? "#B9BAA3" : "#FDF8F2",
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="md:pl-6">
            <p
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: isDark ? "#B9BAA3" : "#0A100D" }}
            >
              Company
            </p>

            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors"
                    style={{ color: colors.light }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = isDark ? "#902923" : "#c94e40")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.color = colors.light)
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: isDark ? "#B9BAA3" : "#0A100D" }}
            >
              Contact Us
            </p>

            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt size={14} style={{ color: isDark ? "#902923" : "#c94e40" }} />
                <span style={{ color: colors.light }}>
                  Lahore, Pakistan
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaRegEnvelope size={14} style={{ color: isDark ? "#902923" : "#c94e40" }} />
                <a
                  href="mailto:hr.creativepair@gmail.com"
                  style={{ color: colors.light }}
                  onMouseEnter={(e) =>
                    (e.target.style.color = isDark ? "#902923" : "#c94e40")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color = colors.light)
                  }
                >
                  hr.creativepair@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FaPhoneAlt size={14} style={{ color: isDark ? "#902923" : "#c94e40" }} />
                <a
                  href="tel:+923274968541"
                  style={{ color: colors.light }}
                  onMouseEnter={(e) =>
                    (e.target.style.color = isDark ? "#902923" : "#c94e40")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.color = colors.light)
                  }
                >
                  +92 327 4968541
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-8 h-px"
          style={{ backgroundColor: isDark ? `${"#B9BAA3"}40` : `${"#0A100D"}20` }}
        />

        {/* Bottom */}
        <p
          className="text-center text-xs"
          style={{ color: isDark ? "#B9BAA3" : "#0A100D" }}
        >
          © {new Date().getFullYear()} Creative Pair. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;