import { Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const details = [
  { icon: Mail, label: "Email", value: "hello@horizonmru.com", href: "mailto:hello@horizonmru.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 012-3456", href: "tel:+15550123456" },
  { icon: MapPin, label: "Studio", value: "Available worldwide, remote-first" },
];

const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted/70 focus:border-foreground focus:outline-none focus:ring-2 focus:ring-accent/30";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's talk about where you're headed"
          description="Tell us a little about your business and goals. We reply to every message within one business day."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <ul className="flex flex-col gap-4">
            {details.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4 rounded-2xl border border-border p-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-surface">
                  <Icon className="size-5 text-accent" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm text-muted">{label}</p>
                  {href ? (
                    <a href={href} className="font-medium hover:text-accent">
                      {value}
                    </a>
                  ) : (
                    <p className="font-medium">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <form
            action="mailto:hello@horizonmru.com"
            method="post"
            encType="text/plain"
            className="flex flex-col gap-5 rounded-3xl bg-surface p-6 md:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input id="name" name="name" required autoComplete="name" placeholder="Jane Doe" className={inputClass} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@company.com" className={inputClass} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="service" className="text-sm font-medium">What can we help with?</label>
              <select id="service" name="service" className={inputClass} defaultValue="Business Strategy">
                <option>Business Strategy</option>
                <option>Brand &amp; Identity</option>
                <option>Growth Marketing</option>
                <option>Advisory &amp; Coaching</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea id="message" name="message" required rows={5} placeholder="Tell us about your business and goals..." className={`${inputClass} resize-none`} />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-accent sm:self-start"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
