import { SectionHeading } from "@/components/section-heading";

const stats = [
  { value: "120+", label: "Businesses supported" },
  { value: "10 yrs", label: "Combined experience" },
  { value: "3.2x", label: "Average client growth" },
  { value: "98%", label: "Would recommend us" },
];

const steps = [
  { title: "Listen", text: "We start by understanding your goals, customers, and the challenges holding you back." },
  { title: "Plan", text: "Together we shape a focused strategy with clear priorities and milestones." },
  { title: "Build", text: "Our team executes alongside yours, from brand assets to campaigns and systems." },
  { title: "Grow", text: "We measure, learn, and refine so momentum keeps building long after launch." },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-16 bg-foreground py-24 text-background md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          tone="dark"
          eyebrow="About Horizon"
          title="A small team with a long view"
          description="We believe great businesses are built with patience, clarity, and honest partnership. No jargon, no bloated retainers — just thoughtful work that moves you forward."
        />

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-background/15 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2 bg-foreground p-6 md:p-8">
              <dt className="order-2 text-sm text-background/70">{stat.label}</dt>
              <dd className="order-1 font-serif text-5xl tracking-tight text-accent md:text-6xl">{stat.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-24">
          <h3 className="font-serif text-3xl tracking-tight md:text-4xl">How we work</h3>
          <ol className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} className="border-t border-background/20 pt-6">
                <span className="text-sm text-accent">Step {i + 1}</span>
                <h4 className="mt-2 text-xl font-medium">{step.title}</h4>
                <p className="mt-2 leading-relaxed text-background/70">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
