export type Project = {
  number: string;
  slug: string;
  title: string;
  meta: string;
  description: string;
  problem: string;
  role: string;
  tags: string[];
  href: string;
  status: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "traffic-navigation-dashboard",
    title: "Real-Time Traffic Navigation Dashboard",
    meta: "Graduation Project · 2026",
    description:
      "A driver-facing navigation experience combining route guidance with realtime traffic and incident awareness from camera and computer-vision signals.",
    problem:
      "Help road users understand directions, congestion, road context, and route changes from a single web experience.",
    role: "Designed and developed the website from scratch; built the responsive interface and connected camera/computer-vision features.",
    tags: ["React", "TypeScript", "Mapbox", "WebSocket", "YOLO/OpenCV"],
    href: "https://github.com/lyhoquy/DATN",
    status: "Case study draft",
    featured: true,
  },
  {
    number: "02",
    slug: "vietnamese-food-recognition",
    title: "Vietnamese Food Recognition & Travel Guide",
    meta: "Project · 2025",
    description:
      "A web and edge-device experience for recognizing Vietnamese food, looking up recipes, and exploring related travel destinations.",
    problem:
      "Connect food recognition, recipe information, and travel discovery in one accessible project experience.",
    role: "Worked across the web experience and the computer-vision/edge-device implementation documented in the project.",
    tags: ["Python", "Flask", "TensorFlow", "Leaflet", "Raspberry Pi"],
    href: "https://github.com/lyhoquy/PBL5",
    status: "Case study draft",
  },
  {
    number: "03",
    slug: "personal-portfolio",
    title: "Personal Portfolio Website",
    meta: "Personal project · 2026",
    description:
      "A portfolio platform in progress for presenting frontend work, technical decisions, and a growing interest in UI/UX.",
    problem:
      "Create a clear and credible place to present frontend work, project evidence, and a path to contact.",
    role: "Designed and developed the portfolio structure and responsive interface with a backend-ready content boundary.",
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

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
