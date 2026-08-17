import { Home, Building2, Sofa, PanelsTopLeft, HardHat } from "lucide-react";
import { SERVICES } from "@/data/site";
import { Reveal } from "./Reveal";

const ICONS = [Home, Building2, Sofa, PanelsTopLeft, HardHat];

export function Services() {
  return (
    <section id="services" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-accent">Our Services</p>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,5vw,3.75rem)] leading-[0.98] font-bold">
            Professional cleaning solutions built around your space.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={service.number} delay={i * 90} className="h-full">
                <article className="group relative flex h-full flex-col justify-between overflow-hidden bg-card p-8 transition-colors duration-500 hover:bg-secondary sm:p-10">
                  <span className="absolute inset-x-0 top-0 h-px w-0 bg-accent transition-all duration-700 group-hover:w-full" />
                  <div className="flex items-start justify-between gap-6">
                    <span className="font-display text-4xl font-bold text-muted-foreground/25 transition-colors duration-500 group-hover:text-accent/60">
                      {service.number}
                    </span>
                    <Icon
                      className="size-6 stroke-[1.25] text-muted-foreground transition-colors duration-500 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-16">
                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
          <Reveal delay={450} className="h-full">
            <div className="flex h-full flex-col justify-end bg-navy p-8 text-navy-foreground sm:p-10">
              <p className="font-display text-2xl leading-tight font-semibold">
                Not sure which service you need?
              </p>
              <a
                href="#quote"
                className="mt-6 inline-flex w-fit items-center border border-hairline-dark px-6 py-3 text-[0.68rem] font-semibold tracking-[0.2em] uppercase transition-colors hover:border-electric hover:bg-electric/15"
              >
                Request a Quote
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
