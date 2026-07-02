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
    "I have a B.S. in Computer Science from Rutgers, and I'm currently working as an IT Technician at Next Management in New York. Rutgers is where tech really clicked for me: not any single class, but the programmatic thinking and problem-solving instincts I built there. Those are what let me pick up new things quickly and go deep on them ever since.",
    "The IT side taught me to think in terms of real systems under real constraints: fleets of devices, identity and access at scale, the gap between how something is supposed to work and how it actually breaks. That's the same instinct I bring to building software. errmem exists because of a genuine friction point I hit as a developer, not because it sounded like a good idea for a portfolio.",
    "I'm not fixed on one specific title for what comes next. Tech roles are shifting fast right now, and I'd rather stay open to a range of technical problems than narrow myself down too early. What matters more to me is the shape of the work: systems-level thinking, real constraints, and things that actually need to get built and maintained, whether that ends up under a software engineering title, a systems engineering one, or something in between.",
    "Outside of work, I hike a lot. Mount Tammany is a regular one, but the Jewell Trail up Mount Washington and climbing Mount Zas in Greece are the two that stuck with me most. I play and watch soccer, and I follow Manchester City. I'm also genuinely into music and sampling, which is actually where two of my projects came from: BlessedEar started from caring about how music recommendation actually works, and the SP-404 Sampler exists because I wanted to build the sampling workflow itself, not just use it. Neither one was picked at random.",
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
      "errmem is an offline CLI that remembers errors you've hit before and the fix that worked, so the next time a familiar-looking stack trace shows up, it tells you what worked last time instead of sending you back to Google. Lookups run through three tiers: an exact fingerprint match, fuzzy text matching, and (since v2) local semantic embeddings. That semantic tier was added only after v1's deliberately zero-dependency design proved unable to catch same-error-different-wording cases, like an ImportError and a ModuleNotFoundError for the same missing package. It's fully tested with a pytest suite in CI and MIT licensed, and it ships via a pipx-based Homebrew tap because a native Homebrew formula wasn't feasible: its one dependency pulls in torch, which has no source distribution on PyPI.",
    stack: ["Python", "sentence-transformers", "pytest", "GitHub Actions", "pipx", "SQLite"],
    href: `https://github.com/${personal.githubHandle}/errmem`,
  },
  {
    name: "LeadFinder",
    description:
      "LeadFinder is a Python CLI built and deployed for Forte Capital Group to source and score accredited investor leads, replacing a manual prospecting workflow and directly improving the quality of the firm's deal pipeline. A multi-source enrichment pipeline pulls in data from Apollo.io, U.S. Census records, SEC EDGAR filings, and ATTOM property data, then automatically scores and ranks leads by investability. Results export as a color-coded, filterable Excel workbook, so non-technical users can identify and prioritize high-value prospects without touching a command line themselves.",
    stack: ["Python", "Apollo.io API", "Census/SEC/ATTOM APIs", "openpyxl"],
    href: `https://github.com/${personal.githubHandle}/lead-finder`,
  },
  {
    name: "BlessedEar",
    description:
      "BlessedEar is a full-stack music recommendation platform that builds intelligent playlists from a listener's own Spotify library, playlists, and listening history. A recommendation engine processes 200+ tracks at a time, using randomized seed selection and multiple ranking strategies to keep playlists varied rather than repetitive. Getting there reliably meant real error handling and fallback strategies around the Spotify Web API's audio-feature analysis, landing on a 99%+ API success rate in production. It includes a full OAuth 2.0 authentication system with session management and account switching, plus a Next.js/TypeScript frontend with real-time audio-feature visualizations.",
    stack: ["Python", "Spotify API", "scikit-learn", "Flask", "FastAPI", "React", "Next.js", "OAuth2"],
    href: `https://github.com/${personal.githubHandle}/BlessedEar`,
  },
  {
    name: "StudyForge",
    description:
      "StudyForge is a full-stack RAG-powered study platform that turns uploaded PDFs into an interactive, contextual Q&A experience, with streaming responses and intelligent chunking via sentence-transformers. The backend is a FastAPI service built around async operations and a Pinecone vector database for semantic search, with performance monitoring across embedding generation, vector retrieval, and LLM inference that drove a 75% performance improvement. The Next.js/TypeScript frontend adds real-time streaming chat, automated flashcard generation, and a responsive design system animated with Framer Motion.",
    stack: ["Next.js", "FastAPI", "Pinecone", "Groq API", "TypeScript", "Tailwind CSS", "sentence-transformers", "Framer Motion"],
    href: "https://github.com/ShaunM042/StudyForge",
  },
  {
    name: "FlickIQ",
    description:
      "FlickIQ is a hybrid movie recommendation system combining collaborative and content-based filtering (via LightFM) over the full MovieLens 25M dataset (roughly 62,000 movies, 280,000 users, and 25 million ratings), enriched with TMDB metadata for posters, overviews, and genre information. A FastAPI backend serves real-time personalized recommendations, similar-movie lookups, search, and trending endpoints, backed by PostgreSQL with pgvector for fast similarity search, alongside an optional Streamlit interface for demos and testing. It's built with real production concerns in mind: Recall@K evaluation, popularity-based cold-start handling, batched processing, and rate-limit-aware TMDB enrichment. FlickIQ is a collaborative project, and Braden is the primary contributor to the shared repository, accounting for most of its commit history.",
    stack: ["Python", "LightFM", "FastAPI", "Streamlit", "PostgreSQL", "pgvector", "TMDB API"],
    href: "https://github.com/ShaunM042/FlickIQ",
  },
  {
    name: "SP-404 Sampler",
    description:
      "A browser-based emulator for the Roland SP-404 hardware sampler, recreating its core sampling workflow in software: upload audio, chop and slice it across a 16-pad grid, and manipulate playback speed, pitch, and tone in real time. Audio processing runs entirely on the Web Audio API, where a custom effects chain (filter, vinyl simulation, lo-fi, compressor, delay, reverb) sits between each pad's sample player and the output. It also has a built-in step sequencer for programming patterns and Web MIDI support for triggering pads from an external controller. Projects persist locally via IndexedDB, so a session picks back up where it left off.",
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
