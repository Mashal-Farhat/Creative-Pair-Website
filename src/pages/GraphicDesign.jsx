import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";

export default function DesignProjects() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [selectedDesign, setSelectedDesign] = useState(null);
    const canvasRef = useRef(null);

    // Particle + Glow Background Effect (handled below and driven by CSS variables)
    // Particle + Glow Background Effect (colors derived from CSS variables so theme updates are respected)
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

        // read CSS variables for accents (fallback to sensible defaults)
        const rootStyles = getComputedStyle(document.documentElement);
        const accentRgb = (rootStyles.getPropertyValue('--cp-accent-rgb') || '255,122,48').trim();
        const accent2Rgb = (rootStyles.getPropertyValue('--cp-accent2-rgb') || '70,92,136').trim();

        const particles = [];
        const particleCount = 60;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.7;
                this.speedX = Math.random() * 0.6 - 0.3;
                this.speedY = Math.random() * 0.6 - 0.3;
                // alternate between accent2 and accent hues for a richer palette
                const useAccent2 = Math.random() > 0.5;
                const base = useAccent2 ? accent2Rgb : accentRgb;
                const alpha = 0.12 + Math.random() * 0.28;
                this.color = `rgba(${base},${alpha})`;
                this.shadow = `rgba(${base},${Math.max(0.6, alpha)})`;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
                if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.shadowBlur = 12;
                ctx.shadowColor = this.shadow;
                ctx.fill();
                ctx.shadowBlur = 0;
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
            image: "/scent.png",
            title: "Scents",
            gradient: "from-pink-500 to-purple-500",
            hoverColor: "hover:shadow-pink-500/20",
        },
        {
            id: 2,
            image: "/Interior Design.png",
            title: "Interior Design",
            gradient: "from-blue-500 to-purple-600",
            hoverColor: "hover:shadow-blue-500/20",
        },
        {
            id: 3,
            image: "/Jummah.png",
            title: "Jummah Mubarak",
            gradient: "from-green-500 to-teal-600",
            hoverColor: "hover:shadow-green-500/20",
        },
        {
            id: 4,
            image: "/Defense Day.png",
            title: "Pakistan Defense Day",
            gradient: "from-orange-500 to-red-600",
            hoverColor: "hover:shadow-orange-500/20",
        },
        {
            id: 5,
            image: "/Independence.png",
            title: "Independence Day",
            gradient: "from-orange-500 to-red-600",
            hoverColor: "hover:shadow-orange-500/20",
        },
    ];

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ background: 'var(--cp-bg)', color: 'var(--cp-text)' }}>
            {/* Fancy Background */}
            {/* background overlay that respects theme variables */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0))' }} />
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
            >
                <div className="absolute w-[600px] h-[600px] rounded-full blur-[120px] top-[-100px] left-[-200px] animate-pulse" style={{ background: 'linear-gradient(135deg, rgba(var(--cp-accent2-rgb),0.2), rgba(var(--cp-accent-rgb),0.18))' }} />
                <div className="absolute w-[500px] h-[500px] rounded-full blur-[150px] bottom-[-100px] right-[-200px] animate-pulse" style={{ background: 'linear-gradient(135deg, rgba(var(--cp-accent-rgb),0.12), rgba(var(--cp-accent2-rgb),0.14))' }} />
            </motion.div>
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
            />

            {/* Header */}
            <section className="relative px-6 py-16 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full" style={{ background: 'linear-gradient(90deg, rgba(var(--cp-accent2-rgb),0.06), rgba(var(--cp-accent-rgb),0.06))', border: '1px solid rgba(var(--cp-accent-rgb),0.12)' }}>
                        <Sparkles className="w-4 h-4" style={{ color: 'rgba(var(--cp-accent-rgb),0.95)' }} />
                        <span style={{ color: 'rgba(var(--cp-accent-rgb),0.92)' }} className="text-sm font-medium">Graphic Designs</span>
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                    >
                        Our{" "}
                        <span className="text-gradient">
                            Graphic Designs
                        </span>
                    </motion.h1>
                    <p className="text-lg max-w-2xl mx-auto cp-text-muted">
                        Creative graphic designs crafted for visual impact and storytelling.
                    </p>
                </motion.div>
            </section>

            {/* Grid Layout */}
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
                className="relative px-6 pb-20 max-w-6xl mx-auto z-10"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            whileHover={{ y: -10 }}
                            onHoverStart={() => setHoveredCard(project.id)}
                            onHoverEnd={() => setHoveredCard(null)}
                            onClick={() => setSelectedDesign(project)}
                            className={`relative cp-glass rounded-3xl p-4 transition-all duration-500 cursor-pointer group ${project.hoverColor} ${hoveredCard && hoveredCard !== project.id ? 'opacity-70' : 'opacity-100'}`}
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                            ></div>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-32 object-cover rounded-2xl mb-2"
                            />
                            <h3 className="text-lg font-bold text-center">{project.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Dialog Box */}
            <AnimatePresence>
                {selectedDesign && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md"
                        style={{ background: 'rgba(0,0,0,0.6)' }}
                        onClick={() => setSelectedDesign(null)}
                    >
                        <motion.div
                            className="relative cp-glass rounded-3xl p-6 max-w-2xl w-full mx-4"
                            style={{
                                boxShadow: "0 0 20px rgba(249, 168, 212, 0.2)",
                                background:
                                    "linear-gradient(to bottom right, rgba(249, 168, 212, 0.1), rgba(219, 39, 119, 0.1))",
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedDesign.image}
                                alt={selectedDesign.title}
                                className="w-full h-[400px] object-contain rounded-2xl mb-4"
                            />
                            <h3 className="text-2xl font-bold text-center">
                                {selectedDesign.title}
                            </h3>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
