import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/data/site";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-hairline-dark bg-navy-deep/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          className="text-navy-foreground transition-opacity hover:opacity-80"
          aria-label="PDCS home"
        >
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-[0.8rem] font-medium tracking-[0.14em] text-navy-foreground/70 uppercase transition-colors hover:text-navy-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-electric transition-all duration-400 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#quote"
            className="hidden items-center border border-electric/50 bg-electric/10 px-5 py-2.5 text-[0.7rem] font-semibold tracking-[0.18em] text-navy-foreground uppercase transition-all duration-300 hover:bg-electric hover:shadow-[var(--glow-electric)] sm:inline-flex"
          >
            Request a Quote
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center border border-hairline-dark text-navy-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "grid overflow-hidden border-t border-hairline-dark bg-navy-deep/97 backdrop-blur-xl transition-all duration-500 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-transparent",
        )}
      >
        <div className="min-h-0">
          <nav aria-label="Mobile" className="flex flex-col px-5 py-4 sm:px-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-hairline-dark py-4 font-display text-2xl tracking-tight text-navy-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="mt-6 mb-4 inline-flex justify-center bg-electric px-6 py-4 text-[0.72rem] font-semibold tracking-[0.2em] text-accent-foreground uppercase"
            >
              Request a Quote
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
