import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/pdcs/Navbar";
import { Hero } from "@/components/pdcs/Hero";
import { Services } from "@/components/pdcs/Services";
import { About } from "@/components/pdcs/About";
import { WhyPDCS } from "@/components/pdcs/WhyPDCS";
import { Process } from "@/components/pdcs/Process";
import { QuoteForm } from "@/components/pdcs/QuoteForm";
import { Contact } from "@/components/pdcs/Contact";
import { Footer } from "@/components/pdcs/Footer";
import { WhatsAppButton } from "@/components/pdcs/WhatsAppButton";

const title = "PDCS (Pty) Ltd | Professional Cleaning Services";
const description =
  "Professional residential, commercial, upholstery, tile, window and post-construction cleaning services from PDCS (Pty) Ltd.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "PDCS (Pty) Ltd",
          slogan: "Your space, our standard",
          description,
          serviceType: [
            "Residential Cleaning",
            "Commercial Cleaning",
            "Upholstery & Tile Cleaning",
            "Window Cleaning",
            "Post-Construction Cleaning",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyPDCS />
        <Process />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
