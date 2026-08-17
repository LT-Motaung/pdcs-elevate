import { NAV_LINKS, SERVICES, CONTACT, PLACEHOLDER } from "@/data/site";
import { Logo } from "./Logo";

const socials = ["Facebook", "Instagram", "LinkedIn"];

export function Footer() {
  return (
    <footer className="border-t border-hairline-dark bg-navy-deep text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Logo compact />
            <p className="eyebrow mt-4 text-navy-foreground/45">Your space, our standard</p>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow text-electric-soft">Navigation</h2>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-foreground/65 transition-colors hover:text-navy-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-electric-soft">Services</h2>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.number} className="text-sm text-navy-foreground/65">
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow text-electric-soft">Contact</h2>
            <ul className="mt-5 space-y-3 text-sm text-navy-foreground/65">
              <li>Phone: {CONTACT.phone || PLACEHOLDER}</li>
              <li>WhatsApp: {CONTACT.whatsapp || PLACEHOLDER}</li>
              <li>Email: {CONTACT.email || PLACEHOLDER}</li>
            </ul>
            <ul className="mt-6 flex gap-4">
              {socials.map((s) => (
                <li key={s}>
                  <span
                    className="text-[0.68rem] tracking-[0.16em] text-navy-foreground/35 uppercase"
                    title="Social link to be added"
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-hairline-dark pt-6">
          <p className="text-xs text-navy-foreground/40">
            © 2026 PDCS (Pty) Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
