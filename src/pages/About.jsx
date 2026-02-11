import { motion } from "framer-motion";
import { Lightbulb, Target, Users, Zap, Globe, Award, Heart, Sparkles, Code, Shield, Clock, Handshake, BookOpen, Rocket } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Typewriter from "../components/Typewriter";

export default function About() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Color palette
  const colors = {
    dark: "#0A100D",
    light: "#B9BAA3",
    gray: "#D6D5C9",
    accent1: "#A22C29",
    accent2: "#902923",
    accent3: "#4a2523"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div 
      className="min-h-screen overflow-hidden"
      style={{ 
        backgroundColor: colors.dark,
        color: colors.light,
       fontFamily: "'Montserrat', sans-serif"
      }}
    >
      {/* Background Elements */}
      <div 
        className="absolute top-0 left-0 w-full h-64"
        style={{ background: `linear-gradient(180deg, ${colors.accent1}10, transparent)` }}
      />
      <div 
        className="absolute top-1/4 right-0 w-80 h-80 rounded-full blur-3xl"
        style={{ backgroundColor: colors.accent2, opacity: 0.06 }}
      />
      <div 
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl"
        style={{ backgroundColor: colors.accent1, opacity: 0.06 }}
      />

      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative py-16 md:py-20 overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          }}
        />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full"
            style={{ 
              backgroundColor: `${colors.accent1}20`,
              border: `1px solid ${colors.accent1}40`,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-4 h-4" style={{ color: colors.accent1 }} />
            </motion.div>
            <span className="text-sm font-medium" style={{ color: colors.accent1 }}>
              Where creation meets innovation
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{fontFamily: "'Montserrat', sans-serif" }}
          >
            About{" "}
            <span style={{ color: colors.accent1 }}>Creative Pair</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-8"
            style={{ 
              color: colors.gray,
              fontFamily: "'Montserrat', sans-serif"
            }}
          >
            A software house built on the belief that technology should be purposeful, reliable, 
            and designed to create long-term value.
          </motion.p>
        </div>
      </motion.section>

      {/* Brand Story Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="py-12 md:py-16 px-4 md:px-8 lg:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <motion.div
              variants={itemVariants}
              className="relative"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <div 
                className="rounded-3xl overflow-hidden shadow-2xl"
                style={{ 
                  border: `1px solid ${colors.gray}20`
                }}
              >
                <div 
                  className="w-full h-80 md:h-96 bg-cover bg-center"
                  style={{ 
                    backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80)',
                    backgroundBlendMode: 'overlay',
                  }}
                />
              </div>
              <div 
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full flex items-center justify-center"
                style={{ backgroundColor: colors.accent2 }}
              >
                <Users className="w-12 h-12" style={{ color: colors.light }} />
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Our Story
              </h3>
              
              <p 
                className="text-lg leading-relaxed"
                style={{ 
                  color: colors.gray,
                 fontFamily: "'Montserrat', sans-serif"
                }}
              >
                Founded by <span className="font-bold" style={{ color: colors.light }}>Mashal</span> and{" "}
                <span className="font-bold" style={{ color: colors.light }}>Ammal</span> with a shared passion 
                for technology and independent thinking, Creative Pair was created to move beyond conventional 
                career paths and transactional development.
              </p>
              
              <p 
                className="text-lg leading-relaxed"
                style={{ 
                  color: colors.gray,
                  fontFamily: "'Montserrat', sans-serif"
                }}
              >
                What began as a vision to build meaningful software has grown into a company focused on 
                ownership, craftsmanship, and thoughtful execution.
              </p>
              
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                  <div 
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center"
                    style={{ 
                      backgroundColor: colors.dark,
                      borderColor: colors.accent1,
                      color: colors.light
                    }}
                  >
                    M
                  </div>
                  <div 
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center"
                    style={{ 
                      backgroundColor: colors.dark,
                      borderColor: colors.accent1,
                      color: colors.light
                    }}
                  >
                    A
                  </div>
                </div>
                <div>
                  <h4 
                    className="font-bold"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Mashal & Ammal
                  </h4>
                  <p 
                    className="text-sm"
                    style={{ 
                      color: colors.gray,
                    fontFamily: "'Montserrat', sans-serif"
                    }}
                  >
                    Co-Founders, Creative Pair
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Philosophy Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="py-12 md:py-16 px-4 md:px-8 lg:px-12"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{fontFamily: "'Montserrat', sans-serif"}}
            >
              Our Philosophy
            </h2>
            <p 
              className="text-lg max-w-3xl mx-auto"
              style={{ 
                color: colors.gray,
               fontFamily: "'Montserrat', sans-serif"
              }}
            >
              We approach every project as a technology partner rather than a vendor.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Purposeful Technology",
                description: "Built for long-term value, not just short-term results"
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Clean Engineering",
                description: "Scalable, secure solutions aligned with real business goals"
              },
              {
                icon: <Handshake className="w-8 h-8" />,
                title: "Partnership Focus",
                description: "Transparent collaboration and shared ownership of success"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Quality Commitment",
                description: "Thoughtful execution over shortcuts and compromises"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: `0 10px 30px ${colors.accent1}20`,
                  transition: { duration: 0.3 },
                }}
                className="rounded-2xl p-6 text-center"
                style={{ 
                  backgroundColor: `${colors.dark}80`,
                  border: `1px solid ${colors.gray}20`,
                  backdropFilter: 'blur(8px)'
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: colors.accent1, color: colors.light }}
                >
                  {item.icon}
                </div>
                <h4 
                  className="text-xl font-bold mb-2"
                  style={{fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item.title}
                </h4>
                <p 
                  className="text-sm"
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
      </motion.section>

      {/* What Sets Us Apart */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="py-12 md:py-16 px-4 md:px-8 lg:px-12"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif"}}
            >
              What Sets Us Apart
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              variants={itemVariants}
              className="rounded-3xl p-8"
              style={{ 
                backgroundColor: colors.accent3,
                backgroundImage: `linear-gradient(135deg, ${colors.accent1}10 0%, ${colors.accent3} 100%)`,
                border: `1px solid ${colors.accent2}`
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: colors.accent2, color: colors.light }}
                >
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <h3 
                    className="text-2xl font-bold mb-2"
                    style={{fontFamily: "'Montserrat', sans-serif"}}
                  >
                    Founder-Led Execution
                  </h3>
                  <p 
                    className="text-base"
                    style={{ 
                      color: colors.gray,
                     fontFamily: "'Montserrat', sans-serif"
                    }}
                  >
                    Direct involvement from founders ensures quality, ownership, and thoughtful 
                    execution on every project. We believe the best results come from clarity, 
                    trust, and shared ownership of success.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-3xl p-8"
              style={{ 
                backgroundColor: `${colors.dark}80`,
                border: `1px solid ${colors.gray}20`,
                backdropFilter: 'blur(8px)'
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: colors.accent1, color: colors.light }}
                >
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 
                    className="text-2xl font-bold mb-2"
                    style={{fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Full-Service Expertise
                  </h3>
                  <p 
                    className="text-base"
                    style={{ 
                      color: colors.gray,
                      fontFamily: "'Montserrat', sans-serif"
                    }}
                  >
                    We specialize in custom software development, web and application engineering, 
                    scalable systems, and technical consulting. From early-stage concepts to mature 
                    platforms, we transform ideas into dependable digital products.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Core Values */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="py-12 md:py-16 px-4 md:px-8 lg:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Our Core Values
            </h2>
            <p 
              className="text-lg max-w-3xl mx-auto"
              style={{ 
                color: colors.gray,
                fontFamily: "'Montserrat', sans-serif"
              }}
            >
              Built for the long run, we continue to evolve alongside technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                title: "Long-Term Value",
                description: "Creating impactful software and meaningful partnerships"
              },
              {
                icon: <Lightbulb className="w-6 h-6" />,
                title: "Strategic Insight",
                description: "Understanding the 'why' behind each challenge"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Transparent Collaboration",
                description: "Working closely with clients through every stage"
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Performance & Usability",
                description: "Balancing technical excellence with user experience"
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Future Growth",
                description: "Designing solutions that scale with your business"
              },
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Digital Solutions That Matter",
                description: "Focused on creating meaningful impact"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                onHoverStart={() => setHoveredCard(index + 1)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`p-6 rounded-2xl transition-all duration-500 ${
                  hoveredCard && hoveredCard !== index + 1 ? "opacity-70" : "opacity-100"
                }`}
                style={{ 
                  backgroundColor: `${colors.dark}80`,
                  border: `1px solid ${colors.gray}20`,
                  backdropFilter: 'blur(8px)'
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: colors.accent1, color: colors.light }}
                  >
                    {value.icon}
                  </div>
                  <h3 
                    className="text-xl font-bold"
                    style={{ fontFamily: "'Montserrat', sans-serif"}}
                  >
                    {value.title}
                  </h3>
                </div>
                <p 
                  className="text-sm"
                  style={{ 
                    color: colors.gray,
                    fontFamily: "'Montserrat', sans-serif"
                  }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="py-12 md:py-16 px-4 md:px-8 lg:px-12"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "50+", label: "Projects Delivered", color: colors.accent1 },
              { value: "25+", label: "Happy Clients", color: colors.accent2 },
              { value: "100%", label: "Client Satisfaction", color: colors.accent1 },
              { value: "<24h", label: "Average Response", color: colors.accent2 },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 10px 20px ${colors.accent1}20`,
                  transition: { duration: 0.3 },
                }}
                className="p-6 rounded-2xl"
                style={{ 
                  backgroundColor: `${colors.dark}80`,
                  border: `1px solid ${colors.gray}20`,
                  backdropFilter: 'blur(8px)'
                }}
              >
                <p 
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ 
                    color: stat.color,
                    fontFamily: "'Montserrat', sans-serif"
                  }}
                >
                  {stat.value}
                </p>
                <p 
                  className="text-sm"
                  style={{ 
                    color: colors.gray,
                    fontFamily: "'Montserrat', sans-serif"
                  }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}