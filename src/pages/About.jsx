import { motion } from "framer-motion";
import { Lightbulb, Target, Users, Zap, Globe, Award, Heart, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Typewriter from "../components/Typewriter";

export default function About() {
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
            ctx.strokeStyle = `rgba(110, 142, 251, ${0.1 * (1 - distance / 100)
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
    <div className="min-h-screen bg-gradient-to-br from-brand-dark to-brand-darker text-white px-4 py-12 overflow-hidden relative">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-brand-primary/10 to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl"></div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-8 w-8 h-8 rounded-full bg-blue-500/20"
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-2/3 right-16 w-6 h-6 rounded-full bg-purple-500/20"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-6 h-6 rounded-full bg-green-500/20"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Section: About Intro */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center py-8 px-4 max-w-3xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-brand-primary/10 border border-brand-primary/20"
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
            Where Creation meets Innovation
          </span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
        >
          <Typewriter
            words={[
              "About Creative Pair",
              "Who We Are",
              "Our Story",
            ]}
            typingSpeedMs={80}
            deleteSpeedMs={40}
            pauseMs={1300}
            cursorClassName="text-white"
          />
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-base text-brand-soft max-w-2xl mx-auto"
        >
          Founded on the belief that great ideas deserve exceptional execution, Creative Pair is
          where innovation meets artistry.
        </motion.p>
      </motion.section>

      {/* Our Story Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="px-4 md:px-16 py-8 flex flex-col lg:flex-row items-center gap-8"
      >
        {/* Text Content */}
        <motion.div variants={itemVariants} className="lg:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
          <p className="text-brand-soft mb-4 leading-relaxed">
            Creative Pair was born from a shared vision between{" "}
            <span className="font-bold text-white">Mashal Farhat</span> and{" "}
            <span className="font-bold text-white">Ammal Raheem</span> — two passionate innovators
            who believed that the best creative solutions emerge when diverse perspectives unite
            around a common goal.
          </p>
          <p className="text-brand-soft leading-relaxed">
            Since our inception, we've been dedicated to transforming complex challenges into elegant
            solutions. Our approach combines strategic thinking with creative execution, ensuring
            every project not only meets but exceeds expectations.
          </p>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          variants={itemVariants}
          className="lg:w-1/2"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(110, 142, 251, 0.2)",
            transition: { duration: 0.3 },
          }}
        >
          <div className="rounded-3xl overflow-hidden border border-brand-primary/20 backdrop-blur-md">
            <img
              src="public/Frame 6.png"
              alt="Creative team"
              className="w-full h-[250px] object-cover"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="py-8 px-4 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
      >
        {[
          { value: "2024", label: "Founded", color: "text-brand-secondary" },
          { value: "50+", label: "Projects", color: "text-brand-primary" },
          { value: "25+", label: "Happy Clients", color: "text-brand-secondary" },
          { value: "100%", label: "Success Rate", color: "text-brand-primary" },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 10px 20px rgba(110, 142, 251, 0.2)",
              transition: { duration: 0.3 },
            }}
            className="bg-brand-card/20 backdrop-blur-md rounded-3xl p-3 border border-white/10"
          >
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-brand-soft text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="py-8 px-4 md:px-16 grid md:grid-cols-2 gap-6"
      >
        <motion.div
          variants={itemVariants}
          className="bg-brand-card/20 backdrop-blur-md rounded-3xl p-4 border border-white/10"
          whileHover={{
            y: -8,
            boxShadow: "0 10px 30px rgba(110, 142, 251, 0.2)",
            transition: { duration: 0.3 },
          }}
        >
          <h4 className="flex items-center gap-2 text-lg font-semibold mb-2">
            <Globe className="text-brand-secondary" /> Vision
          </h4>
          <p className="text-brand-soft text-sm">
            Empowering businesses through innovative digital solutions.
          </p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="bg-brand-card/20 backdrop-blur-md rounded-3xl p-4 border border-white/10"
          whileHover={{
            y: -8,
            boxShadow: "0 10px 30px rgba(110, 142, 251, 0.2)",
            transition: { duration: 0.3 },
          }}
        >
          <h4 className="flex items-center gap-2 text-lg font-semibold mb-2">
            <Heart className="text-brand-primary" /> Mission
          </h4>
          <p className="text-brand-soft text-sm">
            Creating exceptional experiences that drive results.
          </p>
        </motion.div>
      </motion.section>

      {/* Core Values */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="py-12 px-4 md:px-16"
      >
        <motion.h3
          variants={itemVariants}
          className="text-2xl font-semibold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
        >
          Our Core Values
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Lightbulb className="mx-auto mb-3 text-yellow-400 w-7 h-7" />,
              title: "Innovation",
              text: "We thrive on creative ideas and modern solutions.",
            },
            {
              icon: <Users className="mx-auto mb-3 text-blue-400 w-7 h-7" />,
              title: "Collaboration",
              text: "Teamwork and partnerships drive our success.",
            },
            {
              icon: <Zap className="mx-auto mb-3 text-purple-500 w-7 h-7" />,
              title: "Efficiency",
              text: "Delivering impactful results with speed and quality.",
            },
            {
              icon: <Target className="mx-auto mb-3 text-green-400 w-7 h-7" />,
              title: "Agility",
              text: "We adapt quickly to change and embrace challenges.",
            },
            {
              icon: <Award className="mx-auto mb-3 text-orange-400 w-7 h-7" />,
              title: "Excellence",
              text: "Striving for the highest standards in everything we do.",
            },
            {
              icon: <Heart className="mx-auto mb-3 text-red-400 w-7 h-7" />,
              title: "Empathy",
              text: "Understanding and valuing the needs of people we serve.",
            },
          ].map((value, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 10px 30px rgba(110, 142, 251, 0.2)",
                transition: { duration: 0.3 },
              }}
              onHoverStart={() => setHoveredCard(idx + 1)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`p-4 rounded-3xl bg-brand-card/20 backdrop-blur-md border border-white/10 text-center transition-all duration-500 cursor-pointer ${hoveredCard && hoveredCard !== idx + 1 ? "opacity-70" : "opacity-100"
                }`}
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 
                transition-opacity duration-500 rounded-3xl"
              ></div>
              {value.icon}
              <h3 className="text-lg font-semibold text-white">{value.title}</h3>
              <p className="mt-1 text-brand-soft text-sm">{value.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}