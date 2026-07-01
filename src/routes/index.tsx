import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";

const services = [
  {
    number: "01",
    title: "Daňová přiznání",
    description:
      "Kompletní zpracování DPFO a DPPO včetně všech povinných příloh a elektronického podání.",
  },
  {
    number: "02",
    title: "Optimalizace daní",
    description:
      "Analýza vašich nákladů a navržení legálních cest k minimalizaci daňové zátěže v souladu s legislativou.",
  },
  {
    number: "03",
    title: "Zastupování na úřadech",
    description:
      "Komunikace s finančním úřadem, příprava podkladů pro kontroly a řešení sporných bodů za vás.",
  },
];

const pricing = [
  {
    title: "Konzultace",
    price: "1 500 Kč",
    unit: "/ hod",
    features: ["Jednorázové poradenství", "Analýza konkrétního problému", "Online i osobní setkání"],
    featured: false,
  },
  {
    title: "Paušální servis",
    price: "od 4 000 Kč",
    unit: "/ měsíc",
    features: ["Trvalý dohled nad daněmi", "Neomezené dotazy e-mailem", "Garance včasného podání"],
    featured: true,
  },
  {
    title: "Speciality",
    price: "Individuálně",
    unit: "",
    features: ["Akvizice a fúze", "Mezinárodní struktury", "Právní prověrky (Due Diligence)"],
    featured: false,
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marek Valenta — Daňový poradce" },
      { name: "description", content: "Profesionální daňové poradenství pro firmy i jednotlivce." },
      { property: "og:title", content: "Marek Valenta — Daňový poradce" },
      { property: "og:description", content: "Profesionální daňové poradenství pro firmy i jednotlivce." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-brand-surface font-sans text-brand-primary">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-5xl lg:text-7xl font-serif leading-tight mb-8 text-balance">
              Daňová strategie,
              <br />
              která <span className="italic text-brand-accent">pracuje pro vás</span>.
            </h1>
            <p className="text-lg text-brand-primary/70 max-w-xl mb-10 leading-relaxed">
              Profesionální poradenství pro firmy i jednotlivce. Minimalizuji vaše daňové riziko a maximalizuji finanční efektivitu s důrazem na preciznost.
            </p>
            <div className="flex gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center px-8 py-4 bg-brand-primary text-white font-medium hover:bg-brand-accent transition-all shadow-xl shadow-brand-primary/10"
              >
                Nezávazná poptávka
              </Link>
              <Link
                to="/sluzby"
                className="inline-flex items-center px-8 py-4 border border-brand-primary/20 text-brand-primary font-medium hover:bg-brand-primary hover:text-white transition-all"
              >
                Prohlédnout služby
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src={portrait}
              alt="Marek Valenta, daňový poradce"
              width={1024}
              height={1280}
              className="w-full aspect-[4/5] object-cover rounded-sm"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-brand-accent font-medium uppercase tracking-widest text-sm">Odborné služby</span>
              <h2 className="text-4xl font-serif mt-4">Komplexní řešení pro vaše podnikání</h2>
            </div>
            <Link
              to="/sluzby"
              className="text-brand-primary/60 max-w-xs text-sm italic hover:text-brand-accent transition-colors"
            >
              Zobrazit kompletní nabídku služeb a ceník →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service) => (
              <div key={service.number} className="group border-l border-brand-primary/10 pl-8">
                <span className="text-3xl font-serif text-brand-accent/40 group-hover:text-brand-accent transition-colors">
                  {service.number}
                </span>
                <h3 className="text-xl font-bold mt-4 mb-3">{service.title}</h3>
                <p className="text-brand-primary/70 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-center mb-16">Transparentní ceník</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan) => (
              <div
                key={plan.title}
                className={`p-10 border ${
                  plan.featured
                    ? "bg-brand-primary text-white border-brand-primary shadow-2xl md:scale-105"
                    : "bg-white border-brand-primary/5"
                }`}
              >
                <h4 className={`font-bold text-sm uppercase tracking-widest mb-2 ${plan.featured ? "text-brand-accent" : ""}`}>
                  {plan.title}
                </h4>
                <div className="text-3xl font-serif mb-6">
                  {plan.price} <span className={`text-sm font-sans ${plan.featured ? "text-white/50" : "text-brand-primary/50"}`}>{plan.unit}</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className={plan.featured ? "text-brand-accent" : "text-brand-accent"}>•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/kontakt"
                  className={`inline-flex items-center justify-center w-full py-3 text-sm font-medium transition-all ${
                    plan.featured
                      ? "bg-white text-brand-primary hover:bg-brand-accent hover:text-white"
                      : "bg-brand-primary text-white hover:bg-brand-accent"
                  }`}
                >
                  Poptat
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif mb-6">Pojďme probrat vaši situaci</h2>
          <p className="text-brand-primary/70 max-w-2xl mx-auto mb-10">
            Zanechte mi vzkaz a já se vám ozvu zpět do 24 hodin s návrhem dalšího postupu.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center px-8 py-4 bg-brand-primary text-white font-medium hover:bg-brand-accent transition-all"
          >
            Kontaktovat
          </Link>
        </div>
      </section>
    </div>
  );
}
