import { about, education } from "@/content";
import { PromptHeader } from "@/components/chrome/prompt-header";
import { Reveal } from "@/components/chrome/reveal";

export function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <PromptHeader path="/about">{about.heading}</PromptHeader>
        </Reveal>

        <div className="space-y-6">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-lg leading-relaxed text-fg-dim">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex items-center gap-3 border-t border-border pt-6 font-mono text-sm text-fg-muted">
            <span className="text-accent">$</span>
            <span>
              {education.school} · {education.degree}, {education.date}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
