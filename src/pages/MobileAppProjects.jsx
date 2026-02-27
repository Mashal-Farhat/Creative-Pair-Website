import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Smartphone, Sparkles, Badge } from "lucide-react";

export default function MobileAppProjects() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const canvasRef = useRef(null);

    // Color palette - matching Home page
    const colors = {
        dark: "#0A100D",
        light: "#B9BAA3",
        gray: "#D6D5C9",
        accent1: "#A22C29",
        accent2: "#902923",
        accent3: "#4a2523"
    };

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
                this.color = `rgba(162, 44, 41, ${Math.random() * 0.3})`;
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
            icon: <img src="/lingo_fusion.png" alt="Lingo Fusion" className="w-full h-full object-cover rounded-xl" />,
            title: "Lingo Fusion",
            description: "Language learning app with realtime sync and auth.",
            technologies: ["Flutter", "Dart", "Firebase"],
            gradient: "from-[#A22C29] to-[#902923]",
            hoverColor: "hover:shadow-[#A22C29]/30",
        },
        {
            id: 2,
            icon: <img src="/CWF.png" alt="Care Without Fear" className="w-full h-full object-cover rounded-xl" />,
            title: "Care Without Fear",
            description: "Digitalizing health and child care with enhanced security feature, auth and secure payments.",
            technologies: ["Java", "Node.js", "Firebase", "XML"],
            gradient: "from-[#A22C29] to-[#902923]",
            hoverColor: "hover:shadow-[#A22C29]/30",
        },
        {
            id: 3,
            icon: <img src="/buzzly.png" alt="Buzzly" className="w-full h-full object-cover rounded-xl" />,
            title: "Buzzly",
            description: "Your daily notes, reminder buddy.",
            technologies: ["Flutter", "Dart", "Firebase"],
            gradient: "from-[#A22C29] to-[#902923]",
            hoverColor: "hover:shadow-[#A22C29]/30",
        },
        {
            id: 4,
            icon: <img src="/budget_buddy.png" alt="Budget Buddy" className="w-full h-full object-cover rounded-xl" />,
            title: "Budget Buddy",
            description: "Personal finance tracker for smart budgeting.",
            technologies: ["Kotlin", "XML", "Firebase"],
            gradient: "from-[#A22C29] to-[#902923]",
            hoverColor: "hover:shadow-[#A22C29]/30",
        },
    ];

    return (
        <div className="min-h-screen overflow-hidden relative" style={{ backgroundColor: colors.dark, fontFamily: "'Montserrat', sans-serif" }}>
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full" style={{ background: `${colors.accent1}20`, border: `1px solid ${colors.accent1}30` }}>
                        <Sparkles className="w-4 h-4" style={{ color: colors.accent1 }} />
                        <span className="text-sm font-medium" style={{ color: colors.light, fontFamily: "'Montserrat', sans-serif" }}>Mobile Apps</span>
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                        style={{ color: colors.light, fontFamily: "'Montserrat', sans-serif" }}
                    >
                        Our <span style={{ color: colors.accent1 }}>Mobile Projects</span>
                    </motion.h1>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.gray, fontFamily: "'Montserrat', sans-serif" }}>
                        Cross-platform and native apps built with modern stacks.
                    </p>
                </motion.div>
            </section>

            {/* Cards */}
            <motion.section
                initial="hidden"
                animate="visible"
                className="relative px-6 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto"
            >
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        whileHover={{ y: -15, scale: 1.02 }}
                        onHoverStart={() => setHoveredCard(project.id)}
                        onHoverEnd={() => setHoveredCard(null)}
                        className={`relative rounded-3xl p-10 overflow-hidden transition-all duration-500 cursor-default group ${project.hoverColor} ${hoveredCard && hoveredCard !== project.id ? "opacity-70" : "opacity-100"}`}
                        style={{
                            backgroundColor: `${colors.dark}80`,
                            border: `1px solid ${colors.gray}10`,
                            boxShadow: `0 10px 40px rgba(0,0,0,0.3)`
                        }}
                    >
                        {/* Gradient overlay */}
                        <div
                            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-3xl`}
                        ></div>

                        {/* Icon Container - Whole card image */}
                        <div
                            className={`w-full h-64 rounded-2xl bg-gradient-to-r ${project.gradient} shadow-2xl mb-6 flex items-center justify-center overflow-hidden`}
                            style={{
                                boxShadow: `0 8px 32px ${colors.accent1}40`
                            }}
                        >
                            {project.icon}
                        </div>

                        {/* Content - Reduced font sizes */}
                        <h3 className="text-xl font-bold mb-2" style={{ color: colors.light, fontFamily: "'Montserrat', sans-serif" }}>{project.title}</h3>
                        <p className="text-sm mb-5 leading-relaxed" style={{ color: colors.gray, fontFamily: "'Montserrat', sans-serif" }}>{project.description}</p>

                        {/* Technologies - Modern tags */}
                        <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 text-sm rounded-full font-medium transition-all duration-300 hover:scale-105"
                                    style={{
                                        backgroundColor: `${colors.accent1}20`,
                                        color: colors.light,
                                        border: `1px solid ${colors.accent1}40`,
                                        fontFamily: "'Montserrat', sans-serif"
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.section>

            {/* Font imports */}
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
            `}</style>
        </div>
    )
}

