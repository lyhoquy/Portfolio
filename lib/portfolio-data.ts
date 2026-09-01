export type Project = {
  number: string;
  title: string;
  meta: string;
  description: string;
  tags: string[];
  href: string;
  status: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Real-Time Traffic Navigation Dashboard",
    meta: "Graduation Project · 2026",
    description:
      "A driver-facing navigation experience combining route guidance with realtime traffic and incident awareness from camera and computer-vision signals.",
    tags: ["React", "TypeScript", "Mapbox", "WebSocket", "YOLO/OpenCV"],
    href: "https://github.com/lyhoquy/DATN",
    status: "Case study draft",
  },
  {
    number: "02",
    title: "Vietnamese Food Recognition & Travel Guide",
    meta: "Project · 2025",
    description:
      "A web and edge-device experience for recognizing Vietnamese food, looking up recipes, and exploring related travel destinations.",
    tags: ["Python", "Flask", "TensorFlow", "Leaflet", "Raspberry Pi"],
    href: "https://github.com/lyhoquy/PBL5",
    status: "Case study draft",
  },
  {
    number: "03",
    title: "Personal Portfolio Website",
    meta: "Personal project · 2026",
    description:
      "A portfolio platform in progress for presenting frontend work, technical decisions, and a growing interest in UI/UX.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    href: "https://github.com/lyhoquy/Portfolio",
    status: "Work in progress",
  },
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "React",
  "React Native",
  "Zustand",
  "Git / GitHub",
  "Figma",
];

export const profile = {
  name: "Ly Ho",
  brand: "Kiandas",
  role: "Frontend Developer",
  email: "hoquyly.dev@gmail.com",
  github: "https://github.com/lyhoquy",
  linkedin: "https://www.linkedin.com/in/hoquylyka",
};

export const experience = {
  title: "Frontend Development Intern",
  company: "NCC",
  period: "Nov 2025 — Mar 2026",
  summary:
    "Built responsive React interfaces, translated designs into reusable components, integrated APIs, and collaborated with designers and developers through code reviews, debugging, and iterative improvements.",
};
