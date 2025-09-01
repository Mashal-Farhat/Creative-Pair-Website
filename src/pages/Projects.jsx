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
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const projects = [
    {
      id: 1,
      icon: <Badge className="w-12 h-12" />,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio built with React and Tailwind, showcasing my work and skills.",
      technologies: ["React", "Tailwind", "HTML", "CSS", "JavaScript"],
      gradient: "from-blue-500 to-purple-600",
      hoverColor: "hover:shadow-blue-500/20",
      path: "/projects/portfolio",
    },
    {
      id: 2,
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App",
      description:
        "A cross-platform mobile app with Firebase backend, featuring authentication and real-time data.",
      technologies: ["Flutter", "Firebase", "Kotlin", "Java", "MySQL"],
      gradient: "from-green-500 to-teal-600",
      hoverColor: "hover:shadow-green-500/20",
      path: "/projects/mobile-apps",
    },
    {
      id: 3,
      icon: <Code className="w-12 h-12" />,
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with product catalog, cart, and Stripe payment integration.",
      technologies: ["Shopify"],
      gradient: "from-orange-500 to-red-600",
      hoverColor: "hover:shadow-orange-500/20",
      path: "/projects/ecommerce",
    },
    {
      id: 4,
      icon: <Globe className="w-12 h-12" />,
      title: "Web Applications",
      description:
        "A collection of responsive and scalable web applications built with modern frameworks and backend integrations.",
      technologies: ["React", "HTML", "CSS", "JavaScript", "Tailwind"],
      gradient: "from-blue-600 to-indigo-600",
      hoverColor: "hover:shadow-blue-600/20",
      path: "/projects/web-apps",
    },
    {
      id: 5,
      icon: <Palette className="w-12 h-12" />,
      title: "Design Showcase",
      description:
        "A collection of UI/UX design projects including mobile app designs, website mockups, mobile and PC game designs and creative prototypes.",
      technologies: ["Figma", "Canva"],
      gradient: "from-pink-500 to-purple-500",
      hoverColor: "hover:shadow-pink-500/20",
      path: "/projects/design",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden relative">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">
              Our Projects
            </span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Our
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"> Featured Work</span>
          </motion.h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
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
            className={`relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 
              overflow-hidden transition-all duration-500 cursor-pointer group
              ${project.hoverColor} ${hoveredCard && hoveredCard !== project.id
                ? "opacity-70"
                : "opacity-100"
              }`}
          >
            {/* Gradient overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
            ></div>

            {/* Icon */}
            <div
              className={`mx-auto mb-6 flex items-center justify-center 
    w-24 h-24 rounded-2xl bg-gradient-to-r ${project.gradient} shadow-lg`}
            >
              {project.icon}
            </div>

            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-black/40 text-xs rounded-full text-gray-400 border border-white/5"
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
