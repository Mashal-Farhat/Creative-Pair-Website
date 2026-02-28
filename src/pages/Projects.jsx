import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Globe, Code, Smartphone, Sparkles, Palette, Badge } from "lucide-react";

export default function Projects() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  // Particle Background Effect
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

    // Get accent color from CSS variable
    const rootStyles = getComputedStyle(document.documentElement);
    const isDark = document.documentElement.classList.contains('dark');
    const accentRgb = isDark ? '144,41,35' : '151,62,52'; // #902923 (dark) or #973e34 (light)

    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        const alpha = Math.random() * 0.2;
        this.color = `rgba(${accentRgb}, ${alpha})`;
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

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

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

  const projects = [
    {
      id: 1,
      icon: <Badge className="w-12 h-12 text-white" />,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio built with React and Tailwind, showcasing my work and skills.",
      technologies: ["React", "Tailwind", "HTML", "CSS", "JavaScript"],
      path: "/projects/portfolio",
    },
    {
      id: 2,
      icon: <Smartphone className="w-12 h-12 text-white" />,
      title: "Mobile App",
      description:
        "A cross-platform mobile app with Firebase backend, featuring authentication and real-time data.",
      technologies: ["Flutter", "Firebase", "Kotlin", "Java", "MySQL"],
      path: "/projects/mobile-apps",
    },
    {
      id: 3,
      icon: <Code className="w-12 h-12 text-white" />,
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with product catalog, cart, and Stripe payment integration.",
      technologies: ["Shopify"],
      path: "/projects/ecommerce",
    },
    {
      id: 4,
      icon: <Globe className="w-12 h-12 text-white" />,
      title: "Web Applications",
      description:
        "A collection of responsive and scalable web applications built with modern frameworks and backend integrations.",
      technologies: ["React", "HTML", "CSS", "JavaScript", "Tailwind"],
      path: "/projects/web-apps",
    },
    {
      id: 5,
      icon: <Palette className="w-12 h-12 text-white" />,
      title: "Design Showcase",
      description:
        "A collection of UI/UX design projects including mobile app designs, website mockups, mobile and PC game designs and creative prototypes.",
      technologies: ["Figma", "Canva"],
      path: "/projects/design",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden relative bg-brand-dark text-white">
      {/* Particle Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
      />

      {/* Page Header */}
      <section className="relative px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border-brand-primary bg-white/5"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium">
              Our Portfolio
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-heading"
          >
            Our
            <span className="text-accent"> Featured Work</span>
          </motion.h1>
          
          <p className="text-lg max-w-2xl mx-auto text-gray-400 font-body">
            Some of the projects we have built, ranging from websites to
            apps and full-stack solutions.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <motion.section
        initial="hidden"
        animate="visible"
        className="relative px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -15 }}
            onHoverStart={() => setHoveredCard(project.id)}
            onHoverEnd={() => setHoveredCard(null)}
            onClick={() => navigate(project.path)}
            className={`relative rounded-3xl p-8 border transition-all duration-500 cursor-pointer group bg-brand-card border-white/10 ${
              hoveredCard && hoveredCard !== project.id ? 'opacity-70' : 'opacity-100'
            }`}
          >
            {/* Gradient overlay */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl"
              style={{ 
                background: 'linear-gradient(135deg, var(--cp-accent) 0%, transparent 100%)'
              }}
            />

            {/* Icon */}
            <div className="mx-auto mb-6 flex items-center justify-center w-24 h-24 rounded-2xl shadow-lg bg-accent">
              {project.icon}
            </div>

            <h3 className="text-2xl font-bold mb-4 font-heading text-white">
              {project.title}
            </h3>
            
            <p className="mb-6 leading-relaxed text-gray-400 font-body">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300 font-body"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}