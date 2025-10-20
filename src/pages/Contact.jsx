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

  // Particle background effect (colors derived from CSS variables so theme updates apply)
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

    // pick accent RGBs from CSS variables
    const rootStyles = getComputedStyle(document.documentElement);
    const accentRgb = (rootStyles.getPropertyValue('--cp-accent-rgb') || '255,122,48').trim();
    const accent2Rgb = (rootStyles.getPropertyValue('--cp-accent2-rgb') || '70,92,136').trim();

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
        const base = Math.random() > 0.5 ? accent2Rgb : accentRgb;
        this.color = `rgba(${base}, ${0.08 + Math.random() * 0.28})`;
        this.strokeBase = base;
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
            ctx.strokeStyle = `rgba(${particles[i].strokeBase}, ${0.08 * (1 - distance / 100)})`;
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
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("form-name", "contact");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("company", formData.company);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("message", formData.message);

    fetch("/", {
      method: "POST",
      body: formDataToSend,
    })
      .then(() => {
        alert("Thank you for your message! We’ll get back to you within 24 hours.");
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => alert("Something went wrong: " + error));
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
    <div className="min-h-screen overflow-hidden relative" style={{ background: 'var(--cp-bg)', color: 'var(--cp-text)' }}>
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-96" style={{ background: `linear-gradient(180deg, rgba(var(--cp-accent-rgb),0.08), transparent)` }}></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: `rgba(var(--cp-accent2-rgb),0.06)` }}></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ background: `rgba(var(--cp-accent-rgb),0.06)` }}></div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-10 h-10 rounded-full"
        style={{ background: `rgba(var(--cp-accent2-rgb),0.14)` }}
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
        className="absolute top-2/3 right-20 w-6 h-6 rounded-full"
        style={{ background: `rgba(var(--cp-accent-rgb),0.12)` }}
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
        className="absolute bottom-1/4 left-1/4 w-8 h-8 rounded-full"
        style={{ background: `rgba(var(--cp-accent-rgb),0.12)` }}
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
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full"
            style={{ background: `linear-gradient(90deg, rgba(var(--cp-accent2-rgb),0.06), rgba(var(--cp-accent-rgb),0.06))`, border: `1px solid rgba(var(--cp-accent-rgb),0.12)` }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.25 },
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-4 h-4" style={{ color: `rgba(var(--cp-accent-rgb),0.95)` }} />
            </motion.div>
            <span style={{ color: `rgba(var(--cp-accent-rgb),0.92)` }} className="text-sm font-medium">
              Contact Us
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Let’s Create Something{" "}
            <span className="text-gradient">
              Amazing
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg max-w-2xl mx-auto cp-text-muted"
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
                className={`relative bg-brand-card/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 transition-all duration-500 cursor-pointer group ${hoveredCard && hoveredCard !== method.id
                  ? "opacity-70"
                  : "opacity-100"
                  }`}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `linear-gradient(135deg, rgba(var(--cp-accent2-rgb),0.08), rgba(var(--cp-accent-rgb),0.08))` }}
                ></div>
                <motion.div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ background: `linear-gradient(90deg, rgba(var(--cp-accent2-rgb),0.06), rgba(var(--cp-accent-rgb),0.06))` }}
                  whileHover={{ scale: 1.06 }}
                >
                  {method.icon}
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold">{method.title}</h3>
                  <p className="cp-text-muted">{method.detail}</p>
                  <span className="text-sm cp-text-muted/70">
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
          <p className="mb-8 cp-text-muted">
            Tell us about your project and we’ll get back to you with a detailed
            proposal.
          </p>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                variants={itemVariants}
                className="space-y-2"
                whileHover={{ scale: 1.02 }}
              >
                <label htmlFor="name" className="text-sm font-medium cp-text-muted">
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
                  className="w-full rounded-lg p-3"
                  style={{ background: 'var(--cp-surface)', color: 'var(--cp-text)', border: '1px solid var(--cp-border)' }}
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="space-y-2"
                whileHover={{ scale: 1.02 }}
              >
                <label htmlFor="email" className="text-sm font-medium cp-text-muted">
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
                  className="w-full rounded-lg p-3"
                  style={{ background: 'var(--cp-surface)', color: 'var(--cp-text)', border: '1px solid var(--cp-border)' }}
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                variants={itemVariants}
                className="space-y-2"
                whileHover={{ scale: 1.02 }}
              >
                <label htmlFor="company" className="text-sm font-medium cp-text-muted">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company Name"
                  className="w-full rounded-lg p-3"
                  style={{ background: 'var(--cp-surface)', color: 'var(--cp-text)', border: '1px solid var(--cp-border)' }}
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="space-y-2"
                whileHover={{ scale: 1.02 }}
              >
                <label htmlFor="subject" className="text-sm font-medium cp-text-muted">
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
                  className="w-full rounded-lg p-3"
                  style={{ background: 'var(--cp-surface)', color: 'var(--cp-text)', border: '1px solid var(--cp-border)' }}
                />
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="space-y-2"
              whileHover={{ scale: 1.02 }}
            >
              <label htmlFor="message" className="text-sm font-medium cp-text-muted">
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
                className="w-full rounded-lg p-3 resize-vertical"
                style={{ background: 'var(--cp-surface)', color: 'var(--cp-text)', border: '1px solid var(--cp-border)' }}
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full px-8 py-4 rounded-xl font-medium"
              style={{ background: 'linear-gradient(90deg, rgba(var(--cp-accent2-rgb),0.95), rgba(var(--cp-accent-rgb),0.95))', color: '#fff', border: '1px solid rgba(255,255,255,0.06)' }}
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{ scale: 0.96 }}
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