import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { SERVICE_OPTIONS, PROPERTY_TYPES } from "@/data/site";
import { Reveal } from "./Reveal";

const fieldClass =
  "w-full border border-hairline-dark bg-navy-deep/60 px-4 py-3.5 text-sm text-navy-foreground placeholder:text-navy-foreground/35 transition-colors focus:border-electric focus:outline-none";
const labelClass = "eyebrow mb-2 block text-navy-foreground/55";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    toast.success("Quote request captured", {
      description:
        "Delivery is not connected yet — add the PDCS email address to start receiving enquiries.",
    });
  };

  return (
    <section id="quote" className="relative overflow-hidden bg-navy-deep py-24 text-navy-foreground sm:py-32 grain">
      <div
        className="absolute top-0 left-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[150px]"
        style={{ background: "var(--electric)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow text-electric-soft">Request a Quote</p>
          <h2 className="mt-5 font-display text-[clamp(2rem,5.2vw,3.9rem)] leading-[0.96] font-bold">
            Ready for a cleaner standard?
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-navy-foreground/70">
            Tell us what you need and request a quote from PDCS.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={handleSubmit} className="border border-hairline-dark p-6 sm:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="name">
                  Name
                </label>
                <input id="name" name="name" required autoComplete="name" className={fieldClass} placeholder="Full name" />
              </div>
              <div>
                <label className={labelClass} htmlFor="phone">
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className={fieldClass}
                  placeholder="Your contact number"
                />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={fieldClass}
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="service">
                  Service required
                </label>
                <select id="service" name="service" required defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option} className="bg-navy-deep">
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass} htmlFor="property">
                  Property type
                </label>
                <select id="property" name="property" required defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    Select property type
                  </option>
                  {PROPERTY_TYPES.map((option) => (
                    <option key={option} value={option} className="bg-navy-deep">
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={`${fieldClass} resize-y`}
                  placeholder="Tell us about the space and what needs cleaning."
                />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="photo">
                  Photo (optional)
                </label>
                <input
                  id="photo"
                  name="photo"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                  className="w-full border border-hairline-dark bg-navy-deep/60 px-4 py-3 text-sm text-navy-foreground/70 file:mr-4 file:border-0 file:bg-electric/15 file:px-4 file:py-2 file:text-[0.65rem] file:font-semibold file:tracking-[0.16em] file:text-navy-foreground file:uppercase"
                />
                {fileName && (
                  <p className="mt-2 text-xs text-navy-foreground/50">Selected: {fileName}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full bg-electric px-8 py-4 text-[0.72rem] font-semibold tracking-[0.2em] text-accent-foreground uppercase transition-all duration-300 hover:shadow-[var(--glow-electric)] hover:brightness-110"
            >
              Request a Quote
            </button>

            <p className="mt-4 text-xs leading-relaxed text-navy-foreground/45" role="status">
              {submitted
                ? "Thank you — your details were captured in the browser. Enquiry delivery still needs to be connected."
                : "Placeholder: form submissions are not yet delivered to an inbox. Add the PDCS email address to activate."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
