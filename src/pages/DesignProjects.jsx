import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

export default function DesignProjects() {
  const navigate = useNavigate();
  const canvasRef = useRef(null);

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
    const particleCount = 60;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.6 - 0.3;
        this.speedY = Math.random() * 0.6 - 0.3;
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.3})`;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
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
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const designOptions = [
    {
      id: 1,
      title: "UI Designs",
      gradient: "from-green-400 to-teal-500",
      hoverColor: "hover:shadow-green-500/40",
      path: "/projects/design/ui",
    },
    {
      id: 2,
      title: "Graphic Designs",
      gradient: "from-pink-500 to-purple-600",
      hoverColor: "hover:shadow-pink-500/40",
      path: "/projects/design/graphic",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Particle background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
      />

      {/* Header */}
      <section className="relative text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-pink-300 text-sm font-medium">
              Explore Designs
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
              Design Category
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Whether it’s modern UI layouts or creative graphics, explore our
            curated design showcases.
          </p>
        </motion.div>
      </section>

      {/* Cards Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 z-10"
      >
        {designOptions.map((design) => (
          <motion.div
            key={design.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -12, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigate(design.path)}
            className={`relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 
              w-72 h-40 flex items-center justify-center text-xl font-bold cursor-pointer
              shadow-lg transition-all duration-500 ${design.hoverColor}`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${design.gradient} opacity-0 hover:opacity-20 transition-opacity duration-500 rounded-3xl`}
            ></div>
            {design.title}
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}
