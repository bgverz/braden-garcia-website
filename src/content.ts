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

// Lines rendered in sequence in the hero boot sequence. The `ls` output
// mirrors the site's real sections (and the nav's ~/braden), so the terminal
// is describing the actual page rather than reciting a script.
const bootLines: BootLine[] = [
  { prompt: "~", cmd: "cd braden && ls" },
  { output: "about/  experience/  projects/  skills/  contact/" },
  { prompt: "~/braden", cmd: "./init" },
  { output: "ready." },
];

export const boot = { lines: bootLines };

export const about = {
  heading: "about",
  paragraphs: [
    "I have a Bachelor of Science in Computer Science from Rutgers University, and I'm currently working in Information Technology at Next Management in New York. Rutgers is where things actually clicked for me, as CS forces you to break a problem down and think it through. This programmatic thinking and problem solving has stuck with me, and it's how I approach anything technical now.",
    "IT is a good teacher for that kind of thinking. You're dealing with real devices, real people, and systems that are supposed to work a certain way and don't. I bring that same mindset to building software.",
    "I don't have one specific job title I'm chasing next. Tech is moving fast enough right now that I'd rather stay open to different kinds of problems than lock myself into one lane. What actually matters to me is the type of work; solving real technical problems and building things that hold up.",
    "Outside of work, I love to hike. Mount Tammany is my regular spot, but the Jewell Trail up Mount Washington and Mount Zas in Greece are two of my favorites. I play and watch soccer, and I'm a Manchester City fan. I'm also interested in music and sampling, and that's not a coincidence given two of the projects on this site. BlessedEar came from caring about how music recommendations actually work, and the SP-404 Sampler exists because I wanted to build the sampling process itself, not just use someone else's tool.",
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
  // GitHub handle of the collaborator whose account hosts the repo, shown on
  // the card so "View Code" landing on another profile isn't confusing.
  collab?: string;
};

export const projects: Project[] = [
  {
    name: "errmem",
    description:
      "Nobody should have to solve the same error twice. errmem keeps a local record of every error you've hit and the fix that worked, and it matches on meaning rather than exact text — a completely reworded message still surfaces the old answer. No cloud dependency; fully tested, one-line pipx install.",
    stack: ["Python", "sentence-transformers", "pytest", "GitHub Actions", "pipx", "SQLite"],
    href: `https://github.com/${personal.githubHandle}/errmem`,
  },
  {
    name: "LeadFinder",
    description:
      "Built for Forte Capital Group, an investment firm, to take investor-lead research from hours of manual work down to a few minutes. It pulls from multiple public data sources, scores each lead so the strongest rise to the top, and writes everything to a color-coded spreadsheet anyone at the firm can open. Deployed and in active use today.",
    stack: ["Python", "Apollo.io API", "Census/SEC/ATTOM APIs", "openpyxl"],
    href: `https://github.com/${personal.githubHandle}/lead-finder`,
  },
  {
    name: "BlessedEar",
    description:
      "A music recommendation platform wired into what you actually listen to on Spotify. It analyzes hundreds of tracks at once, so playlists stay varied instead of circling the same handful of songs. Much of the work went into making Spotify's own API behave — it now succeeds on virtually every request. Full web app, secure login, built end to end.",
    stack: ["Python", "Spotify API", "scikit-learn", "Flask", "FastAPI", "React", "Next.js", "OAuth2"],
    href: `https://github.com/${personal.githubHandle}/BlessedEar`,
  },
  {
    name: "StudyForge",
    description:
      "Upload a PDF — a textbook chapter, a set of notes — and ask it questions in plain English. StudyForge answers in real time, generates flashcards automatically, and uses retrieval search to cite the exact passage it pulled the answer from. A dedicated performance push cut response times by 75%.",
    stack: ["Next.js", "FastAPI", "Pinecone", "Groq API", "TypeScript", "Tailwind CSS", "sentence-transformers", "Framer Motion"],
    collab: "ShaunM042",
    // Repo is private — restore the href once it's public:
    // href: "https://github.com/ShaunM042/StudyForge",
  },
  {
    name: "FlickIQ",
    description:
      "Trained on 25 million real ratings across tens of thousands of movies, FlickIQ combines two different recommendation techniques and serves personalized picks, similar-movie suggestions, and trending titles in real time, posters and details included.",
    stack: ["Python", "LightFM", "FastAPI", "Streamlit", "PostgreSQL", "pgvector", "TMDB API"],
    collab: "ShaunM042",
    href: "https://github.com/ShaunM042/FlickIQ",
  },
  {
    name: "SP-404 Sampler",
    description:
      "A browser recreation of the Roland SP-404, the hardware sampler musicians use to chop up and remix audio. Upload any song, slice it across the 16-pad grid, and bend speed, pitch, and tone in real time — no hardware needed. There's a full beat sequencer, support for real MIDI controllers, and effects pulled straight from the original device: vinyl distortion, lo-fi warble. Projects save in the browser, so you can pick up where you left off.",
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
