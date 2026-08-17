import aboutImage from "@/assets/about-interior.jpg";
import textureImage from "@/assets/blue-texture.jpg";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-navy-deep py-24 text-navy-foreground sm:py-32 grain">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-screen"
        aria-hidden="true"
      >
        <img
          src={textureImage}
          alt=""
          width={1600}
          height={900}
          loading="lazy"
          decoding="async"
          className="size-full object-cover"
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow text-electric-soft">About PDCS</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,5.2vw,3.9rem)] leading-[0.98] font-bold">
              A higher standard of clean.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-navy-foreground/70">
              <p>
                PDCS (Pty) Ltd is a professional cleaning company built around consistency. Every
                space is approached with the same methodical attention to detail, whether it is a
                private home, a working office or a site handed over after construction.
              </p>
              <p>
                Our standard does not shift between jobs. The work is planned, executed and checked
                so the result is predictable — a space that is genuinely clean, presented properly
                and ready to be used.
              </p>
              <p>
                Reliability matters as much as the clean itself. Clear communication, professional
                conduct and quality that holds up on the second visit as well as the first.
              </p>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <dl className="mt-12 grid gap-px border border-hairline-dark bg-hairline-dark sm:grid-cols-3">
              {[
                ["Focus", "Detail on every surface"],
                ["Approach", "Methodical and planned"],
                ["Promise", "A consistent standard"],
              ].map(([term, desc]) => (
                <div key={term} className="bg-navy-deep p-6">
                  <dt className="eyebrow text-electric-soft">{term}</dt>
                  <dd className="mt-3 text-sm text-navy-foreground/70">{desc}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal variant="clip" delay={100} className="relative">
          <div className="relative aspect-4/5 overflow-hidden">
            <img
              src={aboutImage}
              alt="Spotless modern residential interior with immaculate surfaces"
              width={1408}
              height={1600}
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
          {/* Brand vehicle placeholder — replace with the supplied PDCS Nissan NP200 photograph. */}
          <div className="mt-4 flex items-center justify-between border border-hairline-dark px-5 py-4">
            <span className="eyebrow text-navy-foreground/45">
              Brand vehicle image — to be added
            </span>
            <span className="size-1.5 bg-electric" aria-hidden="true" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
