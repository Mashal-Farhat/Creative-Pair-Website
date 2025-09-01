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
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const canvasRef = useRef(null);

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
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = `rgba(110, 142, 251, ${Math.random() * 0.3})`;
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

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(110, 142, 251, ${
              0.1 * (1 - distance / 100)
            })`;
            ctx.lineWidth = 0.5;
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
  }, []);

  const services = [
    {
      id: 1,
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description:
        "Custom websites and web applications using modern technologies. We build responsive, fast, and SEO-friendly solutions that drive results.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Next.js",
        "Node.js",
      ],
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Performance Tuning",
        "Cross-browser Compatibility",
      ],
      gradient: "from-blue-500 to-purple-600",
      hoverColor: "hover:shadow-blue-500/20",
      delay: 0.1,
    },
    {
      id: 2,
      icon: <Smartphone className="w-12 h-12" />,
      title: "App Development",
      description:
        "Cross-platform mobile applications developed with cutting-edge technologies for seamless performance on all devices.",
      technologies: ["Java", "Kotlin", "Flutter", "Android"],
      features: [
        "Native Performance",
        "Offline Capability",
        "Push Notifications",
        "Store Deployment",
      ],
      gradient: "from-green-500 to-teal-600",
      hoverColor: "hover:shadow-green-500/20",
      delay: 0.3,
    },
    {
      id: 3,
      icon: <Layout className="w-12 h-12" />,
      title: "UI/UX Design",
      description:
        "Intuitive user interfaces and experiences for web, mobile, and games that prioritize usability and aesthetic appeal.",
      technologies: [
        "Figma",
        "Web & App Design",
        "Games Design",
        "User Research",
        "Wireframing",
        "Prototyping",
      ],
      features: [
        "User Personas",
        "Journey Mapping",
        "Usability Testing",
        "Interaction Design",
      ],
      gradient: "from-orange-500 to-red-600",
      hoverColor: "hover:shadow-orange-500/20",
      delay: 0.4,
    },
    {
      id: 4,
      icon: <Globe className="w-12 h-12" />,
      title: "Full-Stack Solutions",
      description:
        "End-to-end development services from concept to deployment, ensuring cohesive and integrated digital products.",
      technologies: ["Frontend", "Backend", "Database", "Deployment"],
      features: [
        "API Development",
        "Database Design",
        "Cloud Deployment",
        "Maintenance",
      ],
      gradient: "from-indigo-500 to-blue-600",
      hoverColor: "hover:shadow-indigo-500/20",
      delay: 0.6,
    },
  ];

  const stats = [
    { icon: <Zap className="w-6 h-6" />, value: "Fast", label: "Delivery" },
    {
      icon: <Shield className="w-6 h-6" />,
      value: "Secure",
      label: "Solutions",
    },
    { icon: <Clock className="w-6 h-6" />, value: "24/7", label: "Support" },
    { icon: <Users className="w-6 h-6" />, value: "Client", label: "Focused" },
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

  const logoVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      rotate: 5,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
     <div className="min-h-screen bg-gradient-to-br from-brand-dark to-brand-darker text-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden relative">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-brand-primary/10 to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-10 h-10 rounded-full bg-blue-500/20"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-2/3 right-20 w-6 h-6 rounded-full bg-purple-500/20"
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-8 h-8 rounded-full bg-green-500/20"
        animate={{
          y: [0, 25, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute top-2/3 right-20 w-6 h-6 rounded-full bg-purple-500/20"
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-8 h-8 rounded-full bg-green-500/20"
        animate={{
          y: [0, 25, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Header Section with Logo */}
      <section className="relative px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-brand-primary/10 border border-brand-primary/20">
            <Sparkles className="w-4 h-4 text-brand-primary" />
            <span className="text-brand-primary text-sm font-medium">
              Our Services
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Transform Your Vision Into{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">Digital Reality</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg text-brand-soft max-w-2xl mx-auto"
          >
            We offer end-to-end digital solutions that combine innovative design
            with cutting-edge technology to bring your ideas to life.
          </motion.p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-brand-card/30 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary/10 mb-4">
              {stat.icon}
            </div>
            <p className="text-2xl font-bold mb-1">{stat.value}</p>
            <p className="text-brand-soft text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Services Grid */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={itemVariants}
            whileHover={{
              y: -15,
              transition: { duration: 0.3 },
            }}
            onHoverStart={() => setHoveredCard(service.id)}
            onHoverEnd={() => setHoveredCard(null)}
            className={`relative bg-brand-card/20 backdrop-blur-md rounded-3xl p-8 border border-white/10 
              overflow-hidden transition-all duration-500 cursor-pointer group
              ${service.hoverColor} ${
              hoveredCard && hoveredCard !== service.id
                ? "opacity-70"
                : "opacity-100"
            }`}
          >
            {/* Gradient overlay on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 
              transition-opacity duration-500 rounded-3xl`}
            ></div>

            {/* Icon */}
            <motion.div
              className={`mx-auto mb-6 flex items-center justify-center 
    w-24 h-24 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg`}
              whileHover={{
                scale: 1.2,
                rotate: 10,
                boxShadow: "0 0 25px rgba(110,142,251,0.6)",
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-white"
              >
                {service.icon}
              </motion.div>
            </motion.div>

            {/* Heading (unchanged) */}
            <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-primary transition-colors">
              {service.title}
            </h3>

            <p className="text-brand-soft mb-6 leading-relaxed">
              {service.description}
            </p>

            {/* Technologies (unchanged) */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-brand-soft mb-3">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-brand-dark/50 text-xs rounded-full text-brand-soft border border-white/5"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-semibold text-brand-soft mb-3">
                What's Included
              </h4>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center mr-3 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                    </div>
                    <span className="text-sm text-brand-soft">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              className="flex items-center text-brand-primary font-medium"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            ></motion.div>
          </motion.div>
        ))}
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="relative px-6 py-20 text-center max-w-4xl mx-auto"
      >
        <div className="bg-brand-card/20 backdrop-blur-md rounded-3xl p-12 border border-white/10">
          <h2 className="text-3xl font-bold mb-6">
            Ready to bring your idea to life?
          </h2>
          <p className="text-brand-soft mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together.
            Our team is ready to turn your vision into a stunning digital
            reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-transparent text-white px-8 py-4 rounded-xl font-medium border border-white/20"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(110, 142, 251, 0.1)",
                borderColor: "rgba(110, 142, 251, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Call
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
