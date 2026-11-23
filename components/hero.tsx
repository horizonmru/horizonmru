import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-20 text-center md:pt-28">
        <p className="mb-6 rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted">
          Strategy &middot; Brand &middot; Growth
        </p>
        <h1 className="max-w-4xl text-balance font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          Clear direction for businesses ready to <em className="text-accent">rise</em>.
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
          Horizon partners with founders and growing teams to sharpen their strategy, build a brand
          people trust, and turn ambitious plans into measurable results.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-accent"
          >
            Start a project
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-medium transition-colors hover:border-foreground"
          >
            Explore services
          </a>
        </div>
      </div>

      <div aria-hidden="true" className="relative mx-auto mt-20 h-48 max-w-6xl md:h-64">
        <div className="absolute bottom-0 left-1/2 aspect-square w-[min(80%,560px)] -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-b from-accent to-[#f2b36b]" />
      </div>
      <div className="h-px bg-foreground/20" />
    </section>
  );
}
