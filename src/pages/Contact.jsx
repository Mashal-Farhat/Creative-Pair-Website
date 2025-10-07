import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Sparkles } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [hoveredCard, setHoveredCard] = useState(null);
  const canvasRef = useRef(null);

  // ✅ Particle Background Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

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
        if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(110, 142, 251, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
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

  // ✅ Form Handling
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formDataToSend = new FormData(form);

    fetch("/", {
      method: "POST",
      body: formDataToSend,
    })
      .then(() => {
        alert("✅ Thank you for your message! We’ll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => alert("❌ Something went wrong. Please try again."));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-dark to-brand-darker text-white overflow-hidden relative">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30" />

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
          >
            <Sparkles className="w-4 h-4 text-brand-primary" />
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
        </div>
      </motion.header>

      {/* ✅ Main Contact Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        {/* Contact Form */}
        <motion.div
          variants={itemVariants}
          className="bg-brand-card/20 backdrop-blur-md rounded-3xl p-8 border border-white/10"
        >
          <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>Don’t fill this out: <input name="bot-field" /></label>
            </p>

            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm">Full Name *</label>
                <input
                  type="text"
                  name="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-dark/50 text-white border border-white/10 rounded-lg p-3"
                />
              </div>
              <div>
                <label className="text-sm">Email Address *</label>
                <input
                  type="email"
                  name="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-dark/50 text-white border border-white/10 rounded-lg p-3"
                />
              </div>
            </div>

            {/* Company + Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm">Company</label>
                <input
                  type="text"
                  name="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-brand-dark/50 text-white border border-white/10 rounded-lg p-3"
                />
              </div>
              <div>
                <label className="text-sm">Subject *</label>
                <input
                  type="text"
                  name="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-dark/50 text-white border border-white/10 rounded-lg p-3"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm">Message *</label>
              <textarea
                name="Message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-brand-dark/50 text-white border border-white/10 rounded-lg p-3 resize-vertical"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-medium border border-white/20"
              whileHover={{ scale: 1.05 }}
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
