// Single source of truth for site copy. Edit this file to change content —
// components should never hardcode copy that lives here.

export const personal = {
  name: "Braden Garcia",
  role: "IT Technician → Software / Systems Engineer",
  location: "New York, NY",
  email: "bradengarcia19@gmail.com",
  linkedin: "https://linkedin.com/in/braden-garcia-49a35b213",
  github: "https://github.com/bgverz",
  githubHandle: "bgverz",
};

export type BootLine = { prompt: string; cmd: string } | { output: string };

// Lines rendered in sequence in the hero boot sequence.
const bootLines: BootLine[] = [
  { prompt: "~", cmd: "whoami" },
  { output: personal.name },
  { prompt: "~", cmd: "cat role.txt" },
  { output: personal.role },
  { prompt: "~", cmd: "./init --site" },
  { output: "booting portfolio… done." },
];

export const boot = { lines: bootLines };

export const about = {
  heading: "about",
  paragraphs: [
    "I studied Computer Science at Rutgers, and I'm currently working as an IT Technician at Next Management in New York. College is where things actually clicked for me, not any one specific class, but the way CS forces you to break a problem down and think it through. That's stuck with me, and it's how I approach anything technical now.",
    "IT is a good teacher for that kind of thinking. You're dealing with real devices, real people locked out of real accounts, systems that are supposed to work a certain way and don't. I bring that same mindset to building software. errmem, one of the projects below, came out of a problem I kept running into myself, not something I invented just to have a project to show.",
    "I don't have one specific job title I'm chasing next. Tech is moving fast enough right now that I'd rather stay open to different kinds of problems than lock myself into one lane too early. What actually matters to me is the type of work, not the title attached to it: solving real technical problems and building things that hold up.",
    "Outside of work, I hike a lot. Mount Tammany is my regular spot, but the Jewell Trail up Mount Washington and climbing Mount Zas in Greece are two I still think about. I play and watch soccer, and I'm a Manchester City fan. I'm also genuinely into music and sampling, and that's not a coincidence given two of the projects on this site: BlessedEar came from caring about how music recommendations actually work, and the SP-404 Sampler exists because I wanted to build the sampling process itself, not just use someone else's tool for it.",
  ],
};

export const education = {
  school: "Rutgers University",
  degree: "B.S. Computer Science",
  date: "May 2026",
};

export const experience = [
  {
    role: "Information Technology Technician",
    org: "Next Management",
    location: "New York, NY",
    date: "May 2026 — Present",
    bullets: [
      "Architected and deployed a self-hosted Shelf asset tracking system on Ubuntu, establishing the organization's first standardized asset inventory process from scratch, tagging all hardware across the environment",
      "Led migration of endpoint management from N-able RMM to Jamf, reconfiguring device policies, profiles, and automation workflows across the managed device fleet",
      "Administered Microsoft 365 environments via Entra ID and Microsoft Admin Center — user identity lifecycle, access provisioning, and security configuration across multiple client organizations",
      "Delivered frontline technical support in an MSP environment: remote troubleshooting and ticketing across diverse client infrastructure",
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  stack: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    name: "errmem",
    description:
      "errmem is a tool that remembers every coding error you've run into before and exactly how you fixed it, so you never waste time solving the same problem twice. It's smart enough to recognize the same underlying issue even when the error message is worded completely differently. Everything runs locally on your machine instead of depending on the cloud, and it's fully tested and packaged for a simple one-line install.",
    stack: ["Python", "sentence-transformers", "pytest", "GitHub Actions", "pipx", "SQLite"],
    href: `https://github.com/${personal.githubHandle}/errmem`,
  },
  {
    name: "LeadFinder",
    description:
      "LeadFinder is a tool built for a real investment firm to automatically find and rank promising investor leads, replacing hours of manual research with a few minutes of automated searching. It pulls information from multiple public data sources and scores each lead so the best opportunities rise to the top. Results come out as a color-coded spreadsheet anyone on the team can open and use immediately, no technical background required. It's been deployed and is actively used by the firm today.",
    stack: ["Python", "Apollo.io API", "Census/SEC/ATTOM APIs", "openpyxl"],
    href: `https://github.com/${personal.githubHandle}/lead-finder`,
  },
  {
    name: "BlessedEar",
    description:
      "BlessedEar is a music recommendation platform that builds personalized playlists based on what you actually listen to on Spotify. Instead of looping the same handful of songs, it analyzes hundreds of tracks at once to keep recommendations fresh and varied. Getting it to work reliably meant solving real problems with Spotify's own API, and it now succeeds on virtually every request. It's a full web app with secure login, built end to end.",
    stack: ["Python", "Spotify API", "scikit-learn", "Flask", "FastAPI", "React", "Next.js", "OAuth2"],
    href: `https://github.com/${personal.githubHandle}/BlessedEar`,
  },
  {
    name: "StudyForge",
    description:
      "StudyForge turns any PDF into an interactive study buddy: upload a textbook chapter or a set of notes, and ask it questions in plain English. It answers in real time as you type, generates flashcards automatically, and finds the exact right passage to reference using the same kind of search technology behind modern AI tools. A dedicated performance push cut response times by 75%. The result is a fast, polished tool that makes studying dense material a lot less painful.",
    stack: ["Next.js", "FastAPI", "Pinecone", "Groq API", "TypeScript", "Tailwind CSS", "sentence-transformers", "Framer Motion"],
    href: "https://github.com/ShaunM042/StudyForge",
  },
  {
    name: "FlickIQ",
    description:
      "FlickIQ is a movie recommendation engine trained on 25 million real ratings across tens of thousands of movies, combining two different recommendation techniques to suggest films people actually end up liking. It serves personalized picks, similar-movie suggestions, and trending titles in real time, complete with posters and details pulled in automatically. It's a collaborative project, and Braden is the primary contributor behind most of the codebase.",
    stack: ["Python", "LightFM", "FastAPI", "Streamlit", "PostgreSQL", "pgvector", "TMDB API"],
    href: "https://github.com/ShaunM042/FlickIQ",
  },
  {
    name: "SP-404 Sampler",
    description:
      "A browser-based recreation of the Roland SP-404, a real piece of hardware musicians use to chop up and remix audio samples. Upload any song, slice it into pieces across a 16-pad grid, and manipulate the speed, pitch, and tone in real time, no hardware required. It includes a full beat sequencer and support for real MIDI controllers, plus effects like vinyl distortion and lo-fi warble pulled straight from the original device. Projects are saved right in the browser, so you can pick up where you left off.",
    stack: ["TypeScript", "React", "Vite", "Web Audio API", "Web MIDI API", "Zustand", "IndexedDB"],
    href: `https://github.com/${personal.githubHandle}/roland-sp404-ios`,
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "Swift", "C++", "Java", "HTML/CSS", "PowerShell"],
  },
  {
    label: "Frameworks",
    items: ["React", "Next.js", "FastAPI", "Flask", "Streamlit", "Tailwind CSS", "Framer Motion", "Node.js"],
  },
  {
    label: "Tools",
    items: ["Git", "Docker", "Supabase", "Render", "Vercel", "Postman", "pgvector", "Linux", "Jamf", "Entra ID", "M365"],
  },
  {
    label: "Concepts",
    items: ["Machine Learning", "RAG", "Vector Databases", "REST APIs", "Microservices", "Performance Optimization"],
  },
];
