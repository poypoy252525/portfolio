import type { PortfolioData } from "@/types";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Carl Jefferson",
    title: "Full Stack Developer",
    description:
      "I'm a passionate developer who loves creating beautiful, functional, and user-friendly applications. With expertise in modern web technologies, I bring ideas to life through clean code.",
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
      id: "1",
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.",
      image: "",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Stripe",
        "Redux",
        "Express",
      ],
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/carlj/ecommerce-platform",
      featured: true,
    },
    {
      id: "2",
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      image: "",
      technologies: ["Vue.js", "Firebase", "Vuex", "Socket.io", "Tailwind CSS"],
      liveUrl: "https://demo-taskapp.com",
      githubUrl: "https://github.com/carlj/task-management",
      featured: true,
    },
    {
      id: "3",
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that provides current conditions, forecasts, and weather maps with geolocation support and favorite locations.",
      image: "",
      technologies: [
        "React",
        "TypeScript",
        "OpenWeather API",
        "Recharts",
        "Styled Components",
      ],
      liveUrl: "https://demo-weather.com",
      githubUrl: "https://github.com/carlj/weather-dashboard",
      featured: false,
    },
    {
      id: "4",
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with modern web technologies, featuring dark mode, smooth animations, and contact form integration.",
      image: "",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "shadcn/ui",
      ],
      liveUrl: "https://carlj-portfolio.com",
      githubUrl: "https://github.com/carlj/portfolio",
      featured: true,
    },
    {
      id: "5",
      title: "Blog Platform",
      description:
        "A full-featured blog platform with content management, user authentication, commenting system, and SEO optimization.",
      image: "",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth", "MDX"],
      liveUrl: "https://demo-blog.com",
      githubUrl: "https://github.com/carlj/blog-platform",
      featured: false,
    },
    {
      id: "6",
      title: "Chat Application",
      description:
        "Real-time chat application with rooms, private messaging, file sharing, and emoji support.",
      image: "",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://demo-chat.com",
      githubUrl: "https://github.com/carlj/chat-app",
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
        { name: "REST APIs", level: "advanced" },
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
        { name: "VS Code", level: "advanced" },
        { name: "Postman", level: "intermediate" },
        { name: "Jest", level: "beginner" },
        { name: "Electron", level: "beginner" },
      ],
    },
  ],
  contact: {
    email: "carlj@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    social: [
      {
        platform: "GitHub",
        url: "https://github.com/carlj",
        icon: "github",
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/carlj",
        icon: "linkedin",
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/carlj",
        icon: "twitter",
      },
      {
        platform: "Email",
        url: "mailto:carlj@example.com",
        icon: "mail",
      },
    ],
  },
};
