import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <Logo />
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-6 text-sm text-muted">
            <li><a href="#services" className="hover:text-foreground">Services</a></li>
            <li><a href="#about" className="hover:text-foreground">About</a></li>
            <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
          </ul>
        </nav>
        <p className="text-sm text-muted">&copy; 2026 Horizon. All rights reserved.</p>
      </div>
    </footer>
  );
}
