import React, { useState } from "react";
import gsap from "../assets/gsap.webp";
import weather from "../assets/ai.jpg";
import ecom from "../assets/ecom.jpg";
import quickaiImg from "../assets/qui.png";
import emsImg from "../assets/ems.png";
import ThreeBackground from "./ThreeBackground";

// ✅ Project Data
const allProjects = [
  {
    title: "Quick AI",
    description:
      "AI-powered content and image generation tool with background & object removal.",
    category: "React",
    image: quickaiImg,
    demoLink: "https://quickaigen.vercel.app/",
    codeLink: "https://github.com/ahmadnadeem786/Quick_ai",
  },
  {
    title: "Employee Management System",
    description:
      "Role-based employee task management system with admin & employee views.",
    category: "React",
    image: emsImg,
    demoLink: "https://employee-mana-sys.vercel.app/",
    codeLink: "https://github.com/ahmadnadeem786/Employee_Mana_Sys",
  },
  {
    title: "GSAP Landing Page",
    description: "Interactive animation using GSAP and vanilla JS.",
    category: "GSAP",
    image: gsap,
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "AI-Powered Code Reviewer",
    description:
      "Submit your code and get AI-generated suggestions for improvements, best practices, and optimizations.",
    category: "React",
    image: ecom,
    demoLink: "https://ai-powered-code-reviewer-gamma.vercel.app/",
    codeLink: "https://github.com/ahmadnadeem786/Ai_Powered_Code_Reviewer",
  },
  {
    title: "React Weather App",
    description: "Weather updates with API using React.",
    category: "React",
    image: weather,
    demoLink: "#",
    codeLink: "#",
  },
];

// ✅ Categories
const categories = ["All", "React", "GSAP", "HTML/CSS"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // ✅ Filter Projects by Category
  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((proj) => proj.category === activeCategory);

  return (
    <section id="projects" className="py-12 relative overflow-hidden">
      <ThreeBackground />
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-300">
              Projects
            </h2>
            <div className="h-1 w-20 bg-[#F2AA4CFF] mt-2 rounded"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F2AA4CFF] tracking-widest">
            
          </h2><span className="text-[#ffff]"> -- </span> 02
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`px-6 py-2 rounded-lg font-semibold transition
                ${
                  activeCategory === cat
                    ? "bg-[#F2AA4CFF] text-black shadow-lg"
                    : "bg-gray-700 text-gray-300 hover:bg-[#F2AA4CFF] hover:text-black"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer transform hover:scale-[1.05] transition-transform duration-500 border border-gray-700"
                aria-label={`${project.title} project`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white p-6 text-center"
                >
                  <h3 className="text-2xl font-bold mb-3 text-[#F2AA4CFF]">{project.title}</h3>
                  <p className="text-sm mb-5">{project.description}</p>
                  <div className="flex gap-4">
                    {project.demoLink !== "#" && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#F2AA4CFF] text-black px-5 py-2 rounded-md font-semibold hover:bg-yellow-400 transition"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.codeLink !== "#" && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-300 text-black px-5 py-2 rounded-md font-semibold hover:bg-gray-400 transition"
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No projects found in this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
