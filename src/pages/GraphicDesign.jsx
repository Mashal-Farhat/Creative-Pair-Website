import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";

export default function DesignProjects() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [selectedDesign, setSelectedDesign] = useState(null);
    const canvasRef = useRef(null);

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

        // Read CSS variables for accents
        const rootStyles = getComputedStyle(document.documentElement);
        const accentRgb = (rootStyles.getPropertyValue('--cp-accent-rgb') || '151,62,52').trim();
        const accent2Rgb = (rootStyles.getPropertyValue('--cp-accent2-rgb') || '151,62,52').trim();

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

        // Observe theme changes to update particles
        const observer = new MutationObserver(() => {
            const newRootStyles = getComputedStyle(document.documentElement);
            const newAccentRgb = (newRootStyles.getPropertyValue('--cp-accent-rgb') || '151,62,52').trim();
            const newAccent2Rgb = (newRootStyles.getPropertyValue('--cp-accent2-rgb') || '151,62,52').trim();
            
            particles.forEach(p => {
                const useAccent2 = Math.random() > 0.5;
                const base = useAccent2 ? newAccent2Rgb : newAccentRgb;
                const alpha = parseFloat(p.color.split(',')[3]?.split(')')[0] || '0.2');
                p.color = `rgba(${base},${alpha})`;
                p.shadow = `rgba(${base},${Math.max(0.6, alpha)})`;
            });
        });

        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resizeCanvas);
            observer.disconnect();
        };
    }, []);

    const projects = [
        {
            id: 1,
            image: "/scent.png",
            title: "Scents",
        },
        {
            id: 2,
            image: "/Interior Design.png",
            title: "Interior Design",
        },
        {
            id: 3,
            image: "/Jummah.png",
            title: "Jummah Mubarak",
        },
        {
            id: 4,
            image: "/Defense Day.png",
            title: "Pakistan Defense Day",
        },
        {
            id: 5,
            image: "/Independence.png",
            title: "Independence Day",
        },
    ];

    // Gradient classes for variety
    const gradientClasses = [
        "from-accent/80 to-accent2/80",
        "from-accent/70 to-accent2/70",
        "from-accent2/80 to-accent/80",
        "from-accent2/70 to-accent/70",
        "from-accent/90 to-accent2/60"
    ];

    return (
        <div className="min-h-screen relative overflow-hidden bg-brand-dark text-white">
            {/* Fancy Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5" />
            
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
            >
                <div 
                    className="absolute w-[600px] h-[600px] rounded-full blur-[120px] top-[-100px] left-[-200px] animate-pulse" 
                    style={{ 
                        background: 'linear-gradient(135deg, rgba(var(--cp-accent2-rgb),0.2), rgba(var(--cp-accent-rgb),0.18))' 
                    }} 
                />
                <div 
                    className="absolute w-[500px] h-[500px] rounded-full blur-[150px] bottom-[-100px] right-[-200px] animate-pulse" 
                    style={{ 
                        background: 'linear-gradient(135deg, rgba(var(--cp-accent-rgb),0.12), rgba(var(--cp-accent2-rgb),0.14))' 
                    }} 
                />
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
                    <div 
                        className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border-brand-primary bg-white/5"
                    >
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span className="text-accent text-sm font-medium">Graphic Designs</span>
                    </div>
                    
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-heading"
                    >
                        Our{" "}
                        <span className="text-gradient">
                            Graphic Designs
                        </span>
                    </motion.h1>
                    
                    <p className="text-lg max-w-2xl mx-auto text-gray-400 font-body">
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
                    {projects.map((project, index) => (
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
                            className={`relative cp-glass rounded-3xl p-4 transition-all duration-500 cursor-pointer group ${
                                hoveredCard && hoveredCard !== project.id ? 'opacity-70' : 'opacity-100'
                            }`}
                        >
                            {/* Gradient overlay */}
                            <div 
                                className={`absolute inset-0 bg-gradient-to-br ${gradientClasses[index % gradientClasses.length]} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}
                            />
                            
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-32 object-cover rounded-2xl mb-2 border border-white/10"
                            />
                            
                            <h3 className="text-lg font-bold text-center font-heading text-white">
                                {project.title}
                            </h3>
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
                        className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-black/60"
                        onClick={() => setSelectedDesign(null)}
                    >
                        <motion.div
                            className="relative bg-brand-card backdrop-blur-md rounded-3xl p-6 max-w-2xl w-full mx-4 border border-white/10"
                            style={{
                                boxShadow: '0 0 30px rgba(var(--cp-accent-rgb), 0.3)',
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedDesign.image}
                                alt={selectedDesign.title}
                                className="w-full h-[400px] object-contain rounded-2xl mb-4"
                            />
                            <h3 className="text-2xl font-bold text-center font-heading text-white">
                                {selectedDesign.title}
                            </h3>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}