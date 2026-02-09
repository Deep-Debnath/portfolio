import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiFramer,
  SiRedux,
  SiPostman,
  SiAxios,
  SiVite,
  SiVitest,
  SiJest,
  SiVsco,
  SiVercel,
  SiNetlify,
  SiGithubcopilot,
  SiWebauthn,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

const skillIcons: Skill[] = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },

  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Redux Toolkit", icon: SiRedux },

  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Material UI", icon: SiMui },
  { name: "Framer Motion", icon: SiFramer },

  { name: "Vite", icon: SiVite },
  { name: "Axios", icon: SiAxios },

  { name: "Jest", icon: SiJest },
  { name: "Vitest", icon: SiVitest },
  { name: "Performance Optimization", icon: FaReact },

  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "NPM", icon: FaNpm },

  { name: "Postman", icon: SiPostman },
  { name: "Figma", icon: FaFigma },

  { name: "VS Code", icon: SiVsco },
  { name: "GitHub Copilot", icon: SiGithubcopilot },

  { name: "Vercel", icon: SiVercel },
  { name: "Netlify", icon: SiNetlify },

  { name: "Web Accessibility (a11y)", icon: SiWebauthn },
];
const skills = [
  {
    title: "Frontend Frameworks",
    skills: "React, Next.js (App Router), TypeScript",
  },
  {
    title: "Core Web",
    skills: "HTML5, CSS3, JavaScript (ES6+)",
  },
  {
    title: "State Management",
    skills: "Redux Toolkit, Zustand, React Context API",
  },
  {
    title: "Styling & UI",
    skills: "Tailwind CSS, Material UI (MUI), Framer Motion, Bootstrap",
  },
  {
    title: "Design & UX",
    skills: "Figma, Responsive Design, UI Consistency",
  },
  {
    title: "Testing",
    skills: "Vitest, React Testing Library, Jest",
  },
  {
    title: "Build & Tooling",
    skills: "Vite, npm, Git, GitHub",
  },
  {
    title: "Deployment",
    skills: "Vercel, Netlify, Github Pages",
  },
  {
    title: "Web Practices",
    skills: "REST APIs, Performance Optimization, SEO Basics",
  },
];

export { skillIcons, skills };
