import { experience } from "@/content";
import { PromptHeader } from "@/components/chrome/prompt-header";
import { Reveal } from "@/components/chrome/reveal";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <PromptHeader path="/experience">experience</PromptHeader>
        </Reveal>

        {experience.map((job, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="rounded-md border border-border bg-bg-raised/40 p-6 md:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-mono text-xl text-fg md:text-2xl">{job.role}</h3>
                <span className="font-mono text-sm text-fg-muted">{job.date}</span>
              </div>
              <p className="mt-1 font-mono text-sm text-accent">
                {job.org} · {job.location}
              </p>

              <ul className="mt-5 space-y-3">
                {job.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-3 text-fg-dim">
                    <span className="mt-[2px] shrink-0 font-mono text-accent">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
