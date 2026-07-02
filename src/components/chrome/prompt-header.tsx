import type { ReactNode } from "react";

// Section heading styled as a shell prompt, e.g. `~/experience $`.
// Used at the top of every major section — the site's one recurring motif.
export function PromptHeader({
  path,
  children,
}: {
  path: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="font-mono text-sm text-accent">
        <span className="text-fg-muted">~</span>
        {path}
        <span className="text-fg-dim"> $</span>
      </p>
      <h2 className="mt-3 font-mono text-3xl font-medium tracking-tight text-fg md:text-5xl">
        {children}
      </h2>
    </div>
  );
}
