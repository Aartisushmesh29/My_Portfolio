import React, { useState } from "react";
import {
  Github,
  ExternalLink,
  Code,
  Monitor,
  Award,
  Filter,
} from "lucide-react";
import glamgait from "@/assets/images/GlamGait.png";
import imageSearcher from "@/assets/images/ChitraKhoj.png";

const ProjectShowcase = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "GlamGait - E-commerce Platform",
      description:
        "A responsive full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication with JWT, an admin panel for product management, Cloudinary integration for image storage, and a sleek UI powered by Tailwind CSS.",
      tags: ["React", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
      category: "Full Stack",
      links: {
        github: "https://github.com/Aartisushmesh29/GlamGait_Shopping_App", // Replace with actual URL
        demo: "https://glamgait-shopping.vercel.app/", // Replace with actual URL
      },
      image: glamgait, // Make sure 'glamgait' is imported or defined
      featured: true,
    },
    {
      title: "Image Searcher App",
      description:
        "A React-based web app that connects with the Unsplash API to allow users to search and view high-quality images. Built with Tailwind CSS for a fully responsive UI, and includes efficient state management for seamless UX.",
      tags: ["React", "API", "Tailwind CSS", "Unsplash"],
      category: "Frontend",
      links: {
        github: "https://github.com/Aartisushmesh29/Image_searcher", // Replace with actual URL
        demo: "https://image-search-app-delta-beige.vercel.app/", // Replace with actual URL
      },
      image: imageSearcher, // Make sure 'imageSearcher' is imported or defined
      featured: false,
    },
  ];


  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="min-h-screen bg-[#04081A] py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Modern grid pattern */}
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative mb-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 relative z-10">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400">
                Projects
              </span>
            </h1>
            <div className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-70 blur-sm"></div>
          </div>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Explore my creative journey through code and design
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12 flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === category
                ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/70"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#0a1428]/60 backdrop-blur-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-cyan-900/40 border border-slate-700/30 hover:border-slate-600/50"
            >
              <div className="flex flex-col md:flex-row">
                {/* Project Image */}
                <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a1428]/50 opacity-70 group-hover:opacity-80"></div>
                </div>

                {/* Project Content */}
                <div className="md:w-1/2 p-8 relative backdrop-blur-sm bg-[#0a1428]/30 group-hover:bg-[#081020]/50 transition-all duration-300">
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-6 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 backdrop-blur-sm">
                      Featured Project
                    </div>
                  )}

                  <h3 className="text-3xl font-bold text-white mb-4 mt-2">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
                      {project.title}
                    </span>
                  </h3>

                  <p className="text-slate-300 mb-6">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full bg-slate-700/40 text-slate-300 border border-slate-600/30 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.links.github}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/50 text-white hover:text-cyan-400 hover:bg-slate-900/70 transition-all border border-slate-700/50"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.links.demo}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/50 text-white hover:text-emerald-400 hover:bg-slate-900/70 transition-all border border-slate-700/50"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
