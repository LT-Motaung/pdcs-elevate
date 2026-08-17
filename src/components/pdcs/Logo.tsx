import { cn } from "@/lib/utils";

/**
 * Typographic PDCS wordmark placeholder.
 * Replace with the supplied official logo file when available —
 * swap the markup below for an <img src={logo} alt="PDCS (Pty) Ltd" />.
 */
export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={cn("inline-flex items-baseline gap-2", className)}>
      <span className="font-display text-xl leading-none font-bold tracking-[0.18em]">PDCS</span>
      {!compact && (
        <span className="eyebrow hidden text-[0.5rem] opacity-60 sm:inline">
          Your space, our standard
        </span>
      )}
    </span>
  );
}
