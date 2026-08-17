import { PROCESS } from "@/data/site";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-navy-foreground sm:py-32 grain">
      <div className="absolute inset-0 opacity-40 hairline-grid" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-electric-soft">The Process</p>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,5vw,3.6rem)] leading-[0.98] font-bold">
            Four steps, start to finish.
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-px bg-hairline-dark sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, i) => (
            <Reveal key={step.number} delay={i * 110} as="li" className="h-full">
              <div className="group relative flex h-full flex-col bg-navy p-8 transition-colors duration-500 hover:bg-navy-soft">
                <span className="font-display text-6xl font-bold text-navy-foreground/12 transition-colors duration-500 group-hover:text-electric/50">
                  {step.number}
                </span>
                <h3 className="mt-10 font-display text-lg font-semibold tracking-[0.12em] uppercase">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-foreground/65">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
