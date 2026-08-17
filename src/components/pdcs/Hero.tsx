import heroImage from "@/assets/hero-lobby.jpg";

/**
 * Cinematic hero.
 * To swap the animated image backdrop for a real video later, replace the
 * <img> below with a <video autoPlay muted loop playsInline poster={heroImage}>
 * — the overlay//grain/glow layers are independent and need no changes.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-navy-deep grain"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Pristine modern corporate lobby with polished reflective floors at dusk"
          width={1920}
          height={1088}
          fetchPriority="high"
          decoding="async"
          className="size-full object-cover opacity-55 motion-safe:animate-drift"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/80 to-navy-deep/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-transparent to-navy-deep/40" />
        <div
          className="absolute -top-40 left-1/4 size-[46rem] rounded-full opacity-40 blur-[140px]"
          style={{ background: "var(--electric)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 opacity-[0.35] hairline-grid" aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-electric-soft/20 to-transparent motion-safe:animate-sweep"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 pt-32 pb-16 sm:px-8 sm:pb-20">
        <p
          className="eyebrow text-electric-soft motion-safe:animate-rise"
          style={{ animationDelay: "120ms" }}
        >
          PDCS (Pty) Ltd — Your space, our standard
        </p>

        <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.4rem,8.5vw,6.5rem)] leading-[0.92] font-bold text-navy-foreground text-balance-tight">
          <span
            className="block motion-safe:animate-rise"
            style={{ animationDelay: "260ms" }}
          >
            Professional cleaning.
          </span>
          <span
            className="block text-navy-foreground/45 motion-safe:animate-rise"
            style={{ animationDelay: "420ms" }}
          >
            Without compromise.
          </span>
        </h1>

        <p
          className="mt-8 max-w-xl text-base leading-relaxed text-navy-foreground/70 sm:text-lg motion-safe:animate-rise"
          style={{ animationDelay: "560ms" }}
        >
          Professional cleaning solutions for residential, commercial and post-construction
          spaces.
        </p>

        <div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center motion-safe:animate-rise"
          style={{ animationDelay: "700ms" }}
        >
          <a
            href="#quote"
            className="inline-flex items-center justify-center bg-electric px-8 py-4 text-[0.72rem] font-semibold tracking-[0.2em] text-accent-foreground uppercase transition-all duration-300 hover:shadow-[var(--glow-electric)] hover:brightness-110"
          >
            Request a Quote
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center border border-hairline-dark px-8 py-4 text-[0.72rem] font-semibold tracking-[0.2em] text-navy-foreground uppercase transition-colors duration-300 hover:border-electric/60 hover:bg-navy-foreground/5"
          >
            Our Services
          </a>
        </div>

        <div
          className="mt-16 flex items-center gap-4 motion-safe:animate-rise"
          style={{ animationDelay: "860ms" }}
          aria-hidden="true"
        >
          <span className="relative flex h-10 w-[1.35rem] items-start justify-center rounded-full border border-hairline-dark">
            <span className="mt-2 block size-1 rounded-full bg-electric-soft motion-safe:animate-scroll-dot" />
          </span>
          <span className="eyebrow text-navy-foreground/40">Scroll</span>
        </div>
      </div>
    </section>
  );
}
