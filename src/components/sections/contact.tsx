import { personal } from "@/content";
import { PromptHeader } from "@/components/chrome/prompt-header";
import { Reveal } from "@/components/chrome/reveal";

export function Contact() {
  return (
    <footer id="contact" className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <PromptHeader cmd="ping braden">get in touch</PromptHeader>
        </Reveal>

        <Reveal>
          <div className="flex flex-col gap-3 font-mono text-lg">
            <a
              href={`mailto:${personal.email}`}
              className="w-fit text-fg transition-colors hover:text-accent"
            >
              <span className="text-fg-dim">email </span>
              {personal.email}
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-fg transition-colors hover:text-accent"
            >
              <span className="text-fg-dim">linkedin </span>
              {personal.linkedin.replace("https://", "")}
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-fg transition-colors hover:text-accent"
            >
              <span className="text-fg-dim">github </span>
              {personal.github.replace("https://", "")}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-16 font-mono text-xs text-fg-dim">
            <span className="text-fg-muted">~/braden</span> ${" "}
            <span className="text-accent">exit 0</span>
            <span className="text-fg-muted"> · {personal.location}</span>
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
