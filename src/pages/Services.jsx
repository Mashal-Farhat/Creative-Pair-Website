import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Smartphone,
  Layout,
  Globe,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Clock,
  Users,
  Star,
  Circle,
  Target,
  Rocket,
  Cpu,
  Server,
  Cloud,
  Database,
  Terminal,
  Paintbrush,
  Smartphone as Mobile,
  Globe as Web,
  Users as Team,
  CheckCircle
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const canvasRef = useRef(null);

  // Color palette
  const colors = {
    dark: "#0A100D",
    light: "#B9BAA3",
    gray: "#D6D5C9",
    accent1: "#A22C29",
    accent2: "#902923",
    accent3: "#4a2523"
  };

  // Particle background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system
    const particles = [];
    const particleCount = 40;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        const base = Math.random() > 0.5 ? colors.accent1 : colors.accent2;
        this.color = base + '20'; // 20% opacity
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            ctx.beginPath();
            ctx.strokeStyle = colors.accent1 + '15'; // 15% opacity
            ctx.lineWidth = 0.3;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [colors]);

  const services = [
    {
      id: 1,
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and web applications using modern technologies. We build responsive, fast, and SEO-friendly solutions that drive results.",
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Cross-browser Compatibility"],
      delay: 0.1,
    },
    {
      id: 2,
      icon: <Mobile className="w-8 h-8" />,
      title: "App Development",
      description: "Cross-platform mobile applications developed with cutting-edge technologies for seamless performance on all devices.",
      technologies: ["React Native", "Flutter", "iOS", "Android"],
      features: ["Native Performance", "Offline Capability", "Push Notifications", "Store Deployment"],
      delay: 0.2,
    },
    {
      id: 3,
      icon: <Paintbrush className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Intuitive user interfaces and experiences for web, mobile, and games that prioritize usability and aesthetic appeal.",
      technologies: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      features: ["User Personas", "Journey Mapping", "Usability Testing", "Interaction Design"],
      delay: 0.3,
    },
    {
      id: 4,
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Robust server-side solutions with scalable architecture and secure data management.",
      technologies: ["Node.js", "Python", "MongoDB", "PostgreSQL", "AWS"],
      features: ["API Development", "Database Design", "Cloud Deployment", "Security"],
      delay: 0.4,
    },
    {
      id: 5,
      icon: <Terminal className="w-8 h-8" />,
      title: "DevOps & Cloud",
      description: "Streamlined deployment, monitoring, and infrastructure management for optimal performance.",
      technologies: ["Docker", "Kubernetes", "AWS", "CI/CD", "Monitoring"],
      features: ["Automated Deployment", "Infrastructure as Code", "Performance Monitoring", "Scalability"],
      delay: 0.5,
    },
    {
      id: 6,
      icon: <Team className="w-8 h-8" />,
      title: "Consulting & Strategy",
      description: "Expert guidance on technology strategy, digital transformation, and product development.",
      technologies: ["Tech Stack Selection", "Architecture Planning", "Team Building", "Project Management"],
      features: ["Technical Audits", "Roadmap Planning", "Team Training", "Agile Implementation"],
      delay: 0.6,
    },
  ];

  const stats = [
    { icon: <Zap className="w-5 h-5" />, value: "Fast", label: "Delivery" },
    { icon: <Shield className="w-5 h-5" />, value: "Secure", label: "Solutions" },
    { icon: <Clock className="w-5 h-5" />, value: "24/7", label: "Support" },
    { icon: <Users className="w-5 h-5" />, value: "Client", label: "Focused" },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "Understanding your vision, goals, and requirements",
      icon: <Target className="w-6 h-6" />
    },
    {
      number: "02",
      title: "Design",
      description: "Creating intuitive interfaces and user experiences",
      icon: <Paintbrush className="w-6 h-6" />
    },
    {
      number: "03",
      title: "Development",
      description: "Building robust and scalable solutions",
      icon: <Code className="w-6 h-6" />
    },
    {
      number: "04",
      title: "Deployment",
      description: "Launching and optimizing your digital product",
      icon: <Rocket className="w-6 h-6" />
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div 
      className="min-h-screen overflow-hidden relative"
      style={{ 
        backgroundColor: colors.dark,
        color: colors.light,
        fontFamily: "'Montserrat', sans-serif"
      }}
    >
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-10"
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 px-4 md:px-8">
        {/* Background Image Container */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0" style={{ backgroundColor: colors.dark }} />
          <div 
            className="absolute inset-0 opacity-10"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay'
            }}
          />
        </div>

        {/* Floating Code Elements */}
        <motion.div
          className="absolute top-20 left-10 text-4xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{ color: colors.accent1 + '40' }}
        >
          {"</>"}
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          style={{ color: colors.accent2 + '40' }}
        >
          {"{ }"}
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full"
            style={{ 
              backgroundColor: `${colors.accent1}20`,
              border: `1px solid ${colors.accent1}40`
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: colors.accent1 }} />
            <span 
              className="text-sm font-medium"
              style={{ color: colors.accent1, fontFamily: "'Montserrat', sans-serif" }}
            >
              Our Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Where{" "}
            <span style={{ color: colors.accent1 }}>Creativity</span>
            {" "}Meets{" "}
            <span style={{ color: colors.accent2 }}>Technology</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10"
            style={{ 
              color: colors.gray,
              fontFamily: "'Nunito Sans', sans-serif"
            }}
          >
            We craft digital experiences that blend innovative design with cutting-edge 
            technology to bring your boldest ideas to life. From concept to deployment, 
            we're with you every step of the way.
          </motion.p>

          {/* Fun Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 md:gap-12"
          >
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ 
                    backgroundColor: colors.accent1,
                    color: colors.light
                  }}
                >
                  {stat.icon}
                </div>
                <p 
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  {stat.value}
                </p>
                <p 
                  className="text-sm"
                  style={{ 
                    color: colors.gray,
                    fontFamily: "'Nunito Sans', sans-serif"
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Our{" "}
              <span style={{ color: colors.accent1 }}>Process</span>
            </h2>
            <p 
              className="text-lg max-w-2xl mx-auto"
              style={{ 
                color: colors.gray,
                fontFamily: "'Nunito Sans', sans-serif"
              }}
            >
              A structured approach to ensure your project's success from idea to launch
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative p-6 rounded-2xl text-center"
                style={{ 
                  backgroundColor: `${colors.dark}80`,
                  border: `1px solid ${colors.gray}20`,
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ 
                    backgroundColor: colors.accent1,
                    color: colors.light
                  }}
                >
                  {step.number}
                </div>
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ 
                    backgroundColor: `${colors.accent1}20`,
                    color: colors.accent1
                  }}
                >
                  {step.icon}
                </div>
                <h3 
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p 
                  style={{ 
                    color: colors.gray,
                    fontFamily: "'Nunito Sans', sans-serif"
                  }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Our{" "}
              <span style={{ color: colors.accent1 }}>Services</span>
            </h2>
            <p 
              className="text-lg max-w-2xl mx-auto"
              style={{ 
                color: colors.gray,
                fontFamily: "'Nunito Sans', sans-serif"
              }}
            >
              Comprehensive digital solutions tailored to your unique needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: service.delay }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredCard(service.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`relative rounded-2xl p-6 border transition-all duration-300 cursor-pointer ${
                  hoveredCard && hoveredCard !== service.id ? "opacity-70" : "opacity-100"
                }`}
                style={{ 
                  backgroundColor: `${colors.dark}80`,
                  borderColor: `${colors.gray}20`,
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ 
                    backgroundColor: colors.accent1,
                    color: colors.light
                  }}
                >
                  {service.icon}
                </div>

                <h3 
                  className="text-xl font-bold mb-4"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  {service.title}
                </h3>

                <p 
                  className="mb-6"
                  style={{ 
                    color: colors.gray,
                    fontFamily: "'Nunito Sans', sans-serif"
                  }}
                >
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 
                    className="text-sm font-semibold mb-3"
                    style={{ 
                      color: colors.light,
                      fontFamily: "'Montserrat', sans-serif"
                    }}
                  >
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 text-xs rounded-full"
                        style={{ 
                          backgroundColor: `${colors.dark}60`,
                          color: colors.gray,
                          border: `1px solid ${colors.gray}20`
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 
                    className="text-sm font-semibold mb-3"
                    style={{ 
                      color: colors.light,
                      fontFamily: "'Montserrat', sans-serif"
                    }}
                  >
                    Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center"
                        whileHover={{ x: 5 }}
                      >
                        <CheckCircle 
                          className="w-4 h-4 mr-3" 
                          style={{ color: colors.accent1 }} 
                        />
                        <span 
                          className="text-sm"
                          style={{ 
                            color: colors.gray,
                            fontFamily: "'Nunito Sans', sans-serif"
                          }}
                        >
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl p-8 md:p-12 text-center overflow-hidden"
            style={{ 
              backgroundColor: colors.accent3,
              backgroundImage: `linear-gradient(135deg, ${colors.accent1} 0%, ${colors.accent3} 100%)`,
              border: `1px solid ${colors.accent2}`
            }}
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ 
                color: colors.light,
                fontFamily: "'Manrope', sans-serif"
              }}
            >
              Ready to Build Something Amazing?
            </h2>
            <p 
              className="text-lg mb-8 max-w-2xl mx-auto"
              style={{ 
                color: colors.gray,
                fontFamily: "'Nunito Sans', sans-serif"
              }}
            >
              Let's discuss your project and create something incredible together. 
              Our team is ready to turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="px-8 py-3.5 rounded-xl font-medium flex items-center justify-center gap-2"
                style={{ 
                  backgroundColor: colors.dark,
                  color: colors.light,
                  border: `1px solid ${colors.light}20`
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: colors.accent2,
                }}
                whileTap={{ scale: 0.96 }}
              >
                <Sparkles className="w-4 h-4" />
                Start Your Project
              </motion.a>
              <motion.a
                href="/contact"
                className="px-8 py-3.5 rounded-xl font-medium"
                style={{ 
                  backgroundColor: 'transparent',
                  color: colors.light,
                  border: `1px solid ${colors.light}40`
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: `${colors.light}10`,
                }}
                whileTap={{ scale: 0.96 }}
              >
                Schedule a Call
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}