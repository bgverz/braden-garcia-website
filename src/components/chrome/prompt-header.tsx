import type { ReactNode } from "react";

// Section heading styled as a shell exchange: a command at the ~/braden
// prompt (matching the nav and the hero's boot sequence), with the heading
// as its output. Each section passes its own command — the site's one
// recurring motif.
export function PromptHeader({
  cmd,
  children,
}: {
  cmd: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="font-mono text-sm">
        <span className="text-fg-muted">~/braden</span>
        <span className="text-fg-dim"> $ </span>
        <span className="text-accent">{cmd}</span>
      </p>
      <h2 className="mt-3 font-mono text-3xl font-medium tracking-tight text-fg md:text-5xl">
        {children}
      </h2>
    </div>
  );
}
