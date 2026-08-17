import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/data/site";

export function WhatsAppButton() {
  const configured = WHATSAPP_NUMBER.trim().length > 0;
  const href = configured
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
    : undefined;

  return (
    <a
      href={href ?? "#contact"}
      target={configured ? "_blank" : undefined}
      rel={configured ? "noopener noreferrer" : undefined}
      aria-label={
        configured ? "Chat on WhatsApp" : "WhatsApp number not yet configured — go to contact"
      }
      title={configured ? "Chat on WhatsApp" : "WhatsApp number to be added"}
      className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-3 border border-electric/40 bg-navy-deep/90 px-4 py-3.5 text-[0.68rem] font-semibold tracking-[0.18em] text-navy-foreground uppercase backdrop-blur-md transition-all duration-300 hover:border-electric hover:shadow-[var(--glow-electric)] sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="size-4 text-electric-soft" aria-hidden="true" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
      <span className="sm:hidden">WhatsApp</span>
    </a>
  );
}
