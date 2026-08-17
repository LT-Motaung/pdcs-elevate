import { PRINCIPLES } from "@/data/site";
import serviceImage from "@/assets/service-detail.jpg";
import { Reveal } from "./Reveal";

export function WhyPDCS() {
  return (
    <>
      {/* Cinematic transition band */}
      <div className="relative overflow-hidden bg-navy py-14">
        <div
          className="flex whitespace-nowrap font-display text-[clamp(3rem,12vw,9rem)] leading-none font-bold text-navy-foreground/8 select-none"
          aria-hidden="true"
        >
          <span className="px-6">YOUR SPACE, OUR STANDARD</span>
          <span className="px-6">YOUR SPACE, OUR STANDARD</span>
        </div>
      </div>

      <section id="why" className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal variant="clip" className="relative">
              <div className="aspect-4/3 overflow-hidden lg:aspect-3/4">
                <img
                  src={serviceImage}
                  alt="Squeegee drawing a clean line across a floor-to-ceiling office window at night"
                  width={1408}
                  height={912}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover"
                />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="eyebrow text-accent">Why PDCS</p>
                <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.6rem)] leading-[0.98] font-bold">
                  Four principles behind every clean.
                </h2>
              </Reveal>

              <div className="mt-12 divide-y divide-border border-y border-border">
                {PRINCIPLES.map((item, i) => (
                  <Reveal key={item.title} delay={i * 90}>
                    <div className="group flex items-baseline gap-6 py-7 transition-colors duration-400 sm:gap-10">
                      <span className="font-display text-sm font-semibold tracking-[0.2em] text-accent">
                        {item.number}
                      </span>
                      <div>
                        <h3 className="font-display text-2xl font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl">
                          {item.title.toUpperCase()}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
