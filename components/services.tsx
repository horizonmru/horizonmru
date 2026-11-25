import { Compass, Layers, TrendingUp, Users } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const services = [
  {
    icon: Compass,
    title: "Business Strategy",
    description:
      "Market research, positioning, and a practical roadmap that aligns your team around what matters most.",
  },
  {
    icon: Layers,
    title: "Brand & Identity",
    description:
      "Naming, visual identity, and messaging that make your business instantly recognizable and memorable.",
  },
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    description:
      "Campaigns, content, and analytics designed to attract the right customers and grow revenue sustainably.",
  },
  {
    icon: Users,
    title: "Advisory & Coaching",
    description:
      "Ongoing, hands-on guidance for leaders navigating hiring, operations, and the next stage of scale.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What we do"
          title="Services built around your next chapter"
          description="Every engagement is tailored. Pick a single service or combine them into a complete growth partnership."
        />

        <ul className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2">
          {services.map(({ icon: Icon, title, description }, i) => (
            <li key={title} className="group flex flex-col gap-6 bg-background p-8 transition-colors hover:bg-surface md:p-10">
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-full bg-foreground text-background transition-colors group-hover:bg-accent">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-serif text-xl text-muted">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div>
                <h3 className="font-serif text-3xl tracking-tight">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
