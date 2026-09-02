export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
  context: string;
};

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
  images?: ProjectImage[];
  overview?: string;
  approach?: string[];
  metrics?: ProjectMetric[];
  limitations?: string[];
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "traffic-navigation-dashboard",
    title: "Real-Time Traffic Navigation Dashboard",
    meta: "Graduation Project · 2026",
    description:
      "A research prototype combining traffic-camera video, computer vision, anomaly detection, dynamic routing, and realtime alerts to support proactive navigation.",
    problem:
      "Help road users understand directions, congestion, road context, and route changes from a single web experience.",
    role:
      "Designed and developed the website from scratch; built the responsive interface and connected camera, routing, realtime, and computer-vision features.",
    tags: ["React", "TypeScript", "Mapbox GL", "WebSocket", "YOLOv8", "OSRM"],
    href: "https://github.com/lyhoquy/DATN",
    status: "Prototype · tested with simulation",
    featured: true,
    images: [
      {
        src: "/images/projects/datn/overview.png",
        alt: "Traffic navigation dashboard showing a route on a map",
        caption: "Route guidance and simulated vehicle position on the map.",
      },
      {
        src: "/images/projects/datn/incident-alert.png",
        alt: "Traffic incident alert with an alternate route suggestion",
        caption: "Incident alert and alternate route suggestion for the user.",
      },
      {
        src: "/images/projects/datn/z-score.png",
        alt: "Z-score chart showing a traffic anomaly",
        caption: "Z-score signal used to identify an abnormal traffic condition.",
      },
      {
        src: "/images/projects/datn/architecture.jpeg",
        alt: "DATN system architecture diagram",
        caption: "System architecture connecting CV, backend, routing, AI, and frontend services.",
      },
      {
        src: "/images/projects/datn/model-confusion-matrix.png",
        alt: "Confusion matrix for traffic incident classification",
        caption: "Confusion matrix from the reported computer-vision evaluation.",
      },
      {
        src: "/images/projects/datn/model-training.png",
        alt: "Training and accuracy charts for the traffic model",
        caption: "Training and accuracy charts from the reported model experiment.",
      },
    ],
    overview:
      "The prototype follows a Detect → Analyze → Decide → Notify pipeline. A computer-vision service extracts traffic signals from video, the backend evaluates anomalies and route impact, and the frontend receives updates through WebSocket.",
    approach: [
      "The CV Pipeline uses YOLOv8 and ByteTrack to detect and track vehicles, then extracts traffic indicators such as vehicle count, density, average speed, and stopped vehicles.",
      "A sliding window and Z-score analysis identify deviations from the recent traffic baseline instead of relying only on fixed thresholds.",
      "The Decision Engine evaluates incident severity, route impact, safe distance, and alternate route availability before choosing REROUTE, CAUTION, or KEEP_ROUTE.",
      "OSRM calculates route alternatives. Gemini translates verified technical results into natural-language alerts, with TemplateProvider as a fallback when the external AI service is unavailable.",
      "The frontend displays the route, ETA, vehicle position, traffic state, and alert. The driver remains in control and can accept or reject a suggested alternate route.",
    ],
    metrics: [
      { label: "End-to-end response", value: "578 ms", context: "Average across 50 simulated executions" },
      { label: "P95 response", value: "642 ms", context: "Reported in the simulated evaluation environment" },
      { label: "Maximum response", value: "781 ms", context: "Highest recorded measurement" },
      { label: "Model Top-1 accuracy", value: "≈95%", context: "YOLOv8n-CLS evaluation reported in the thesis" },
    ],
    limitations: [
      "The prototype was evaluated with simulated traffic and GPS data rather than a physical fleet or city-scale deployment.",
      "The reported model metrics describe the project evaluation environment and are not production guarantees.",
      "The system still needs broader field testing with real camera conditions, traffic variation, and larger deployment infrastructure.",
    ],
  },
  {
    number: "02",
    slug: "vietnamese-food-recognition",
    title: "Vietnamese Food Recognition & Culinary Guide",
    meta: "Project · 2025",
    description:
      "A web and edge-device experience that recognizes Vietnamese food, retrieves recipes, and connects each dish to regional and travel context.",
    problem:
      "Connect food recognition, recipe information, and travel discovery in one accessible project experience.",
    role:
      "Worked across the web experience and the computer-vision/edge-device implementation documented in the project.",
    tags: ["Python", "Flask", "TensorFlow", "DenseNet169", "CBAM", "Raspberry Pi"],
    href: "https://github.com/lyhoquy/PBL5",
    status: "Prototype · 30 food classes",
    images: [
      {
        src: "/images/projects/pbl5/overview.png",
        alt: "Vietnamese food recognition web interface showing a prediction result",
        caption: "Recognition result with dish information in the web interface.",
      },
      {
        src: "/images/projects/pbl5/hardware-architecture.png",
        alt: "Raspberry Pi camera connected to a Flask and DenseNet server",
        caption: "Raspberry Pi capture flow connected to the Flask model server.",
      },
      {
        src: "/images/projects/pbl5/confusion-matrix.png",
        alt: "Confusion matrix for Vietnamese food classification",
        caption: "Confusion matrix across the 30 food classes in the test set.",
      },
      {
        src: "/images/projects/pbl5/training-phase-2.png",
        alt: "Phase two training charts for the food recognition model",
        caption: "Accuracy and loss charts from the fine-tuning phase.",
      },
    ],
    overview:
      "The system accepts an uploaded image or a photo captured through a Raspberry Pi camera. A Flask server runs DenseNet169 with a CBAM attention module, then retrieves recipe and regional information for the predicted dish.",
    approach: [
      "The Raspberry Pi acts as an optional image-capture client and sends the photo to the Flask server over HTTP.",
      "DenseNet169 is fine-tuned with a CBAM attention module to classify 30 Vietnamese food categories and return a confidence score.",
      "The web interface combines the prediction with ingredients, quantities, cooking steps, tips, regional context, and related travel locations.",
      "The project includes model comparison, top-5 probabilities, attention visualizations, confusion-matrix analysis, and Raspberry Pi integration tests.",
    ],
    metrics: [
      { label: "Test accuracy", value: "87%", context: "FOOD30V2 test set across 30 food classes" },
      { label: "Weighted F1-score", value: "0.87", context: "Reported classification evaluation" },
      { label: "API response", value: "230–280 ms", context: "Including request and response processing" },
      { label: "Pi capture to result", value: "1.5–2 s", context: "Reported end-to-end device experience" },
    ],
    limitations: [
      "The model covers the selected 30 food classes rather than the full range of Vietnamese cuisine.",
      "Accuracy decreases with blurry images, poor lighting, difficult angles, multiple dishes, and visually similar dishes.",
      "The reported metrics come from the project test environment and should not be read as universal real-world accuracy.",
    ],
  },
  {
    number: "03",
    slug: "personal-portfolio",
    title: "Personal Portfolio Website",
    meta: "Supporting personal project · 2026",
    description:
      "The portfolio platform in progress for presenting frontend work, technical decisions, and a growing interest in UI/UX.",
    problem:
      "Create a clear and credible place to present frontend work, project evidence, and a path to contact.",
    role: "Designed and developed the portfolio structure and responsive interface with a backend-ready content boundary.",
    tags: ["Next.js", "React", "TypeScript", "CSS"],
    href: "https://github.com/lyhoquy/Portfolio",
    status: "Supporting / work in progress",
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
