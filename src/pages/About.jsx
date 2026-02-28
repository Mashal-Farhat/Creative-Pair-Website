import { motion } from "framer-motion";
import { Lightbulb, Target, Users, Zap, Globe, Award, Heart, Sparkles, Code, Shield, Clock, Handshake, BookOpen, Rocket } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Typewriter from "../components/Typewriter";

export default function About() {
  const [hoveredCard, setHoveredCard] = useState(null);

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
    <div className="min-h-screen overflow-hidden bg-brand-dark text-white font-body">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-accent/10 to-transparent" />
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full blur-3xl bg-accent/6" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl bg-accent/6" />

      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative py-16 md:py-20 overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          }}
        />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-heading"
          >
            About{" "}
            <span className="text-accent">Creative Pair</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-400 font-body"
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
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <div 
                  className="w-full h-80 md:h-96 bg-cover bg-center"
                  style={{ 
                    backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80)',
                    backgroundBlendMode: 'overlay',
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full flex items-center justify-center bg-accent">
                <Users className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold font-heading text-white">
                Our Story
              </h3>
              
              <p className="text-lg leading-relaxed text-gray-400 font-body">
                Founded by <span className="font-bold text-white">Mashal</span> and{" "}
                <span className="font-bold text-white">Ammal</span> with a shared passion 
                for technology and independent thinking, Creative Pair was created to move beyond conventional 
                career paths and transactional development.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-400 font-body">
                What began as a vision to build meaningful software has grown into a company focused on 
                ownership, craftsmanship, and thoughtful execution.
              </p>
              
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center bg-brand-dark border-accent text-white">
                    M
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center bg-brand-dark border-accent text-white">
                    A
                  </div>
                </div>
                <div>
                  <h4 className="font-bold font-heading text-white">
                    Mashal & Ammal
                  </h4>
                  <p className="text-sm text-gray-400 font-body">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-white">
              Our Philosophy
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-400 font-body">
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
                  boxShadow: '0 10px 30px var(--cp-glow)',
                  transition: { duration: 0.3 },
                }}
                className="rounded-2xl p-6 text-center bg-brand-card border border-white/10"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-accent text-white">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 font-heading text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-400 font-body">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-white">
              What Sets Us Apart
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              variants={itemVariants}
              className="rounded-3xl p-8 bg-brand-card border border-accent/30"
              style={{
                backgroundImage: 'linear-gradient(135deg, var(--cp-accent) 0%, var(--cp-accent2) 100%)',
              }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-white/20 text-white">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading text-white">
                    Founder-Led Execution
                  </h3>
                  <p className="text-base text-white/90 font-body">
                    Direct involvement from founders ensures quality, ownership, and thoughtful 
                    execution on every project. We believe the best results come from clarity, 
                    trust, and shared ownership of success.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-3xl p-8 bg-brand-card border border-white/10"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-accent text-white">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading text-white">
                    Full-Service Expertise
                  </h3>
                  <p className="text-base text-gray-400 font-body">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-white">
              Our Core Values
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-400 font-body">
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
                className={`p-6 rounded-2xl transition-all duration-500 bg-brand-card border border-white/10 ${
                  hoveredCard && hoveredCard !== index + 1 ? "opacity-70" : "opacity-100"
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent text-white">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white">
                    {value.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-400 font-body">
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
              { value: "50+", label: "Projects Delivered" },
              { value: "25+", label: "Happy Clients" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "<24h", label: "Average Response" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 20px var(--cp-glow)',
                  transition: { duration: 0.3 },
                }}
                className="p-6 rounded-2xl bg-brand-card border border-white/10"
              >
                <p className="text-3xl md:text-4xl font-bold mb-2 text-accent font-heading">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-400 font-body">
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