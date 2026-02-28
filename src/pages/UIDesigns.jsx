import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function UIDesign() {
  const uiProjects = [
    {
      id: 4,
      title: "Lingo Fusion",
      tools: ["Figma"],
      skills: ["App Design", "UI Design"],
      url: "https://www.figma.com/design/CHzy2LyauQy8RexkCFWPT4/lingo-fusion?node-id=0-1&t=UKUcOqj6maDtf7Js-1",
    },
    {
      id: 5,
      title: "Amber Capacitors LTD ",
      tools: ["Figma"],
      skills: ["Web Design", "UI Design"],
      url: "https://www.figma.com/design/tqSS0Vtxakl4byEwlFRwtt/Amber-Website?m=auto&t=hrqomjgvSLYYoOMt-1",
    },
    {
      id: 6,
      title: "Speed Test",
      tools: ["Figma"],
      skills: ["Web Design", "UI Components", "Responsive Design"],
      url: "https://www.figma.com/design/mgri0Iy64i7Qs7HrzGPePS/Untitled?m=auto&t=hrqomjgvSLYYoOMt-6",
    },
    {
      id: 2,
      title: "City Cruiser",
      tools: ["Figma"],
      skills: ["Game Design", "UI Design", "Responsive Design"],
      url: "https://www.figma.com/design/dAy8MHEPqkNBKGodUjvIH6/Idle-Driving-Game?node-id=0-1&t=89GB644gc9A3RmAu-1",
    },
    {
      id: 1,
      title: "Car Detailing Master",
      tools: ["Figma"],
      skills: ["Game Design", "UI Design"],
      url: "https://www.figma.com/design/TAfgKyWPNbXsp6MYQRlMg4/Car-Detailing-UI?node-id=0-1&t=ESXuGazUCv2HVbKY-1",
    },
    {
      id: 3,
      title: "Pool Merge.io",
      tools: ["Figma"],
      skills: ["Game Design", "UI Design"],
      url: "https://www.figma.com/design/Kjm53fbfwCRIhEvQrgE63b/POOL-MERGE?node-id=0-1&t=fid3y8UburOIK8NH-1",
    },
    {
      id: 7,
      title: "Portfolio Website",
      tools: ["Figma"],
      skills: ["Landing Page Design", "Minimal UI", "Responsive Design"],
      url: "https://www.figma.com/design/NnisG53SZOXm7IBYpLt0oj/Portfolio?node-id=0-1&t=XW9BtwcCAfnodDQT-1",
    },
  ];

  return (
    <div className="relative min-h-screen px-6 py-16 overflow-hidden bg-brand-dark text-white">
      {/* === Glowing Gradient Orbs === */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl bg-accent2/20"
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl bg-accent/20"
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* === Floating Particles === */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-white/30 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
          }}
          animate={{
            y: [null, -50],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}

      {/* === Page Title === */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 relative z-10 font-heading"
      >
        <span className="text-gradient">
          UI Designs
        </span>
      </motion.h1>

      {/* === Projects Grid === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {uiProjects.map((project) => (
          <motion.a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -8, scale: 1.02 }}
            className="group block bg-brand-card backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-accent/40 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-4 font-heading text-white group-hover:text-accent transition-colors">
              {project.title}
            </h3>

            <p className="text-sm mb-2 text-gray-400 font-body">Tools:</p>
            <ul className="flex flex-wrap gap-2 mb-4">
              {project.tools.map((tool, i) => (
                <li key={i} className="bg-accent/20 text-accent text-xs px-3 py-1 rounded-full font-body">
                  {tool}
                </li>
              ))}
            </ul>

            <p className="text-sm text-gray-400 mb-2 font-body">Design Skills:</p>
            <ul className="flex flex-wrap gap-2">
              {project.skills.map((skill, i) => (
                <li
                  key={i}
                  className="bg-accent2/20 text-accent2 text-xs px-3 py-1 rounded-full font-body"
                >
                  {skill}
                </li>
              ))}
            </ul>

            {/* Hover Arrow */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="mt-4 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-all"
            >
              <ArrowUpRight className="w-4 h-4" />
              <span className="text-sm font-body">View Project</span>
            </motion.div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}