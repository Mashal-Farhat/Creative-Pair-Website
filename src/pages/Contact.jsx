import React, { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Sparkles } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('✅ Thank you for your message! We’ll get back to you within 24 hours.');
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
    <div className="min-h-screen bg-gradient-to-br from-brand-dark to-brand-darker text-white overflow-hidden relative">
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

      {/* Header */}
      <motion.header
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="py-20 text-center"
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-brand-primary/10 border border-brand-primary/20"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(110, 142, 251, 0.2)",
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-4 h-4 text-brand-primary" />
            </motion.div>
            <span className="text-brand-primary text-sm font-medium">
              Contact Us
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Let’s Create Something{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              Amazing
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-brand-soft max-w-2xl mx-auto"
          >
            Ready to transform your vision into reality? Get in touch with us and
            let’s discuss how we can bring your ideas to life.
          </motion.p>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        {/* Contact Info Section */}
        <motion.div variants={itemVariants} className="space-y-8">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className="text-brand-soft">
            We’d love to hear about your project and explore how we can help you
            achieve your goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Mail size={22} />,
                title: "Email Us",
                detail: "hr.creativepair@gmail.com",
                subDetail: "We respond within 24 hours",
                id: 1,
              },
              {
                icon: <Phone size={22} />,
                title: "Call Us",
                detail: "+92 327-4968541",
                subDetail: "Mon–Fri, 9AM–5PM PST",
                id: 2,
              },
              {
                icon: <MapPin size={22} />,
                title: "Visit Us",
                detail: "Remote-First Company",
                subDetail: "Serving clients worldwide",
                id: 3,
              },
              {
                icon: <Clock size={22} />,
                title: "Response Time",
                detail: "< 24 Hours",
                subDetail: "Quick project turnaround",
                id: 4,
              },
            ].map((method) => (
              <motion.div
                key={method.id}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 10px 30px rgba(110, 142, 251, 0.2)",
                  transition: { duration: 0.3 },
                }}
                onHoverStart={() => setHoveredCard(method.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`relative bg-brand-card/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 transition-all duration-500 cursor-pointer group ${
                  hoveredCard && hoveredCard !== method.id
                    ? "opacity-70"
                    : "opacity-100"
                }`}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                ></div>
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600/10 flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  {method.icon}
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold">{method.title}</h3>
                  <p className="text-brand-soft">{method.detail}</p>
                  <span className="text-sm text-brand-soft/70">
                    {method.subDetail}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          variants={itemVariants}
          className="bg-brand-card/20 backdrop-blur-md rounded-3xl p-8 border border-white/10"
        >
          <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
          <p className="text-brand-soft mb-8">
            Tell us about your project and we’ll get back to you with a detailed
            proposal.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                variants={itemVariants}
                className="space-y-2"
                whileHover={{ scale: 1.02 }}
              >
                <label htmlFor="name" className="text-sm font-medium text-white/90">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-brand-dark/50 text-white border border-white/10 rounded-lg p-3 focus:border-brand-primary transition-border duration-300"
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="space-y-2"
                whileHover={{ scale: 1.02 }}
              >
                <label htmlFor="email" className="text-sm font-medium text-white/90">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-brand-dark/50 text-white border border-white/10 rounded-lg p-3 focus:border-brand-primary transition-border duration-300"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                variants={itemVariants}
                className="space-y-2"
                whileHover={{ scale: 1.02 }}
              >
                <label htmlFor="company" className="text-sm font-medium text-white/90">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company Name"
                  className="w-full bg-brand-dark/50 text-white border border-white/10 rounded-lg p-3 focus:border-brand-primary transition-border duration-300"
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="space-y-2"
                whileHover={{ scale: 1.02 }}
              >
                <label htmlFor="subject" className="text-sm font-medium text-white/90">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                  className="w-full bg-brand-dark/50 text-white border border-white/10 rounded-lg p-3 focus:border-brand-primary transition-border duration-300"
                />
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="space-y-2"
              whileHover={{ scale: 1.02 }}
            >
              <label htmlFor="message" className="text-sm font-medium text-white/90">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell us about your project, goals, timeline, and budget..."
                className="w-full bg-brand-dark/50 text-white border border-white/10 rounded-lg p-3 focus:border-brand-primary transition-border duration-300 resize-vertical"
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-medium border border-white/20"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(110, 142, 251, 0.1)",
                borderColor: "rgba(110, 142, 251, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;