import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT, PLACEHOLDER } from "@/data/site";
import { Reveal } from "./Reveal";

const items = [
  { icon: Phone, label: "Phone", value: CONTACT.phone },
  { icon: MessageCircle, label: "WhatsApp", value: CONTACT.whatsapp },
  { icon: Mail, label: "Email", value: CONTACT.email },
  { icon: MapPin, label: "Service Area", value: CONTACT.serviceArea },
  { icon: Clock, label: "Business Hours", value: CONTACT.hours },
];

export function Contact() {
  return (
    <section id="contact" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-accent">Contact</p>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,5vw,3.6rem)] leading-[0.98] font-bold">
            Speak to PDCS.
          </h2>
        </Reveal>

        <dl className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 80} className="h-full">
              <div className="flex h-full flex-col justify-between bg-card p-8">
                <item.icon className="size-5 stroke-[1.25] text-accent" aria-hidden="true" />
                <div className="mt-12">
                  <dt className="eyebrow text-muted-foreground">{item.label}</dt>
                  <dd className="mt-3 font-display text-lg font-medium">
                    {item.value ? (
                      item.value
                    ) : (
                      <span className="text-muted-foreground/70 italic">{PLACEHOLDER}</span>
                    )}
                  </dd>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={400} className="h-full">
            <div className="flex h-full flex-col justify-end bg-secondary p-8">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Contact details are placeholders until the official PDCS phone number, WhatsApp
                line and email address are supplied.
              </p>
            </div>
          </Reveal>
        </dl>
      </div>
    </section>
  );
}
