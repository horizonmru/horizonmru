export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <span aria-hidden="true" className="relative flex size-7 items-end justify-center overflow-hidden rounded-full bg-foreground">
        <span className="mb-[-6px] size-4 rounded-full bg-accent" />
      </span>
      <span className="font-serif text-2xl leading-none tracking-tight">Horizon</span>
    </span>
  );
}
