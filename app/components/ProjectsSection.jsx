"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Collaborative Document Editor",
    description: "This is a user-friendly, real-time collaborative document editor designed for teams or individuals working together on projects.",
    image: "/projects/colab.png",
    tag: ["All", "Next.js"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Unlock Your Chess Potential",
    description: "An interactive platform designed to help users improve their chess skills and play with friends.",
    image: "/projects/2.png",
    tag: ["All", "Next.js"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Write & Inspire: Share Your Journey",
    description: "A blogging platform where users can share their personal stories, insights, and inspire others through writing.",
    image: "/projects/3.png",
    tag: ["All", "Next.js"],
    gitUrl: "/",
    previewUrl: "https://getoblog.netlify.app/",
  },
  {
    id: 7,
    title: "Global Learning: Your Multilingual Educational Hub",
    description: "An educational platform supporting multiple languages for different users.",
    image: "/projects/6.png",
    tag: ["All", "Next.js"],
    gitUrl: "https://github.com/Vaibhav-2-2?tab=repositories",
    previewUrl: "https://eduplatf.netlify.app",
  },
  {
    id: 10,
    title: "Toco Shop",
    description: "A basic e-commerce webpage showcasing products and information for Toco Shop, allowing users to browse available items.",
    image: "/projects/9.png",
    tag: ["All", "javascript"],
    gitUrl: "https://github.com/Vaibhav-2-2?tab=repositories",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Calculator",
    description: "A web-based calculator featuring basic operations.",
    image: "/projects/1.png",
    tag: ["All", "javascript"],
    gitUrl: "https://github.com/Vaibhav-2-2?tab=repositories",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Countdown timer",
    description: "A simple countdown timer application that helps users track how much time is left until the next year starts.",
    image: "/projects/4.png",
    tag: ["All", "javascript"],
    gitUrl: "https://github.com/Vaibhav-2-2?tab=repositories",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Currency converter",
    description: "An application that allows users to convert between various currencies in real-time, providing live exchange rates.",
    image: "/projects/5.png",
    tag: ["All", "javascript"],
    gitUrl: "https://github.com/Vaibhav-2-2?tab=repositories",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "GitHub profile viewer",
    description: "A tool that enables users to view GitHub profiles and repositories, offering insights into contributors' work and projects.",
    image: "/projects/7.png",
    tag: ["All", "javascript"],
    gitUrl: "https://github.com/Vaibhav-2-2?tab=repositories",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Movies Api",
    description: "An API-based application that allows users to search, browse, and discover information about movies from a vast database.",
    image: "/projects/8.png",
    tag: ["All", "javascript"],
    gitUrl: "https://github.com/Vaibhav-2-2?tab=repositories",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "todo app",
    description: "A simple yet effective to-do list application that helps users organize tasks and enhance productivity.",
    image: "/projects/10.png",
    tag: ["All", "javascript"],
    gitUrl: "https://github.com/Vaibhav-2-2?tab=repositories",
    previewUrl: "/",
  },
];



const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Next.js"
          isSelected={tag === "Next.js"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="javascript"
          isSelected={tag === "javascript"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;