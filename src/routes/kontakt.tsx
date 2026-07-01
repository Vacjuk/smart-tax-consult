import { createFileRoute, useSearch } from "@tanstack/react-router";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin, Briefcase } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "valenta@danovy-expert.cz",
    href: "mailto:valenta@danovy-expert.cz",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+420 777 123 456",
    href: "tel:+420777123456",
  },
  {
    icon: MapPin,
    label: "Adresa",
    value: "Příkop 843/4, 602 00 Brno",
    href: "https://maps.google.com/?q=Příkop 843/4, 602 00 Brno",
  },
  {
    icon: Briefcase,
    label: "IČO",
    value: "123 45 678",
    href: null,
  },
];

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Marek Valenta" },
      { name: "description", content: "Kontaktujte daňového poradce Marka Valenty. Poptávkový formulář, e-mail a telefon." },
      { property: "og:title", content: "Kontakt — Marek Valenta" },
      { property: "og:description", content: "Kontaktujte daňového poradce Marka Valenty." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const search = useSearch({ from: "/kontakt" }) as { service?: string };

  return (
    <div className="min-h-screen bg-brand-surface font-sans text-brand-primary">
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-brand-accent font-medium uppercase tracking-widest text-sm">Kontakt</span>
            <h1 className="text-5xl lg:text-6xl font-serif leading-tight mt-4 mb-8 text-balance">
              Pojďme probrat <br />
              <span className="italic text-brand-accent">vaši situaci</span>
            </h1>
            <p className="text-lg text-brand-primary/70 mb-12 leading-relaxed">
              Zanechte mi vzkaz a já se vám ozvu zpět do 24 hodin s návrhem dalšího postupu.
            </p>

            <div className="space-y-6">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-surface border border-brand-primary/10 grid place-items-center text-brand-accent shrink-0">
                    <detail.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-sm uppercase tracking-widest text-brand-primary/50">{detail.label}</div>
                    {detail.href ? (
                      <a href={detail.href} className="text-lg hover:text-brand-accent transition-colors">
                        {detail.value}
                      </a>
                    ) : (
                      <div className="text-lg">{detail.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 border border-brand-primary/5">
            <h2 className="text-2xl font-serif mb-6">Nezávazná poptávka</h2>
            <ContactForm defaultService={search.service} />
          </div>
        </div>
      </section>
    </div>
  );
}
