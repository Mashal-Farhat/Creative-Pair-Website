import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Sparkles, ShoppingCart } from "lucide-react";

export default function EComProjects() {
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
                this.color = `rgba(251, 191, 36, ${Math.random() * 0.3})`; // golden glow
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
            icon: <ShoppingCart className="w-12 h-12" />,
            title: "Lastspritz",
            description: "An elegant Shopify store for selling premium perfumes with a luxurious shopping experience.",
            technologies: ["Shopify", "Liquid"],
            gradient: "from-yellow-400 to-amber-600",
            hoverColor: "hover:shadow-yellow-400/20",
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 text-sm font-medium">E-Commerce</span>
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                    >
                        Our <span className="bg-gradient-to-r from-yellow-400 to-amber-600 text-transparent bg-clip-text">E-commerce Project</span>
                    </motion.h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Shopify-powered online stores with elegant design and smooth user experience.
                    </p>
                </motion.div>
            </section>

            {/* Project Card */}
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
    );
}
