import { skills } from "@/content";
import { PromptHeader } from "@/components/chrome/prompt-header";
import { Reveal } from "@/components/chrome/reveal";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <PromptHeader cmd="echo $SKILLS">skills</PromptHeader>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.08}>
              <h3 className="font-mono text-sm uppercase tracking-wider text-accent">
                {group.label}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-fg-dim"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
