import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Sparkles, Badge } from "lucide-react";

export default function PortfolioWeb() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const canvasRef = useRef(null);

    // Particle Background Effect (same style as Projects page)
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

    const portfolios = [
        {
            id: 1,
            icon: <Badge className="w-12 h-12" />,
            name: "Mashal Farhat",
            role: "Portfolio Website",
            description:
                "A sleek, modern portfolio highlighting projects, skills, and achievements with smooth animations.",
            technologies: ["HTML", "CSS", "JavaScript"],
            gradient: "from-blue-500 to-purple-600",
            hoverColor: "hover:shadow-blue-500/20",
            url: "https://mashal-farhat.github.io/Mashal_Portfolio/",
        },
        {
            id: 2,
            icon: <Badge className="w-12 h-12" />,
            name: "Ammal Raheem",
            role: "Portfolio Website",
            description:
                "A polished personal site featuring case studies, interactive sections, and responsive design.",
            technologies: ["HTML", "CSS", "JavaScript"],
            gradient: "from-pink-500 to-purple-500",
            hoverColor: "hover:shadow-pink-500/20",
            url: "https://ammalr.github.io/Portfolio/",
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
            <section className="relative px-6 py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#c471ed]/10 border border-[#c471ed]/20">
                        <Sparkles className="w-4 h-4 text-[#12c2e9]" />
                        <span className="text-[#12c2e9] text-sm font-medium">Portfolio</span>
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                    >
                        Personal <span className="bg-gradient-to-r from-[#c471ed] to-[#12c2e9] text-transparent bg-clip-text">Portfolios</span>
                    </motion.h1>
                </motion.div>
            </section>

            {/* Cards */}
            <motion.section
                initial="hidden"
                animate="visible"
                className="relative px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            >
                {portfolios.map((pf) => (
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
                        className={`relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 
              overflow-hidden transition-all duration-500 cursor-pointer group
              ${pf.hoverColor} ${hoveredCard && hoveredCard !== pf.id ? "opacity-70" : "opacity-100"
                            }`}
                    >
                        {/* Gradient overlay */}
                        <div
                            className={`absolute inset-0 bg-gradient-to-br ${pf.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                        ></div>

                        {/* Icon */}
                        <div
                            className={`mx-auto mb-6 flex items-center justify-center 
    w-24 h-24 rounded-2xl bg-gradient-to-r ${pf.gradient} shadow-lg`}
                        >
                            {pf.icon}
                        </div>

                        <h3 className="text-2xl font-bold mb-1">{pf.name}</h3>
                        <p className="text-sm text-blue-300 mb-4">{pf.role}</p>
                        <p className="text-gray-300 mb-6 leading-relaxed">{pf.description}</p>

                        <div className="flex flex-wrap gap-2">
                            {pf.technologies.map((tech, index) => (
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
    )
}
