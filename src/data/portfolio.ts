import type { PortfolioData } from "@/types";
import { Github, Mail } from "lucide-react";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Carl Jefferson",
    title: "Full Stack Developer",
    description:
      "I'm a passionate developer who loves creating beautiful, functional, and user-friendly applications. With knowledge in modern web technologies, I bring ideas to life through clean code.",
  },
  about: {
    summary: `As a recent BSIT graduate, I focus on building scalable web applications and intuitive user interfaces. I’m passionate about writing clean, maintainable code and continuously learning new technologies. My goal is to grow as a full-stack developer while creating solutions that balance technical functionality with great user experiences.`,
    experience: [
      "Completed multiple academic and personal projects using React.js, Node.js, and MongoDB",
      "Built full-stack web applications from planning to deployment as part of capstone and personal work",
      "Collaborated with classmates and project teams to deliver functional, user-friendly software",
      "Participated in code reviews and applied best practices learned in coursework and internships",
      "Adapted quickly to new tools and frameworks during internships and volunteer projects",
    ],
    interests: [
      "Coding / Programming",
      "Open Source Contributions",
      "Machine Learning",
      "Mobile Development",
      "Gaming",
      "Reading Tech Blogs",
      "Watching TV Shows",
    ],
  },
  projects: [
    {
      id: crypto.randomUUID(),
      title: "Delfin Chatbot",
      description:
        "A simple chatbot that uses gemma 3 27B which is an open source LLM from Google. It can take images and text as inputs and text for output.",
      image: "/projects/chatbot-thumbnail.png",
      technologies: [
        "React",
        "Vite",
        "Gemma",
        "Zustand",
        "Tailwindcss",
        "Shadcn/ui",
        "Vercel",
      ],
      liveUrl: "https://delfin-chatbot.vercel.app",
      githubUrl: "https://github.com/poypoy252525/ai-project",
      featured: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Note AI",
      description:
        "A simple note taking app that uses AI to automatically detect the semantic meaning of the notes. It also supports Semantic search for better search experience.",
      image: "/projects/noteai-thumbnail.png",
      technologies: [
        "React",
        "PostgreSQL",
        "Node.js",
        "Express.js",
        "gemini-embedding",
        "Tailwindcss",
        "Shadcn/ui",
        "render",
        "Vercel",
        "Prisma",
      ],
      liveUrl: "https://delfin-note.vercel.app",
      githubUrl: "https://github.com/poypoy252525/NoteAI",
      featured: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Game Hub",
      description:
        "A responsive game hub built with React and Mantine UI, offering a seamless experience for game enthusiasts. ",
      image: "/projects/gamehub-thumbnail.png",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Mantine UI",
        "RAWG API",
        "Netlify",
      ],
      liveUrl: "https://delfin-game-hub.netlify.app/",
      githubUrl: "https://github.com/poypoy252525/game-hub",
      featured: true,
    },
    {
      id: crypto.randomUUID(),
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with modern web technologies, featuring dark mode, smooth animations, and contact form integration.",
      image: "/projects/portfolio-thumbnail.png",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "shadcn/ui",
      ],
      // liveUrl: "",
      githubUrl: "https://github.com/poypoy252525/portfolio",
      featured: true,
    },
    {
      id: crypto.randomUUID(),
      title: "SGG - Admin",
      description:
        "A windows application for managing tasks built with React with Electron, utilizing local storage for data persistence.",
      image: "",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwindcss",
        "Electron",
        "Prisma",
        "Sqlite",
      ],
      // liveUrl: "https://delfin-todo-app.netlify.app/",
      githubUrl: "https://github.com/poypoy252525/sgg-admin",
      featured: false,
    },
  ],
  skills: [
    {
      name: "Frontend",
      skills: [
        { name: "React", level: "intermediate" },
        { name: "TypeScript", level: "intermediate" },
        { name: "Vue.js", level: "beginner" },
        { name: "Next.js", level: "intermediate" },
        { name: "Tailwind CSS", level: "intermediate" },
        { name: "Styled Components", level: "beginner" },
        { name: "Flutter", level: "beginner" },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: "intermediate" },
        { name: "Express.js", level: "beginner" },
        { name: "Python", level: "beginner" },
        { name: "PostgreSQL", level: "beginner" },
        { name: "MongoDB", level: "intermediate" },
        { name: "GraphQL", level: "intermediate" },
        { name: "REST APIs", level: "intermediate" },
      ],
    },
    {
      name: "Tools",
      skills: [
        { name: "Git", level: "beginner" },
        // { name: "Docker", level: "intermediate" },
        // { name: "AWS", level: "intermediate" },
        { name: "Vercel", level: "intermediate" },
        { name: "Figma", level: "beginner" },
        { name: "VS Code", level: "intermediate" },
        { name: "Postman", level: "intermediate" },
        { name: "Jest", level: "beginner" },
        { name: "Electron", level: "beginner" },
      ],
    },
  ],
  contact: {
    email: "carljefferson.delfin@gmail.com",
    phone: "+63 910 359 4750",
    location: "Rodriguez, Rizal, Philippines",
    social: [
      {
        platform: "GitHub",
        url: "https://github.com/poypoy252525",
        icon: Github,
      },
      {
        platform: "Email",
        url: "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZqlrSkXtRqTqDKxHwZzksFvWwCsCNjQxckmWRjHcVwgxfBjTsJHFdKSPMrszhnhVkzXPC",
        icon: Mail,
      },
    ],
  },
};
