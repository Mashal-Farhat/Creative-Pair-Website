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

    // Get accent color from CSS variable
    const rootStyles = getComputedStyle(document.documentElement);
    const isDark = document.documentElement.classList.contains('dark');
    const accentRgb = isDark ? '144,41,35' : '151,62,52'; // #902923 (dark) or #973e34 (light)

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
        const alpha = 0.2;
        this.color = `rgba(${accentRgb}, ${alpha})`;
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
            ctx.strokeStyle = `rgba(${accentRgb}, 0.15)`;
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

    // Observe theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const newIsDark = document.documentElement.classList.contains('dark');
          const newAccentRgb = newIsDark ? '144,41,35' : '151,62,52';
          particles.forEach(p => {
            const alpha = parseFloat(p.color.split(',')[3]?.split(')')[0] || '0.2');
            p.color = `rgba(${newAccentRgb}, ${alpha})`;
          });
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      observer.disconnect();
    };
  }, []);

  const services = [
    {
      id: 1,
      icon: <Code className="w-8 h-8 text-white" />,
      title: "Web Development",
      description: "Custom websites and web applications using modern technologies. We build responsive, fast, and SEO-friendly solutions that drive results.",
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Cross-browser Compatibility"],
      delay: 0.1,
    },
    {
      id: 2,
      icon: <Mobile className="w-8 h-8 text-white" />,
      title: "App Development",
      description: "Cross-platform mobile applications developed with cutting-edge technologies for seamless performance on all devices.",
      technologies: ["React Native", "Flutter", "iOS", "Android"],
      features: ["Native Performance", "Offline Capability", "Push Notifications", "Store Deployment"],
      delay: 0.2,
    },
    {
      id: 3,
      icon: <Paintbrush className="w-8 h-8 text-white" />,
      title: "UI/UX Design",
      description: "Intuitive user interfaces and experiences for web, mobile, and games that prioritize usability and aesthetic appeal.",
      technologies: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      features: ["User Personas", "Journey Mapping", "Usability Testing", "Interaction Design"],
      delay: 0.3,
    },
    {
      id: 4,
      icon: <Database className="w-8 h-8 text-white" />,
      title: "Backend Development",
      description: "Robust server-side solutions with scalable architecture and secure data management.",
      technologies: ["Node.js", "Python", "MongoDB", "PostgreSQL", "AWS"],
      features: ["API Development", "Database Design", "Cloud Deployment", "Security"],
      delay: 0.4,
    },
    {
      id: 5,
      icon: <Terminal className="w-8 h-8 text-white" />,
      title: "DevOps & Cloud",
      description: "Streamlined deployment, monitoring, and infrastructure management for optimal performance.",
      technologies: ["Docker", "Kubernetes", "AWS", "CI/CD", "Monitoring"],
      features: ["Automated Deployment", "Infrastructure as Code", "Performance Monitoring", "Scalability"],
      delay: 0.5,
    },
    {
      id: 6,
      icon: <Team className="w-8 h-8 text-white" />,
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
    <div className="min-h-screen overflow-hidden relative bg-brand-dark text-white">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-10"
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 px-4 md:px-8">
        {/* Background Image Container */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-brand-dark" />
          <div 
            className="absolute inset-0 opacity-20"
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
          className="absolute top-20 left-10 text-4xl text-accent/40"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          {"</>"}
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-3xl text-accent/40"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        >
          {"{ }"}
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-heading"
          >
            Where{" "}
            <span className="text-accent">Creativity</span>
            {" "}Meets{" "}
            <span className="text-accent">Technology</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-400 font-body"
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
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 bg-accent text-white">
                  {stat.icon}
                </div>
                <p className="text-2xl font-bold mb-1 font-heading text-white">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-400 font-body">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
        {/* Our Process */}
        <section className="py-16 md:py-24 px-4 md:px-8 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-heading text-white">
                Our{" "}
                <span className="text-accent">Process</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto text-gray-400 font-body">
                A structured approach to ensure your project's success from idea to launch
              </p>
            </motion.div>

            {/* Wavy Path Container */}
            <div className="relative hidden md:block" style={{ height: "320px" }}>
              {/* SVG Wavy Dashed Path */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1100 280"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M 60 180 C 160 180 200 80 300 80 C 400 80 440 220 540 220 C 640 220 680 60 780 60 C 880 60 920 200 1040 200"
                  stroke="var(--cp-accent, #973e34)"
                  strokeWidth="2"
                  strokeDasharray="10 8"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                />
              </svg>

              {/* Step 1 — Discovery — left, below path */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute"
                style={{ left: "3%", top: "52%" }}
              >
                {/* Icon on path */}
                <div className="w-10 h-10 rounded-full border-2 border-accent bg-brand-dark flex items-center justify-center mb-3 mx-auto text-accent">
                  <Target className="w-4 h-4" />
                </div>
                {/* Big background number */}
                <div className="relative">
                  <span className="absolute -top-8 -left-4 text-8xl font-black text-white/5 select-none leading-none font-heading">1</span>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold font-heading text-white mb-1">Discovery</h3>
                    <p className="text-sm text-gray-400 font-body max-w-[160px] leading-snug">
                      Understanding your vision, goals, and requirements
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Step 2 — Design — left-center, above path */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute"
                style={{ left: "27%", top: "2%" }}
              >
                <div className="relative">
                  <span className="absolute -top-2 -left-4 text-8xl font-black text-white/5 select-none leading-none font-heading">2</span>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold font-heading text-white mb-1">Design</h3>
                    <p className="text-sm text-gray-400 font-body max-w-[160px] leading-snug">
                      Creating intuitive interfaces and user experiences
                    </p>
                  </div>
                </div>
                {/* Icon on path */}
                <div className="w-10 h-10 rounded-full border-2 border-accent bg-brand-dark flex items-center justify-center mt-3 mx-auto text-accent">
                  <Paintbrush className="w-4 h-4" />
                </div>
              </motion.div>

              {/* Step 3 — Development — right-center, above path */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute"
                style={{ left: "56%", top: "0%" }}
              >
                <div className="relative">
                  <span className="absolute -top-2 -left-4 text-8xl font-black text-white/5 select-none leading-none font-heading">3</span>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold font-heading text-white mb-1">Development</h3>
                    <p className="text-sm text-gray-400 font-body max-w-[160px] leading-snug">
                      Building robust and scalable solutions
                    </p>
                  </div>
                </div>
                {/* Icon on path */}
                <div className="w-10 h-10 rounded-full border-2 border-accent bg-brand-dark flex items-center justify-center mt-3 mx-auto text-accent">
                  <Code className="w-4 h-4" />
                </div>
              </motion.div>

              {/* Step 4 — Deployment — right, below path */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute"
                style={{ left: "82%", top: "46%" }}
              >
                {/* Icon on path */}
                <div className="w-10 h-10 rounded-full border-2 border-accent bg-brand-dark flex items-center justify-center mb-3 mx-auto text-accent">
                  <Rocket className="w-4 h-4" />
                </div>
                <div className="relative">
                  <span className="absolute -top-8 -left-4 text-8xl font-black text-white/5 select-none leading-none font-heading">4</span>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold font-heading text-white mb-1">Deployment</h3>
                    <p className="text-sm text-gray-400 font-body max-w-[160px] leading-snug">
                      Launching and optimizing your digital product
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Mobile fallback — vertical stacked */}
            <div className="md:hidden flex flex-col gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border-2 border-accent bg-brand-dark flex items-center justify-center text-accent shrink-0">
                      {step.icon}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-px h-12 border-l-2 border-dashed border-accent/40 mt-2" />
                    )}
                  </div>
                  <div className="pt-1">
                    <span className="text-5xl font-black text-white/5 font-heading leading-none block -mb-2">{step.number}</span>
                    <h3 className="text-lg font-bold font-heading text-white">{step.title}</h3>
                    <p className="text-sm text-gray-400 font-body mt-1">{step.description}</p>
                  </div>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-heading text-white">
              Our{" "}
              <span className="text-accent">Services</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-400 font-body">
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
                className={`relative rounded-2xl p-6 border transition-all duration-300 cursor-pointer bg-brand-card border-white/10 ${
                  hoveredCard && hoveredCard !== service.id ? "opacity-70" : "opacity-100"
                }`}
              >
                {/* Gradient overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--cp-accent) 0%, transparent 100%)'
                  }}
                />

                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-accent text-white">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-4 font-heading text-white">
                  {service.title}
                </h3>

                <p className="mb-6 text-gray-400 font-body">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-white font-heading">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300 font-body"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-3 text-white font-heading">
                    Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center"
                        whileHover={{ x: 5 }}
                      >
                        <CheckCircle className="w-4 h-4 mr-3 text-accent" />
                        <span className="text-sm text-gray-400 font-body">
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
            className="relative rounded-3xl p-8 md:p-12 text-center overflow-hidden bg-gradient-to-br from-accent/80 to-accent2/80 border border-accent/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading text-white">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90 font-body">
              Let's discuss your project and create something incredible together. 
              Our team is ready to turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="px-8 py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 bg-white text-dark font-heading"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'var(--cp-accent)',
                  color: 'white',
                }}
                whileTap={{ scale: 0.96 }}
              >
                <Sparkles className="w-4 h-4" />
                Start Your Project
              </motion.a>
              <motion.a
                href="/contact"
                className="px-8 py-3.5 rounded-xl font-medium bg-transparent text-white border border-white/30 font-heading"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(var(--cp-accent-rgb), 0.1)',
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