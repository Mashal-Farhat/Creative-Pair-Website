import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Sparkles, Target, Eye, Users, Code, Shield, Zap } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("design");
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  // Color palette
  const colors = {
    dark: "#0A100D",
    light: "#B9BAA3",
    gray: "#D6D5C9",
    accent1: "#A22C29",
    accent2: "#902923",
    accent3: "#4a2523"
  };

  // Video sources for each tab
  const videoSources = {
    design: "/Design.mp4",
    web: "/Web.mp4",
    app: "public/App.mp4"
  };

  const tabs = [
    { id: "design", label: "Design" },
    { id: "web", label: "Web Development" },
    { id: "app", label: "App Development" }
  ];

  // Technology partner logos
  const techPartners = [
    { name: "Git", logo: "https://malindtech.com/wp-content/uploads/2025/12/Git-Logo.webp" },
    { name: "Semrush", logo: "https://malindtech.com/wp-content/uploads/2025/12/Semrush-Logo.webp" },
    { name: "Elementor", logo: "https://malindtech.com/wp-content/uploads/2025/12/Elemonter.webp" },
    { name: "Namecheap", logo: "https://malindtech.com/wp-content/uploads/2025/12/Namecheap.webp" },
    { name: "Vercel", logo: "https://malindtech.com/wp-content/uploads/2025/12/Vercel.png" },
    { name: "Railway", logo: "https://malindtech.com/wp-content/uploads/2025/12/Railway.png" },
    { name: "Render", logo: "https://malindtech.com/wp-content/uploads/2025/12/Render.webp" },
    { name: "Microsoft Azure", logo: "https://malindtech.com/wp-content/uploads/2025/12/Microsoft-Azure.webp" },
    { name: "Hostinger", logo: "https://malindtech.com/wp-content/uploads/2025/12/Hostinger.webp" }
  ];

  // Why Choose items
  const whyChooseItems = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Founder-Led Execution",
      description: "Direct involvement from founders ensures quality, ownership, and thoughtful execution on every project."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Engineering",
      description: "We combine strategic insight with clean engineering to deliver scalable, secure solutions."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Technology Partnership",
      description: "We approach every project as a partner rather than a vendor, focused on long-term value."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Purposeful Technology",
      description: "We build technology that is purposeful, reliable, and designed to create meaningful impact."
    }
  ];

  // Handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // Handle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Play video on component mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <div className="min-h-screen overflow-hidden" style={{ backgroundColor: colors.dark, fontFamily: "'Montserrat', sans-serif" }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background Container */}
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full flex items-center justify-center px-8 md:px-10 lg:px-20 py-8 md:py-12 lg:py-16">
            <div 
              className="relative w-full h-full max-h-[85vh] overflow-hidden shadow-2xl"
              style={{ 
                borderRadius: "2rem",
                border: `1px solid ${colors.gray}20`
              }}
            >
              <video
                ref={videoRef}
                key={activeTab}
                className="absolute inset-0 w-full h-full object-cover blur-sm md:blur"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                style={{ borderRadius: "2rem" }}
              >
                <source src={videoSources[activeTab]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video Overlay Gradient */}
              <div 
                className="absolute inset-0"
                style={{ 
                  background: `linear-gradient(to top, ${colors.dark}80 0%, ${colors.dark}30 50%, transparent 100%)`,
                  borderRadius: "2rem"
                }}
              />
            </div>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-3 md:px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {/* Left Column - Logo */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 lg:mb-0"
              >
                <div className="flex items-center">
                  <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center rounded-full mr-4 md:mr-5"
                    style={{ backgroundColor: colors.gray }}
                  >
                    <img
                      src="/CP Simple.png"
                      alt="Creative Pair Logo"
                      className="w-full h-full object-contain p-3"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Center Column - Main Content */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight"
                  style={{ 
                    color: colors.light,
                    fontFamily: "'Montserrat', sans-serif"
                  }}
                >
                  CREATIVE SOLUTIONS
                  <br />
                  <span 
                    style={{ 
                      color: colors.accent1,
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 700
                    }}
                  >
                    FOR DIGITAL ERA
                  </span>
                </h2>
                <p 
                  className="text-lg mb-6 max-w-xl mx-auto lg:mx-0"
                  style={{ 
                    color: colors.gray,
                    fontFamily: "'Montserrat', sans-serif"
                  }}
                >
                  Created with precision, designed for comfort and style in the digital world.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <a href="/projects" className="no-underline">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                      style={{ 
                        backgroundColor: colors.accent1,
                        fontFamily: "'Montserrat', sans-serif"
                      }}
                    >
                      <Sparkles className="w-4 h-4" />
                      Explore Our Work →
                    </motion.button>
                  </a>
                  
                  <a href="/contact" className="no-underline">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 font-semibold rounded-full hover:shadow-xl transition-all duration-300"
                      style={{ 
                        backgroundColor: `${colors.gray}20`,
                        color: colors.light,
                        border: `1px solid ${colors.gray}40`,
                        fontFamily: "'Montserrat', sans-serif"
                      }}
                    >
                      Contact Us
                    </motion.button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Horizontal Tabs Navigation - Top Right */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 z-20"
        >
          <div 
            className="flex gap-1 rounded-xl p-1"
            style={{ 
              backgroundColor: `${colors.dark}80`,
              backdropFilter: "blur(12px)",
              border: `1px solid ${colors.gray}20`
            }}
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-300 ${activeTab === tab.id
                    ? "text-white"
                    : "hover:text-white"
                  }`}
                style={{ 
                  fontFamily: "'Montserrat', sans-serif",
                  backgroundColor: activeTab === tab.id ? colors.accent2 : "transparent",
                  color: activeTab === tab.id ? colors.light : colors.gray
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: activeTab === tab.id ? colors.accent2 : `${colors.accent1}20`
                }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Our Identity & Mission/Vision Section */}
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center"
              style={{ 
                color: colors.light,
                fontFamily: "'Montserrat', sans-serif"
              }}
            >
              Our Identity
            </h2>
            
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Left side - Image */}
              <div className="w-full lg:w-2/5">
                <div 
                  className="rounded-2xl overflow-hidden shadow-2xl"
                  style={{ 
                    border: `1px solid ${colors.gray}20`
                  }}
                >
                  <div 
                    className="w-full h-64 md:h-80 lg:h-96 bg-cover bg-center"
                    style={{ 
                      backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
                      backgroundBlendMode: 'overlay',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <div className="text-center p-6 bg-black/50 rounded-xl backdrop-blur-sm border"
                      style={{ borderColor: `${colors.gray}40` }}
                    >
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-6 flex items-center justify-center"
                        style={{ backgroundColor: colors.accent2 }}
                      >
                        <Users className="w-12 h-12 md:w-16 md:h-16" style={{ color: colors.light }} />
                      </div>
                      <h3 
                        className="text-2xl md:text-3xl font-bold mb-2"
                        style={{ color: colors.light, fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Founders' Vision
                      </h3>
                      <p 
                        className="text-base md:text-lg"
                        style={{ color: colors.gray,fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Mashal & Ammal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Content */}
              <div className="w-full lg:w-3/5">
                <p 
                  className="text-xl md:text-2xl leading-relaxed mb-8"
                  style={{ 
                    color: colors.gray,
                    fontFamily: "'Montserrat', sans-serif"
                  }}
                >
                  Creative Pair is a software house built on the belief that technology should be purposeful, reliable, and designed to create long-term value. We help businesses navigate complexity through well-engineered digital solutions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Mission */}
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Target className="w-8 h-8" style={{ color: colors.accent1 }} />
                    </div>
                    <div>
                      <h3 
                        className="text-xl md:text-2xl font-bold mb-2"
                        style={{ 
                          color: colors.light,
                          fontFamily: "'Montserrat', sans-serif"
                        }}
                      >
                        Mission
                      </h3>
                      <p 
                        className="text-base md:text-lg"
                        style={{ 
                          color: colors.gray,
                          fontFamily: "'Montserrat', sans-serif"
                        }}
                      >
                        Transform ideas into dependable digital products through clean engineering and strategic insight.
                      </p>
                    </div>
                  </div>
                  
                  {/* Vision */}
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Eye className="w-8 h-8" style={{ color: colors.accent1 }} />
                    </div>
                    <div>
                      <h3 
                        className="text-xl md:text-2xl font-bold mb-2"
                        style={{ 
                          color: colors.light,
                          fontFamily: "'Montserrat', sans-serif"
                        }}
                      >
                        Vision
                      </h3>
                      <p 
                        className="text-base md:text-lg"
                        style={{ 
                          color: colors.gray,
                          fontFamily: "'Montserrat', sans-serif"
                        }}
                      >
                        Be the trusted technology partner for businesses seeking meaningful, scalable solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technology Partners Ribbon/Marquee */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="mb-12"
>
  <div 
    className="relative rounded-2xl p-6 md:p-8 lg:p-10 overflow-hidden"
    style={{ 
      backgroundColor: colors.dark,
    }}
  >
    <div className="relative z-10">
      <h2 
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center"
        style={{ 
          color: colors.light,
          fontFamily: "'Montserrat', sans-serif"
        }}
      >
        Trusted Partners in Our Success
      </h2>
      
      {/* Marquee Container */}
      <div className="relative overflow-hidden py-4">
        {/* Marquee Track - Faster animation */}
        <div 
          className="flex"
          style={{ 
            animation: 'marquee 40s linear infinite'
          }}
        >
          {/* First Set */}
          <div className="flex shrink-0 gap-6 md:gap-8 px-4">
            {techPartners.map((partner, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: `${colors.dark}80`,
                  minWidth: '120px',
                  height: '70px'
                }}
              >
                <div className="relative max-h-10 max-w-20">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="object-contain filter brightness-0 invert"
                    style={{ 
                      filter: 'brightness(0) invert(1)',
                      height: '40px',
                      width: 'auto'
                    }}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/100x40/0A100D/B9BAA3?text=${partner.name}`;
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Duplicate Set for seamless looping */}
          <div className="flex shrink-0 gap-6 md:gap-8 px-4">
            {techPartners.map((partner, index) => (
              <div 
                key={`dup-${index}`}
                className="flex items-center justify-center p-3 rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: `${colors.dark}80`,
                  minWidth: '120px',
                  height: '70px'
                }}
              >
                <div className="relative max-h-10 max-w-20">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="object-contain filter brightness-0 invert"
                    style={{ 
                      filter: 'brightness(0) invert(1)',
                      height: '40px',
                      width: 'auto'
                    }}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/100x40/0A100D/B9BAA3?text=${partner.name}`;
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Gradient Overlays */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-12 z-10"
          style={{ 
            background: `linear-gradient(to right, ${colors.dark}, transparent)`
          }}
        />
        <div 
          className="absolute right-0 top-0 bottom-0 w-12 z-10"
          style={{ 
            background: `linear-gradient(to left, ${colors.dark}, transparent)`
          }}
        />
      </div>
    </div>
  </div>
</motion.div>

          {/* Why Choose Creative Pair */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center"
              style={{ 
                color: colors.light,
                fontFamily: "'Montserrat', sans-serif"
              }}
            >
              Why Choose Creative Pair
            </h2>
            
            <div 
              className="rounded-2xl p-6 md:p-8 lg:p-10"
              style={{ 
                backgroundColor: colors.accent3,
                backgroundImage: `linear-gradient(135deg, ${colors.accent1} 0%, ${colors.accent3} 100%)`,
                border: `1px solid ${colors.accent2}`
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {whyChooseItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="rounded-xl p-5 text-center"
                    style={{ 
                      backgroundColor: `${colors.dark}40`,
                      border: `1px solid ${colors.gray}10`
                    }}
                    whileHover={{ 
                      scale: 1.03,
                      backgroundColor: `${colors.dark}80`
                    }}
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4"
                      style={{ backgroundColor: colors.accent1 }}
                    >
                      <div style={{ color: colors.light }}>
                        {item.icon}
                      </div>
                    </div>
                    <h4 
                      className="text-xl font-bold mb-3"
                      style={{ 
                        color: colors.light,
                        fontFamily: "'Montserrat', sans-serif"
                      }}
                    >
                      {item.title}
                    </h4>
                    <p 
                      className="text-sm md:text-base"
                      style={{ 
                        color: colors.gray,
                        fontFamily: "'Montserrat', sans-serif"
                      }}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Font imports and custom animations */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700;800;900&family=Nunito+Sans:wght@300;400;600;700;800&display=swap');
        
        /* Mobile responsive video corners */
        @media (max-width: 768px) {
          video, [style*="border-radius"] {
            border-radius: 1.5rem !important;
          }
        }
        
        @media (max-width: 480px) {
          video, [style*="border-radius"] {
            border-radius: 1rem !important;
          }
        }
        
        /* Custom blur intensity if needed */
        .blur-sm {
          filter: blur(4px);
        }
        
        .blur {
          filter: blur(8px);
        }
        
        @media (max-width: 768px) {
          .blur-sm {
            filter: blur(2px);
          }
          
          .blur {
            filter: blur(4px);
          }
        }
        
        /* Marquee Animation */
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        /* Pause animation on hover */
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        
        /* Smooth transitions for logo containers */
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 300ms;
        }
      `}</style>
    </div>
  );
}