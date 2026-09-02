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

export type UXDecision = {
  decision: string;
  reason: string;
  implementation: string;
};

export type Project = {
  number: string;
  slug: string;
  title: string;
  meta: string;
  description: string;
  problem: string;
  role: string;
  responsibilities: string[];
  constraints: string[];
  uxDecisions: UXDecision[];
  tags: string[];
  href: string;
  liveDemo?: string;
  status: string;
  featured?: boolean;
  images?: ProjectImage[];
  overview?: string;
  approach?: string[];
  metrics?: ProjectMetric[];
  outcome?: string;
  reflection?: string;
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
      "Help road users understand directions, congestion, road context, and route changes from a single web experience without requiring constant manual monitoring.",
    role:
      "Frontend Developer responsible for the web interface and its integration with realtime traffic, routing, camera, and computer-vision features.",
    responsibilities: [
      "Designed and developed the web interface from scratch.",
      "Built responsive layouts for the map, route, traffic state, and incident alert views.",
      "Connected frontend state to backend REST and WebSocket events.",
      "Integrated the UI with Mapbox GL, route data, simulated GPS, and computer-vision signals.",
      "Implemented the accept/reject interaction for alternate route proposals.",
    ],
    constraints: [
      "The prototype was evaluated with simulated GPS and traffic data rather than a physical fleet.",
      "Traffic updates can arrive as asynchronous WebSocket events and need normalization before entering UI state.",
      "Routing and alert decisions must remain deterministic; the language model only explains an already-verified decision.",
    ],
    uxDecisions: [
      {
        decision: "Prioritize map context and route status.",
        reason: "A driver needs to understand location, route, ETA, and traffic impact quickly.",
        implementation: "The main interface keeps route guidance, vehicle position, traffic state, and incident feedback in one map-centered view.",
      },
      {
        decision: "Keep the driver in control of route changes.",
        reason: "An automated recommendation should support, not replace, the user's final navigation decision.",
        implementation: "Incident alerts present an alternate route proposal with explicit accept and reject actions.",
      },
      {
        decision: "Separate technical detection from user-facing explanation.",
        reason: "Raw model and anomaly data is difficult to interpret while navigating.",
        implementation: "The Decision Engine determines the route state, while the alert layer converts verified values into readable notification copy.",
      },
    ],
    tags: ["React", "TypeScript", "Mapbox GL", "WebSocket", "YOLOv8", "OSRM"],
    href: "https://github.com/lyhoquy/DATN",
    status: "Prototype · tested with simulation",
    featured: true,
    images: [
      { src: "/images/projects/datn/overview.png", alt: "Traffic navigation dashboard showing a route on a map", caption: "Route guidance and simulated vehicle position on the map." },
      { src: "/images/projects/datn/incident-alert.png", alt: "Traffic incident alert with an alternate route suggestion", caption: "Incident alert and alternate route suggestion for the user." },
      { src: "/images/projects/datn/z-score.png", alt: "Z-score chart showing a traffic anomaly", caption: "Z-score signal used to identify an abnormal traffic condition." },
      { src: "/images/projects/datn/architecture.jpeg", alt: "DATN system architecture diagram", caption: "System architecture connecting CV, backend, routing, AI, and frontend services." },
      { src: "/images/projects/datn/model-confusion-matrix.png", alt: "Confusion matrix for traffic incident classification", caption: "Confusion matrix from the reported computer-vision evaluation." },
      { src: "/images/projects/datn/model-training.png", alt: "Training and accuracy charts for the traffic model", caption: "Training and accuracy charts from the reported model experiment." },
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
    outcome:
      "The integrated prototype demonstrated a complete route from traffic signals and simulated GPS data to a user-facing incident alert and alternate route proposal.",
    reflection:
      "The project showed that realtime product UX depends on more than displaying live data. The interface must also explain state changes, preserve user control, and make system confidence understandable.",
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
      "Help users move from an uncertain food image to a useful next step: understanding the dish, learning how to cook it, and discovering its regional context.",
    role:
      "Frontend Developer working across the web experience and the computer-vision/edge-device implementation documented in the project.",
    responsibilities: [
      "Built the Flask-based web experience for image upload and prediction results.",
      "Connected the prediction response to recipe and regional data sources.",
      "Supported image capture from Raspberry Pi and transfer to the server.",
      "Presented confidence, comparison, attention visualizations, recipe content, and travel context.",
      "Tested the upload, prediction, Raspberry Pi, and result-display flows.",
    ],
    constraints: [
      "The model covers 30 selected food classes rather than the full range of Vietnamese cuisine.",
      "The experience depends on image quality, lighting, camera angle, and visual similarity between dishes.",
      "Raspberry Pi capture introduces a device-to-server step before the result can be displayed.",
    ],
    uxDecisions: [
      {
        decision: "Turn recognition into a guided information flow.",
        reason: "A dish name alone does not answer what the user can do next.",
        implementation: "The result view continues from prediction and confidence into ingredients, cooking steps, tips, regional information, and map context.",
      },
      {
        decision: "Expose confidence and model comparison.",
        reason: "Users need context for interpreting an AI prediction, especially when dishes look similar.",
        implementation: "The interface presents confidence, top-5 probabilities, comparison information, and visual evaluation evidence.",
      },
      {
        decision: "Support both upload and physical capture.",
        reason: "A web-only upload flow does not demonstrate the intended edge-device use case.",
        implementation: "The Flask server accepts user images and images captured by a Raspberry Pi camera over HTTP.",
      },
    ],
    tags: ["Python", "Flask", "TensorFlow", "DenseNet169", "CBAM", "Raspberry Pi"],
    href: "https://github.com/lyhoquy/PBL5",
    status: "Prototype · 30 food classes",
    images: [
      { src: "/images/projects/pbl5/overview.png", alt: "Vietnamese food recognition web interface showing a prediction result", caption: "Recognition result with dish information in the web interface." },
      { src: "/images/projects/pbl5/hardware-architecture.png", alt: "Raspberry Pi camera connected to a Flask and DenseNet server", caption: "Raspberry Pi capture flow connected to the Flask model server." },
      { src: "/images/projects/pbl5/confusion-matrix.png", alt: "Confusion matrix for Vietnamese food classification", caption: "Confusion matrix across the 30 food classes in the test set." },
      { src: "/images/projects/pbl5/training-phase-2.png", alt: "Phase two training charts for the food recognition model", caption: "Accuracy and loss charts from the fine-tuning phase." },
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
    outcome:
      "The project connected a trained image-classification model to a usable web flow that combines recognition, cooking guidance, and Vietnamese regional context.",
    reflection:
      "This project clarified that a useful AI interface needs to communicate uncertainty and provide a meaningful next action instead of stopping at a prediction label.",
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
      "A deployed portfolio that presents frontend work, technical skills, experience, and project evidence in a clearer structure than a resume alone.",
    problem:
      "Create a public website that could present projects, skills, and experience in a more structured and professional way than a resume alone.",
    role: "Frontend Developer working independently across planning, content structure, responsive implementation, interactions, and deployment.",
    responsibilities: [
      "Designed and developed the website from scratch.",
      "Built responsive layouts for different screen sizes.",
      "Created reusable sections for identity, work, process, about, and contact.",
      "Organized project and personal information into a clear data structure.",
      "Deployed the website for public access and used Git for version control.",
    ],
    constraints: [
      "The portfolio must stay scannable for recruiters while still presenting deeper technical evidence.",
      "The project is primarily a frontend project, not a formal UI/UX research case study.",
      "UX decisions are based on independent learning, responsive principles, accessibility considerations, and iterative browser review.",
    ],
    uxDecisions: [
      {
        decision: "Structure the portfolio as a clear reading flow.",
        reason: "Visitors need to understand who I am, what I build, how I work, and how to contact me.",
        implementation: "The page moves from identity to selected work, process, about, and contact.",
      },
      {
        decision: "Make project evidence easier to scan.",
        reason: "Recruiters should be able to verify the work before reading every technical detail.",
        implementation: "Featured work appears before supporting projects, with direct links to screenshots, case studies, and source code.",
      },
      {
        decision: "Keep navigation available on smaller screens.",
        reason: "A long single-page portfolio becomes difficult to explore if navigation disappears after the first viewport.",
        implementation: "A floating responsive navigation remains available while scrolling through the page.",
      },
    ],
    tags: ["Next.js", "React", "TypeScript", "CSS", "Git", "GitHub"],
    href: "https://github.com/lyhoquy/Portfolio",
    liveDemo: "https://lyhoquy.github.io/Portfolio/",
    status: "Supporting / work in progress",
    overview:
      "The portfolio uses a component-based structure, reusable project data, responsive CSS, dynamic case-study routes, static assets, and a deployment workflow backed by Git.",
    approach: [
      "Built the visual structure and reusable UI sections from scratch.",
      "Separated project content from presentation so project details can evolve independently from the page layout.",
      "Used responsive composition, spacing, typography, semantic headings, skip navigation, and visible focus states to support usability.",
      "Documented project evidence and technical decisions through individual case-study pages instead of relying only on the homepage.",
    ],
    outcome:
      "The result is a public portfolio that presents frontend work, technical skills, and experience in a more structured way than a traditional resume.",
    reflection:
      "This project helped me understand that a portfolio is also an information system. Content hierarchy, navigation, responsive behavior, accessibility, and evidence determine how quickly a visitor can understand the work.",
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
