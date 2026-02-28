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

    // Get accent colors from CSS variables
    const rootStyles = getComputedStyle(document.documentElement);
    const isDark = document.documentElement.classList.contains('dark');
    
    // Use appropriate accent based on theme
    const accentRgb = isDark ? '144,41,35' : '151,62,52'; // #902923 (dark) or #973e34 (light)
    
    const particles = [];
    const particleCount = 60;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.6 - 0.3;
        this.speedY = Math.random() * 0.6 - 0.3;
        const alpha = Math.random() * 0.2;
        this.color = `rgba(${accentRgb}, ${alpha})`;
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

    // Observe theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const newIsDark = document.documentElement.classList.contains('dark');
          const newAccentRgb = newIsDark ? '144,41,35' : '151,62,52';
          particles.forEach(p => {
            const alpha = parseFloat(p.color.split(',')[3]?.split(')')[0] || '0.1');
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

  const designOptions = [
    {
      id: 1,
      title: "UI Designs",
      path: "/projects/design/ui",
    },
    {
      id: 2,
      title: "Graphic Designs",
      path: "/projects/design/graphic",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-brand-dark text-white">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border-brand-primary bg-white/5">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium">Explore Designs</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Choose Your{" "}
            <span className="text-gradient">Design Category</span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Whether it's modern UI layouts or creative graphics, explore our
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
            className="relative bg-brand-card backdrop-blur-md rounded-3xl p-8 border border-white/10 w-72 h-40 flex items-center justify-center text-xl font-bold cursor-pointer shadow-lg transition-all duration-500 hover:shadow-glow"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 opacity-0 hover:opacity-20 transition-opacity duration-500 rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, var(--cp-accent) 0%, transparent 100%)'
              }}
            />
            <span className="text-white font-heading">{design.title}</span>
          </motion.div>
        ))}
      </motion.section>

      {/* Add custom style for glow effect */}
      <style jsx>{`
        .hover\\:shadow-glow:hover {
          box-shadow: 0 0 30px var(--cp-glow);
        }
      `}</style>
    </div>
  );
}