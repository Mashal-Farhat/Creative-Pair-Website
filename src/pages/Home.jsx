import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Target, Eye, Users, Code, Shield, Zap } from "lucide-react";
import useTheme from "../hooks/useTheme";

// ─── What We Do Data & Component (outside Home) ───────────────────────────────

// Replace your existing whatWeDoServices array and WhatWeDoCarousel component with this

const whatWeDoServices = [
  {
    number: "01",
    label: "UI/UX Design",
    shortDesc: "We craft interfaces that feel inevitable — clean, purposeful, and deeply human. Every pixel earns its place.",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "02",
    label: "Web Development",
    shortDesc: "From landing pages to full-stack platforms — we build fast, scalable web products that hold up under pressure.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "03",
    label: "App Development",
    shortDesc: "Native-quality cross-platform apps built with React Native. Smooth, offline-capable, and store-ready.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "04",
    label: "Backend & Cloud",
    shortDesc: "Robust APIs, secure databases, and cloud infrastructure built to scale without breaking a sweat.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "05",
    label: "Consulting",
    shortDesc: "We sit with you, understand the problem, and chart the clearest path — strategy that turns complexity into clarity.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=90",
  },
];

function WhatWeDoCarousel({ colors, isDark }) {
  const [hovered, setHovered] = useState(null);
  const active = hovered !== null ? hovered : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex rounded-2xl overflow-hidden"
      style={{
        height: "520px",
        border: `1px solid ${isDark ? "#B9BAA3" : "#0A100D"}12`,
      }}
    >
      {/* ── LEFT 30%: Service List ── */}
      <div
        className="flex flex-col justify-between relative z-10 shrink-0"
        style={{
          width: "30%",
          backgroundColor: isDark ? "#0e1410" : "#F5EFE8",
          borderRight: `1px solid ${isDark ? "#B9BAA3" : "#0A100D"}10`,
        }}
      >
        {/* Top label */}
        <div
          className="px-6 pt-7 pb-4"
          style={{
            borderBottom: `1px solid ${isDark ? "#B9BAA3" : "#0A100D"}10`,
          }}
        >
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: isDark ? "#902923" : "#973e34", fontFamily: "'Montserrat', sans-serif" }}
          >
            Our Services
          </span>
        </div>

        {/* Service rows */}
        <div className="flex flex-col flex-1">
          {whatWeDoServices.map((service, index) => {
            const isActive = active === index;
            return (
              <motion.div
                key={service.number}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="relative flex items-center gap-3 px-6 cursor-pointer flex-1"
                style={{
                  borderBottom:
                    index < whatWeDoServices.length - 1
                      ? `1px solid ${isDark ? "#B9BAA3" : "#0A100D"}08`
                      : "none",
                  backgroundColor: isActive
                    ? isDark ? "#902923" + "18" : "#973e34" + "12"
                    : "transparent",
                  transition: "background-color 0.3s ease",
                }}
                animate={{ x: isActive ? 4 : 0 }}
                transition={{ duration: 0.25 }}
              >
                {/* Active bar */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full"
                  style={{ backgroundColor: isDark ? "#902923" : "#973e34" }}
                  animate={{ opacity: isActive ? 1 : 0, scaleY: isActive ? 1 : 0.3 }}
                  transition={{ duration: 0.25 }}
                />

                {/* Number */}
                <span
                  className="text-xs font-black shrink-0"
                  style={{
                    color: isActive
                      ? isDark ? "#902923" : "#973e34"
                      : isDark ? "#B9BAA340" : "#0A100D30",
                    fontFamily: "'Montserrat', sans-serif",
                    transition: "color 0.3s ease",
                  }}
                >
                  {service.number}
                </span>

                {/* Label */}
                <span
                  className="text-sm font-semibold leading-tight"
                  style={{
                    color: isActive
                      ? isDark ? "#B9BAA3" : "#0A100D"
                      : isDark ? "#B9BAA370" : "#0A100D60",
                    fontFamily: "'Montserrat', sans-serif",
                    transition: "color 0.3s ease",
                  }}
                >
                  {service.label}
                </span>

                {/* Arrow */}
                <motion.div
                  className="ml-auto shrink-0"
                  animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -6 }}
                  transition={{ duration: 0.25 }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={isDark ? "#902923" : "#973e34"}
                    strokeWidth="2.5"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className="px-6 py-5"
          style={{ borderTop: `1px solid ${isDark ? "#B9BAA3" : "#0A100D"}10` }}
        >
          <a href="/services" className="no-underline">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold"
              style={{
                backgroundColor: isDark ? "#902923" : "#973e34",
                color: "#fff",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              View All Services
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.div>
          </a>
        </div>
      </div>

      {/* ── RIGHT 70%: Image + Description ── */}
      <div className="relative flex-1 overflow-hidden">
        {/* Images — crossfade on hover */}
        {whatWeDoServices.map((service, index) => (
          <motion.div
            key={service.number}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${service.image})` }}
            animate={{ opacity: active === index ? 1 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        ))}

        {/* Permanent dark gradient from bottom */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to top,
              ${isDark ? "#0A100D" : "#0A100D"}F0 0%,
              ${isDark ? "#0A100D" : "#0A100D"}80 35%,
              ${isDark ? "#0A100D" : "#0A100D"}20 65%,
              transparent 100%
            )`,
          }}
        />

        {/* Left edge blend into the list panel */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16"
          style={{
            background: `linear-gradient(to right, ${isDark ? "#0e1410" : "#F5EFE8"}, transparent)`,
          }}
        />

        {/* Content area — bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Service number */}
              <span
                className="block text-7xl font-black leading-none mb-2 select-none"
                style={{
                  color: isDark ? "#902923" : "#c94e40",
                  fontFamily: "'Montserrat', sans-serif",
                  opacity: 0.9,
                }}
              >
                {whatWeDoServices[active].number}
              </span>

              {/* Service name */}
              <h3
                className="text-2xl md:text-3xl font-bold mb-3"
                style={{
                  color: "#FDF8F2",
                  fontFamily: "'Montserrat', sans-serif",
                  lineHeight: 1.2,
                }}
              >
                {whatWeDoServices[active].label}
              </h3>

              {/* Description */}
              <p
                className="text-sm md:text-base max-w-md leading-relaxed"
                style={{
                  color: "rgba(253,248,242,0.72)",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                {whatWeDoServices[active].shortDesc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Top-right: pagination dots */}
        <div className="absolute top-6 right-6 flex gap-1.5">
          {whatWeDoServices.map((_, index) => (
            <motion.div
              key={index}
              className="rounded-full cursor-pointer"
              style={{ backgroundColor: active === index ? (isDark ? "#902923" : "#c94e40") : "rgba(255,255,255,0.25)" }}
              animate={{ width: active === index ? 20 : 6, height: 6 }}
              transition={{ duration: 0.3 }}
              onClick={() => setHovered(index === hovered ? null : index)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
// ─── Main Home Component ───────────────────────────────────────────────────────

export default function Home() {
  const [activeTab, setActiveTab] = useState("design");
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);
  const isDark = useTheme();

  const colors = isDark ? {
    dark: "#0A100D",
    light: "#B9BAA3",
    accent2: "#902923",
    accent3: "#4a2523"
  } : {
    dark: "#FDF8F2",
    light: "#0A100D",
    accent2: "#973e34",
    accent3: "#F0E6D8"
  };

  const videoSources = {
    design: "/Design.mp4",
    web: "/Web.mp4",
    app: "/App.mp4"
  };

  const tabs = [
    { id: "design", label: "Design" },
    { id: "web", label: "Web Development" },
    { id: "app", label: "App Development" }
  ];

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

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <div className="min-h-screen overflow-hidden" style={{ backgroundColor: colors.dark, fontFamily: "'Montserrat', sans-serif" }}>

      {/* ── Hero Section ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full flex items-center justify-center px-8 md:px-10 lg:px-20 py-8 md:py-12 lg:py-16">
            <div
              className="relative w-full h-full max-h-[85vh] overflow-hidden shadow-2xl"
              style={{
                borderRadius: "2rem",
                border: `1px solid ${isDark ? '#B9BAA3' : '#0A100D'}20`
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

        <div className="relative z-10 w-full max-w-6xl mx-auto px-3 md:px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {/* Logo */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 lg:mb-0"
              >
                <div className="flex items-center">
                  <div
                    className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center rounded-full mr-4 md:mr-5"
                    style={{ backgroundColor: isDark ? '#B9BAA3' : '#F0E6D8' }}
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

            {/* Main Content */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight"
                  style={{ color: colors.light, fontFamily: "'Montserrat', sans-serif" }}
                >
                  CREATIVE SOLUTIONS
                  <br />
                  <span style={{ color: isDark ? '#902923' : '#973e34', fontWeight: 700 }}>
                    FOR DIGITAL ERA
                  </span>
                </h2>
                <p
                  className="text-lg mb-6 max-w-xl mx-auto lg:mx-0"
                  style={{ color: isDark ? '#B9BAA3' : '#0A100D', fontFamily: "'Montserrat', sans-serif" }}
                >
                  Created with precision, designed for comfort and style in the digital world.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <a href="/projects" className="no-underline">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                      style={{ backgroundColor: isDark ? '#902923' : '#973e34', fontFamily: "'Montserrat', sans-serif" }}
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
                        backgroundColor: isDark ? '#4a252320' : '#0A100D10',
                        color: colors.light,
                        border: `1px solid ${isDark ? '#B9BAA3' : '#0A100D'}40`,
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

        {/* Tabs */}
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
              border: `1px solid ${isDark ? '#B9BAA3' : '#0A100D'}20`
            }}
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className="px-4 py-2 text-xs font-medium rounded-lg transition-all duration-300"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  backgroundColor: activeTab === tab.id ? (isDark ? '#902923' : '#973e34') : "transparent",
                  color: activeTab === tab.id ? (isDark ? '#B9BAA3' : '#FDF8F2') : (isDark ? '#B9BAA3' : '#0A100D')
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: activeTab === tab.id
                    ? (isDark ? '#902923' : '#973e34')
                    : `${isDark ? '#902923' : '#973e34'}20`
                }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Our Identity & Mission/Vision ── */}
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
              style={{ color: colors.light, fontFamily: "'Montserrat', sans-serif" }}
            >
              Our Identity
            </h2>

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Image */}
              <div className="w-full lg:w-2/5">
                <div
                  className="rounded-2xl overflow-hidden shadow-2xl"
                  style={{ border: `1px solid ${isDark ? '#B9BAA3' : '#0A100D'}20` }}
                >
                  <div
                    className="w-full h-64 md:h-80 lg:h-96 bg-cover bg-center"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
                      backgroundBlendMode: 'overlay',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <div
                      className="text-center p-6 rounded-xl backdrop-blur-sm border"
                      style={{
                        backgroundColor: isDark ? '#0A100DCC' : '#fdf8f270',
                        borderColor: `${isDark ? '#B9BAA3' : '#0A100D'}40`,
                        boxShadow: isDark ? 'none' : '0 4px 12px rgba(0,0,0,0.05)'
                      }}
                    >
                      <div
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-6 flex items-center justify-center"
                        style={{ backgroundColor: isDark ? '#902923' : '#973e34' }}
                      >
                        <Users className="w-12 h-12 md:w-16 md:h-16" style={{ color: isDark ? '#B9BAA3' : '#FDF8F2' }} />
                      </div>
                      <h3
                        className="text-2xl md:text-3xl font-bold mb-2"
                        style={{ color: isDark ? '#B9BAA3' : '#0A100D', fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Founders' Vision
                      </h3>
                      <p
                        className="text-base md:text-lg"
                        style={{ color: isDark ? '#B9BAA3' : '#0A100D', fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Mashal & Ammal
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-3/5">
                <p
                  className="text-xl md:text-2xl leading-relaxed mb-8"
                  style={{ color: isDark ? '#B9BAA3' : '#0A100D', fontFamily: "'Montserrat', sans-serif" }}
                >
                  Creative Pair is a software house built on the belief that technology should be purposeful, reliable, and designed to create long-term value. We help businesses navigate complexity through well-engineered digital solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Target className="w-8 h-8" style={{ color: isDark ? '#902923' : '#973e34' }} />
                    </div>
                    <div>
                      <h3
                        className="text-xl md:text-2xl font-bold mb-2"
                        style={{ color: colors.light, fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Mission
                      </h3>
                      <p
                        className="text-base md:text-lg"
                        style={{ color: isDark ? '#B9BAA3' : '#0A100D', fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Transform ideas into dependable digital products through clean engineering and strategic insight.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Eye className="w-8 h-8" style={{ color: isDark ? '#902923' : '#973e34' }} />
                    </div>
                    <div>
                      <h3
                        className="text-xl md:text-2xl font-bold mb-2"
                        style={{ color: colors.light, fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Vision
                      </h3>
                      <p
                        className="text-base md:text-lg"
                        style={{ color: isDark ? '#B9BAA3' : '#0A100D', fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Be the trusted technology partner for businesses seeking meaningful, scalable solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Trusted Partners Marquee ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div
              className="relative rounded-2xl p-6 md:p-8 lg:p-10 overflow-hidden"
              style={{ backgroundColor: colors.dark }}
            >
              <div className="relative z-10">
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center"
                  style={{ color: colors.light, fontFamily: "'Montserrat', sans-serif" }}
                >
                  Trusted Partners in Our Success
                </h2>

                <div className="relative overflow-hidden py-4">
                  <div
                    className="flex"
                    style={{ animation: 'marquee 40s linear infinite' }}
                  >
                    {/* First set */}
                    <div className="flex shrink-0 gap-6 md:gap-8 px-4">
                      {techPartners.map((partner, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center"
                          style={{ minWidth: '120px', height: '70px' }}
                        >
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="object-contain"
                            style={{
                              filter: isDark ? 'brightness(0) invert(1)' : 'none',
                              height: '40px',
                              width: 'auto'
                            }}
                            onError={(e) => {
                              e.target.src = `https://via.placeholder.com/100x40?text=${partner.name}`;
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    {/* Duplicate set */}
                    <div className="flex shrink-0 gap-6 md:gap-8 px-4">
                      {techPartners.map((partner, index) => (
                        <div
                          key={`dup-${index}`}
                          className="flex items-center justify-center"
                          style={{ minWidth: '120px', height: '70px' }}
                        >
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="object-contain"
                            style={{
                              filter: isDark ? 'brightness(0) invert(1)' : 'none',
                              height: '40px',
                              width: 'auto'
                            }}
                            onError={(e) => {
                              e.target.src = `https://via.placeholder.com/100x40?text=${partner.name}`;
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className="absolute left-0 top-0 bottom-0 w-12 z-10"
                    style={{ background: `linear-gradient(to right, ${colors.dark}, transparent)` }}
                  />
                  <div
                    className="absolute right-0 top-0 bottom-0 w-12 z-10"
                    style={{ background: `linear-gradient(to left, ${colors.dark}, transparent)` }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── What We Do ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center"
              style={{ color: colors.light, fontFamily: "'Montserrat', sans-serif" }}
            >
              What We Do
            </h2>
            <WhatWeDoCarousel colors={colors} isDark={isDark} />
          </motion.div>

          {/* ── Why Choose Creative Pair ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center"
              style={{ color: colors.light, fontFamily: "'Montserrat', sans-serif" }}
            >
              Why Choose Creative Pair
            </h2>

            <div
              className="rounded-2xl p-6 md:p-8 lg:p-10"
              style={{
                backgroundColor: colors.accent3,
                backgroundImage: isDark
                  ? `linear-gradient(135deg, #902923 0%, ${colors.accent3} 100%)`
                  : 'none',
                border: `1px solid ${isDark ? '#902923' : '#973e34'}`
              }}
F            >
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
                      border: `1px solid ${isDark ? '#B9BAA3' : '#0A100D'}10`
                    }}
                    whileHover={{
                      scale: 1.03,
                      backgroundColor: `${colors.dark}80`
                    }}
                  >
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4"
                      style={{ backgroundColor: isDark ? '#902923' : '#c94e40' }}
                    >
                      <div style={{ color: colors.light }}>{item.icon}</div>
                    </div>
                    <h4
                      className="text-xl font-bold mb-3"
                      style={{ color: colors.light, fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="text-sm md:text-base"
                      style={{ color: isDark ? '#B9BAA3' : '#0A100D', fontFamily: "'Montserrat', sans-serif" }}
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

      {/* ── Global Styles ── */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700;800;900&family=Nunito+Sans:wght@300;400;600;700;800&display=swap');

        @media (max-width: 768px) {
          video, [style*="border-radius"] { border-radius: 1.5rem !important; }
        }
        @media (max-width: 480px) {
          video, [style*="border-radius"] { border-radius: 1rem !important; }
        }

        .blur-sm { filter: blur(4px); }
        .blur    { filter: blur(8px); }

        @media (max-width: 768px) {
          .blur-sm { filter: blur(2px); }
          .blur    { filter: blur(4px); }
        }

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 300ms;
        }
      `}</style>
    </div>
  );
}