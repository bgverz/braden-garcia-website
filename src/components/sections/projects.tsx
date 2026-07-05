import { projects } from "@/content";
import { PromptHeader } from "@/components/chrome/prompt-header";
import { Reveal } from "@/components/chrome/reveal";
import { ViewCodeButton } from "@/components/chrome/view-code-button";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <PromptHeader path="/projects">projects</PromptHeader>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-md border border-border bg-bg-raised/30 p-6 transition-colors hover:border-border-strong">
                <h3 className="font-mono text-lg text-fg">{project.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-dim">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm border border-border px-1.5 py-0.5 font-mono text-[11px] text-fg-dim"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-4">
                  <ViewCodeButton href={project.href} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
