import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Sparkles, Send, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
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
        alert("Thank you for your message! We'll get back to you within 24 hours.");
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
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const contactMethods = [
    {
      icon: <Mail size={20} />,
      title: "Email Us",
      detail: "hr.creativepair@gmail.com",
      subDetail: "Response within 24h",
      id: 1,
    },
    {
      icon: <Phone size={20} />,
      title: "Call Us",
      detail: "+92 327-4968541",
      subDetail: "Mon–Fri, 9AM–5PM",
      id: 2,
    },
    {
      icon: <MapPin size={20} />,
      title: "Remote-First",
      detail: "Global Team",
      subDetail: "Serving worldwide",
      id: 3,
    },
    {
      icon: <Clock size={20} />,
      title: "Quick Response",
      detail: "< 24 Hours",
      subDetail: "Fast turnaround",
      id: 4,
    },
  ];

  return (
    <div 
      className="min-h-screen overflow-hidden"
      style={{ 
        backgroundColor: colors.dark,
        color: colors.light,
        fontFamily: "'Montserrat', sans-serif"
      }}
    >
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        {/* Background Image with Overlay - More suitable for tech/creative */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
            backgroundBlendMode: 'multiply',
            backgroundColor: `${colors.dark}CC`
          }}
        />
        
        {/* Subtle Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              ${colors.accent1}20 2px,
              ${colors.accent1}20 4px
            )`,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full"
              style={{ 
                backgroundColor: `${colors.accent1}20`,
                border: `1px solid ${colors.accent1}40`,
                fontFamily: "'Montserrat', sans-serif"
              }}
              whileHover={{ scale: 1.05 }}
            >
              <MessageSquare size={16} style={{ color: colors.accent1 }} />
              <span 
                className="text-sm font-medium"
                style={{ color: colors.accent1 }}
              >
                Let's Connect
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Ready to Create
              <br />
              <span style={{ color: colors.accent1 }}>Something Amazing?</span>
            </h1>

            {/* Subtitle */}
            <p 
              className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
              style={{ 
                color: colors.gray,
                fontFamily: "'Nunito Sans', sans-serif"
              }}
            >
              Share your vision with us. Let's collaborate to build digital solutions 
              that drive impact and innovation for your business.
            </p>

            {/* CTA Stats */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
              {[
                { value: "24h", label: "Response Time" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "50+", label: "Projects Delivered" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="text-center"
                >
                  <div 
                    className="text-3xl md:text-4xl font-bold mb-2"
                    style={{ color: colors.accent1, fontFamily: "'Manrope', sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    className="text-sm"
                    style={{ color: colors.gray, fontFamily: "'Nunito Sans', sans-serif" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto px-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  Get in Touch
                </h2>
                <p 
                  className="text-base md:text-lg"
                  style={{ 
                    color: colors.gray,
                    fontFamily: "'Nunito Sans', sans-serif"
                  }}
                >
                  We're here to help you bring your ideas to life. Reach out through 
                  any channel that works best for you.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactMethods.map((method) => (
                  <motion.div
                    key={method.id}
                    variants={itemVariants}
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                    onHoverStart={() => setHoveredCard(method.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className={`relative p-5 rounded-xl border transition-all duration-200 ${
                      hoveredCard && hoveredCard !== method.id ? "opacity-80" : ""
                    }`}
                    style={{ 
                      backgroundColor: `${colors.dark}80`,
                      borderColor: `${colors.gray}20`,
                      backdropFilter: 'blur(8px)'
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ 
                          backgroundColor: colors.accent1,
                          color: colors.light
                        }}
                      >
                        {method.icon}
                      </div>
                      <div>
                        <h3 
                          className="font-semibold mb-1"
                          style={{ fontFamily: "'Manrope', sans-serif" }}
                        >
                          {method.title}
                        </h3>
                        <p 
                          className="text-sm mb-1"
                          style={{ 
                            color: colors.light,
                            fontFamily: "'Nunito Sans', sans-serif"
                          }}
                        >
                          {method.detail}
                        </p>
                        <span 
                          className="text-xs"
                          style={{ 
                            color: colors.gray,
                            fontFamily: "'Nunito Sans', sans-serif"
                          }}
                        >
                          {method.subDetail}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Process Info */}
              <div className="pt-6 border-t" style={{ borderColor: `${colors.gray}20` }}>
                <h3 
                  className="font-semibold mb-3"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  Our Process
                </h3>
                <div className="space-y-3">
                  {[
                    "1. Initial consultation",
                    "2. Project analysis",
                    "3. Proposal & timeline",
                    "4. Development & delivery"
                  ].map((step, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs"
                        style={{ 
                          backgroundColor: colors.accent1,
                          color: colors.light
                        }}
                      >
                        {index + 1}
                      </div>
                      <span 
                        style={{ 
                          color: colors.gray,
                          fontFamily: "'Nunito Sans', sans-serif"
                        }}
                      >
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div 
                className="rounded-2xl p-6 md:p-8 border"
                style={{ 
                  backgroundColor: `${colors.dark}80`,
                  borderColor: `${colors.gray}20`,
                  backdropFilter: 'blur(8px)'
                }}
              >
                <h2 
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  Send a Message
                </h2>
                <p 
                  className="mb-6 text-base"
                  style={{ 
                    color: colors.gray,
                    fontFamily: "'Nunito Sans', sans-serif"
                  }}
                >
                  Fill out the form below and we'll get back to you promptly.
                </p>

                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  className="space-y-5"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <label>
                      Bot field: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label 
                        className="text-sm font-medium"
                        style={{ 
                          color: colors.gray,
                          fontFamily: "'Montserrat', sans-serif"
                        }}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full rounded-lg p-3.5 focus:outline-none"
                        style={{ 
                          backgroundColor: `${colors.dark}60`,
                          color: colors.light,
                          border: `1px solid ${colors.gray}20`,
                          fontFamily: "'Nunito Sans', sans-serif"
                        }}
                      />
                    </div>

                    <div className="space-y-2">
                      <label 
                        className="text-sm font-medium"
                        style={{ 
                          color: colors.gray,
                          fontFamily: "'Montserrat', sans-serif"
                        }}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full rounded-lg p-3.5 focus:outline-none"
                        style={{ 
                          backgroundColor: `${colors.dark}60`,
                          color: colors.light,
                          border: `1px solid ${colors.gray}20`,
                          fontFamily: "'Nunito Sans', sans-serif"
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label 
                        className="text-sm font-medium"
                        style={{ 
                          color: colors.gray,
                          fontFamily: "'Montserrat', sans-serif"
                        }}
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className="w-full rounded-lg p-3.5 focus:outline-none"
                        style={{ 
                          backgroundColor: `${colors.dark}60`,
                          color: colors.light,
                          border: `1px solid ${colors.gray}20`,
                          fontFamily: "'Nunito Sans', sans-serif"
                        }}
                      />
                    </div>

                    <div className="space-y-2">
                      <label 
                        className="text-sm font-medium"
                        style={{ 
                          color: colors.gray,
                          fontFamily: "'Montserrat', sans-serif"
                        }}
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Project Inquiry"
                        className="w-full rounded-lg p-3.5 focus:outline-none"
                        style={{ 
                          backgroundColor: `${colors.dark}60`,
                          color: colors.light,
                          border: `1px solid ${colors.gray}20`,
                          fontFamily: "'Nunito Sans', sans-serif"
                        }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label 
                      className="text-sm font-medium"
                      style={{ 
                        color: colors.gray,
                        fontFamily: "'Montserrat', sans-serif"
                      }}
                    >
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="Tell us about your project..."
                      className="w-full rounded-lg p-3.5 focus:outline-none resize-vertical"
                      style={{ 
                        backgroundColor: `${colors.dark}60`,
                        color: colors.light,
                        border: `1px solid ${colors.gray}20`,
                        fontFamily: "'Nunito Sans', sans-serif"
                      }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full px-6 py-3.5 rounded-lg font-medium flex items-center justify-center gap-2"
                    style={{ 
                      backgroundColor: colors.accent1,
                      color: colors.light,
                      fontFamily: "'Montserrat', sans-serif"
                    }}
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: colors.accent2,
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={18} />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Style */}
      <style jsx global>{`
        input:focus, textarea:focus {
          border-color: ${colors.accent1} !important;
          box-shadow: 0 0 0 2px ${colors.accent1}20;
        }
        
        .resize-vertical {
          resize: vertical;
          min-height: 100px;
        }
        
        ::placeholder {
          color: ${colors.gray}60;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;