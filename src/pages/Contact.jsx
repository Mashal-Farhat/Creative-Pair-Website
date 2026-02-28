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
    <div className="min-h-screen overflow-hidden bg-brand-dark text-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          }}
        />
        
        {/* Subtle Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(var(--cp-accent-rgb), 0.15) 2px,
              rgba(var(--cp-accent-rgb), 0.15) 4px
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
          
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-heading ">
              Ready to Create
              <br />
              <span className="text-accent">Something Amazing?</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-[#0A100D]/80 font-body font-medium">
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
                  <div className="text-3xl md:text-4xl font-bold mb-2 font-heading text-accent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#0A100D]/70 font-body font-medium">
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading text-white">
                  Get in Touch
                </h2>
                <p className="text-base md:text-lg text-gray-400 font-body">
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
                    className={`relative p-5 rounded-xl border transition-all duration-200 bg-brand-card border-white/10 ${
                      hoveredCard && hoveredCard !== method.id ? "opacity-80" : ""
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-accent text-white">
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 font-heading text-white">
                          {method.title}
                        </h3>
                        <p className="text-sm mb-1 text-white font-body">
                          {method.detail}
                        </p>
                        <span className="text-xs text-gray-400 font-body">
                          {method.subDetail}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Process Info */}
              <div className="pt-6 border-t border-white/10">
                <h3 className="font-semibold mb-3 font-heading text-white">
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
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs bg-accent text-white">
                        {index + 1}
                      </div>
                      <span className="text-gray-400 font-body">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="rounded-2xl p-6 md:p-8 border bg-brand-card border-white/10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 font-heading text-white">
                  Send a Message
                </h2>
                <p className="mb-6 text-base text-gray-400 font-body">
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
                      <label className="text-sm font-medium text-gray-400 font-heading">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full rounded-lg p-3.5 focus:outline-none bg-white/5 border border-white/10 text-white font-body placeholder-gray-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 font-heading">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full rounded-lg p-3.5 focus:outline-none bg-white/5 border border-white/10 text-white font-body placeholder-gray-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 font-heading">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className="w-full rounded-lg p-3.5 focus:outline-none bg-white/5 border border-white/10 text-white font-body placeholder-gray-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 font-heading">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Project Inquiry"
                        className="w-full rounded-lg p-3.5 focus:outline-none bg-white/5 border border-white/10 text-white font-body placeholder-gray-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 font-heading">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="Tell us about your project..."
                      className="w-full rounded-lg p-3.5 focus:outline-none resize-vertical bg-white/5 border border-white/10 text-white font-body placeholder-gray-500"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full px-6 py-3.5 rounded-lg font-medium flex items-center justify-center gap-2 bg-accent text-white font-heading"
                    whileHover={{
                      scale: 1.02,
                      opacity: 0.9,
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
          border-color: var(--cp-accent) !important;
          box-shadow: 0 0 0 2px rgba(var(--cp-accent-rgb), 0.2);
        }
        
        .resize-vertical {
          resize: vertical;
          min-height: 100px;
        }
        
        input::placeholder, textarea::placeholder {
          color: rgba(var(--cp-text-rgb), 0.5);
        }
      `}</style>
    </div>
  );
};

export default ContactPage;