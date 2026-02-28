import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Sparkles, Badge } from "lucide-react";

export default function PortfolioWeb() {
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
                const alpha = Math.random() * 0.3;
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

    const portfolios = [
        {
            id: 1,
            icon: <Badge className="w-12 h-12 text-white" />,
            name: "Mashal Farhat",
            role: "Portfolio Website",
            description:
                "A sleek, modern portfolio highlighting projects, skills, and achievements with smooth animations.",
            technologies: ["HTML", "CSS", "JavaScript"],
            url: "https://mashal-farhat.github.io/Mashal_Portfolio/",
        },
        {
            id: 2,
            icon: <Badge className="w-12 h-12 text-white" />,
            name: "Ammal Raheem",
            role: "Portfolio Website",
            description:
                "A polished personal site featuring case studies, interactive sections, and responsive design.",
            technologies: ["HTML", "CSS", "JavaScript"],
            url: "https://ammalr.github.io/Portfolio/",
        },
    ];

    // Gradient classes for variety
    const gradientClasses = [
        "from-accent to-accent2",
        "from-accent2 to-accent",
        "from-accent/80 to-accent2/80",
        "from-accent2/80 to-accent/80"
    ];

    return (
        <div className="min-h-screen overflow-hidden relative bg-brand-dark text-white">
            {/* Particle Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
            />

            {/* Header */}
            <section className="relative px-6 py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border-brand-primary bg-white/5">
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span className="text-accent text-sm font-medium">Portfolio</span>
                    </div>
                    
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-heading"
                    >
                        Personal <span className="text-gradient">Portfolios</span>
                    </motion.h1>
                </motion.div>
            </section>

            {/* Cards */}
            <motion.section
                initial="hidden"
                animate="visible"
                className="relative px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            >
                {portfolios.map((pf, index) => (
                    <motion.div
                        key={pf.id}
                        whileHover={{ y: -15 }}
                        onHoverStart={() => setHoveredCard(pf.id)}
                        onHoverEnd={() => setHoveredCard(null)}
                        onClick={() => pf.url && window.open(pf.url, "_blank", "noopener,noreferrer")}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if ((e.key === "Enter" || e.key === " ") && pf.url) {
                                window.open(pf.url, "_blank", "noopener,noreferrer");
                            }
                        }}
                        className={`relative bg-brand-card backdrop-blur-md rounded-3xl p-8 border border-white/10 overflow-hidden transition-all duration-500 cursor-pointer group ${
                            hoveredCard && hoveredCard !== pf.id ? "opacity-70" : "opacity-100"
                        }`}
                    >
                        {/* Gradient overlay */}
                        <div 
                            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl"
                            style={{ 
                                background: 'linear-gradient(135deg, var(--cp-accent) 0%, var(--cp-accent2) 100%)'
                            }}
                        />

                        {/* Icon */}
                        <div 
                            className={`mx-auto mb-6 flex items-center justify-center w-24 h-24 rounded-2xl shadow-lg bg-gradient-to-r ${gradientClasses[index % gradientClasses.length]}`}
                        >
                            {pf.icon}
                        </div>

                        <h3 className="text-2xl font-bold mb-1 font-heading text-white">
                            {pf.name}
                        </h3>
                        
                        <p className="text-sm text-accent mb-4 font-body">
                            {pf.role}
                        </p>
                        
                        <p className="mb-6 leading-relaxed text-gray-400 font-body">
                            {pf.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                            {pf.technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1.5 bg-white/5 text-xs rounded-full text-gray-300 border border-white/10 font-body"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.section>
        </div>
    )
}