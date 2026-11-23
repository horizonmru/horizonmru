type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({ eyebrow, title, description, tone = "light" }: SectionHeadingProps) {
  const muted = tone === "dark" ? "text-background/70" : "text-muted";
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
        <h2 className="mt-4 text-balance font-serif text-4xl leading-tight tracking-tight md:text-6xl">{title}</h2>
      </div>
      {description && <p className={`max-w-sm text-pretty leading-relaxed ${muted}`}>{description}</p>}
    </div>
  );
}
