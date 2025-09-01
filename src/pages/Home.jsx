import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "../components/Typewriter";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  // Simulate loading (replace with actual loading logic if needed)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2-second delay for demo
    return () => clearTimeout(timer);
  }, []);

  // Particle background effect
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
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-dark to-brand-darker text-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden relative">
      {/* Custom Loader Overlay */}
      {isLoading && (
        <motion.div
          className="absolute inset-0 bg-brand-dark/90 flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ pointerEvents: isLoading ? "auto" : "none" }}
        >
          <div className="relative flex flex-col items-center">
            {/* Particle Orbit Animation */}
            <div className="relative w-24 h-24">
              <motion.div
                className="absolute w-4 h-4 rounded-full bg-brand-primary/50"
                animate={{
                  rotate: 360,
                  x: [0, 40, 0, -40, 0],
                  y: [0, 40, 0, -40, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute w-4 h-4 rounded-full bg-blue-500/50"
                animate={{
                  rotate: -360,
                  x: [0, -30, 0, 30, 0],
                  y: [0, 30, 0, -30, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              />
              <motion.div
                className="absolute w-4 h-4 rounded-full bg-purple-600/50"
                animate={{
                  rotate: 360,
                  x: [0, 20, 0, -20, 0],
                  y: [0, -20, 0, 20, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 animate-pulse"></div>
            </div>
            {/* Loading Text */}
            <motion.p
              className="mt-6 text-lg text-brand-soft font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Typewriter
                words={["Loading..."]}
                typingSpeedMs={100}
                deleteSpeedMs={0}
                pauseMs={1000}
                cursorClassName="text-brand-primary"
              />
            </motion.p>
          </div>
        </motion.div>
      )}

      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
      />

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-brand-primary/10 to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-10 h-10 rounded-full bg-blue-500/20 pointer-events-none"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-2/3 right-20 w-6 h-6 rounded-full bg-purple-500/20 pointer-events-none"
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-8 h-8 rounded-full bg-green-500/20 pointer-events-none"
        animate={{ y: [0, 25, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto"
      >
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
            Where Creation meets Innovation
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
        >
          Creative Solutions <br />
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            <Typewriter
              words={[
                "Infinite Possibilities",
                "Stunning Experiences",
                "Impactful Products",
              ]}
              typingSpeedMs={80}
              deleteSpeedMs={40}
              pauseMs={1300}
              cursorClassName="text-white"
            />
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-lg text-brand-soft text-center max-w-2xl"
        >
          Where Innovation meets Execution. Creative Pair transforms bold ideas
          into extraordinary digital experiences that captivate, engage, and
          deliver results.
        </motion.p>
      </motion.section>

      {/* Team Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full"
      >
        {/* Person 1 */}
        <motion.div
          variants={itemVariants}
          whileHover={{
            y: -10,
            boxShadow: "0 10px 30px rgba(110, 142, 251, 0.2)",
            transition: { duration: 0.3 },
          }}
          onHoverStart={() => setHoveredCard(1)}
          onHoverEnd={() => setHoveredCard(null)}
          onClick={() => navigate("/about")}
          className={`bg-brand-card/20 backdrop-blur-md rounded-3xl p-6 border border-white/10 text-center transition-all duration-500 cursor-pointer ${
            hoveredCard && hoveredCard !== 1 ? "opacity-70" : "opacity-100"
          }`}
        >
          <motion.img
            src="/Mashal.jpeg"
            alt="Mashal Farhat"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-brand-primary"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          />
          <h3 className="text-xl font-semibold">Mashal Farhat</h3>
          <p className="text-brand-primary font-medium">Creative Visionary</p>
          <p className="text-brand-soft mt-2 text-sm">
            Expert in creating visually stunning and user-friendly designs
          </p>
        </motion.div>

        {/* Person 2 */}
        <motion.div
          variants={itemVariants}
          whileHover={{
            y: -10,
            boxShadow: "0 10px 30px rgba(110, 142, 251, 0.2)",
            transition: { duration: 0.3 },
          }}
          onHoverStart={() => setHoveredCard(2)}
          onHoverEnd={() => setHoveredCard(null)}
          onClick={() => navigate("/projects")}
          className={`bg-brand-card/20 backdrop-blur-md rounded-3xl p-6 border border-white/10 text-center transition-all duration-500 cursor-pointer ${
            hoveredCard && hoveredCard !== 2 ? "opacity-70" : "opacity-100"
          }`}
        >
          <motion.img
            src="/Ammal.jpeg"
            alt="Ammal Raheem"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-brand-primary"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          />
          <h3 className="text-xl font-semibold">Ammal Raheem</h3>
          <p className="text-brand-primary font-medium">Technical Innovator</p>
          <p className="text-brand-soft mt-2 text-sm">
            Specializes in building scalable and robust applications
          </p>
        </motion.div>
      </motion.section>

      {/* Action Buttons */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-12 flex flex-col items-center justify-center relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={() => {
              console.log("Navigating to /about");
              navigate("/about");
            }}
            while Hover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition"
          >
            Get Started →
          </motion.button>
          <motion.button
            onClick={() => {
              console.log("Navigating to /projects");
              navigate("/projects");
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition"
          >
            View Our Work
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
}