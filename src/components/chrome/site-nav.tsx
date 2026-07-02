const LINKS = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-bg/70 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center gap-x-4 gap-y-1 px-4 py-4 font-mono text-xs sm:text-sm md:gap-x-6 md:px-12">
        <a
          href="#top"
          className="shrink-0 text-fg-dim transition-colors hover:text-accent"
        >
          <span className="sm:hidden">~</span>
          <span className="hidden sm:inline">~/braden</span>
        </a>
        <ul className="flex flex-1 flex-wrap justify-end gap-x-3 gap-y-1 md:gap-x-5">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-fg-dim transition-colors hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
