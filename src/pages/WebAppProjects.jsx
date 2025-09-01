import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Code, Sparkles, Badge } from "lucide-react";

export default function WebAppProjects() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const canvasRef = useRef(null);

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
            icon: <img src="/public/scents.png" alt="Scents" className="w-15 h-15 rounded-full" />,
            title: "Scents",
            description: "Elegant product showcase site with smooth interactions.",
            technologies: ["HTML", "CSS", "JavaScript"],
            gradient: "from-blue-500 to-purple-600",
            hoverColor: "hover:shadow-blue-500/20",
            url: "https://ammalr.github.io/Scents/",
        },
        {
            id: 2,
            icon: <Code className="w-12 h-12" />,
            title: "Botanica Organica",
            description: "Nature-inspired brand site with responsive design.",
            technologies: ["HTML", "CSS", "JavaScript"],
            gradient: "from-green-500 to-teal-600",
            hoverColor: "hover:shadow-green-500/20",
            url: "https://ammalr.github.io/BotanicaOrganica/",
        },
        {
            id: 3,
            icon: <img src="/public/icm_logo.png" alt="ICM" className="w-12 h-12 rounded-full"/>,
            title: "ICM US",
            description: "A corporate WordPress website tailored for the US audience.",
            technologies: ["WordPress"],
            gradient: "from-red-500 to-orange-600",
            hoverColor: "hover:shadow-red-500/20",
            url: "http://www.icmsh.us",
        },
        {
            id: 4,
            icon: <img src="/public/icm_logo.png" alt="ICM" className="w-16 h-16 rounded-full"/>,
            title: "ICM Canada",
            description: "A professional WordPress site built for Canadian users.",
            technologies: ["WordPress"],
            gradient: "from-indigo-500 to-pink-600",
            hoverColor: "hover:shadow-indigo-500/20",
            url: "http://www.icmsh.ca",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden relative">
            {/* Particle Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
            />

            {/* Header */}
            <section className="relative px-6 py-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#20bdff]/10 border border-[#20bdff]/20">
                        <Sparkles className="w-4 h-4 text-[#5433ff]" />
                        <span className="text-[#5433ff] text-sm font-medium">Web Apps</span>
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                    >
                        Our <span className="bg-gradient-to-r from-[#5433ff] to-[#20bdff] text-transparent bg-clip-text">Web Projects</span>
                    </motion.h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Responsive sites and web apps with modern interactions.
                    </p>
                </motion.div>
            </section>

            {/* Cards */}
            <motion.section
                initial="hidden"
                animate="visible"
                className="relative px-6 pb-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            >
                {projects.map((project) => (
                    <motion.a
                        key={project.id}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -15 }}
                        onHoverStart={() => setHoveredCard(project.id)}
                        onHoverEnd={() => setHoveredCard(null)}
                        className={`relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 
              overflow-hidden transition-all duration-500 cursor-pointer group
              ${project.hoverColor} ${hoveredCard && hoveredCard !== project.id ? "opacity-70" : "opacity-100"
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

                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

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
                    </motion.a>
                ))}
            </motion.section>
        </div>
    )
}
