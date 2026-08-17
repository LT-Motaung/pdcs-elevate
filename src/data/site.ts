/**
 * PDCS site configuration.
 * Replace the clearly-marked placeholders below once the real business
 * details are supplied. Nothing here is invented — placeholders stay visible
 * on the site until updated.
 */

// WhatsApp number in international format WITHOUT "+" or spaces, e.g. "27821234567".
// Leave empty to keep the placeholder state.
export const WHATSAPP_NUMBER = "";

export const WHATSAPP_MESSAGE = "Hello PDCS, I would like to request a quote.";

export const CONTACT = {
  phone: "", // e.g. "+27 XX XXX XXXX"
  whatsapp: "", // display value, e.g. "+27 XX XXX XXXX"
  email: "", // e.g. "info@pdcs.co.za"
  serviceArea: "", // e.g. "Gauteng"
  hours: "", // e.g. "Mon – Fri, 08:00 – 17:00"
} as const;

export const PLACEHOLDER = "To be confirmed";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why PDCS", href: "#why" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICES = [
  {
    number: "01",
    title: "Residential Cleaning",
    description:
      "Professional cleaning services designed to keep homes fresh, hygienic and comfortable.",
  },
  {
    number: "02",
    title: "Commercial Cleaning",
    description:
      "Reliable cleaning solutions for offices, commercial properties and professional environments.",
  },
  {
    number: "03",
    title: "Upholstery & Tile Cleaning",
    description: "Deep cleaning for upholstered surfaces, tiles and grout.",
  },
  {
    number: "04",
    title: "Window Cleaning",
    description: "Professional window cleaning for a clear, polished finish.",
  },
  {
    number: "05",
    title: "Post-Construction Cleaning",
    description:
      "Detailed cleaning after construction or renovation, preparing spaces for occupancy.",
  },
] as const;

export const SERVICE_OPTIONS = [
  "Residential Cleaning",
  "Commercial Cleaning",
  "Upholstery & Tile Cleaning",
  "Window Cleaning",
  "Post-Construction Cleaning",
  "Other",
] as const;

export const PROPERTY_TYPES = [
  "Home / Apartment",
  "Office",
  "Retail Space",
  "Industrial / Warehouse",
  "Construction Site",
  "Other",
] as const;

export const PRINCIPLES = [
  { number: "01", title: "Quality", description: "Attention to detail in every clean." },
  { number: "02", title: "Reliability", description: "Professional service you can count on." },
  { number: "03", title: "Precision", description: "A methodical approach to every space." },
  {
    number: "04",
    title: "Standard",
    description: "A commitment to maintaining a higher standard.",
  },
] as const;

export const PROCESS = [
  { number: "01", title: "Request", description: "Tell us what your space needs." },
  { number: "02", title: "Assess", description: "We understand the requirements of the job." },
  { number: "03", title: "Clean", description: "Our team delivers a professional clean." },
  { number: "04", title: "Complete", description: "Your space is left ready for use." },
] as const;
