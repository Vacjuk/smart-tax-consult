import { createFileRoute, Link } from "@tanstack/react-router";

const services = [
  {
    number: "01",
    title: "Daňová přiznání",
    description:
      "Kompletní zpracování daňových přiznání pro fyzické i právnické osoby. Zahrnuji DPFO, DPPO, DPH, kontrolní hlášení i elektronické podání na finanční úřad.",
    price: "od 4 500 Kč",
  },
  {
    number: "02",
    title: "Účetnictví",
    description:
      "Vedení podvojného účetnictví, správa DPH, kontrolní hlášení, účetní závěrky a digitální archivace dokladů pro klidnou kontrolu.",
    price: "od 3 500 Kč / měsíc",
  },
  {
    number: "03",
    title: "Poradenství",
    description:
      "Jednorázové i dlouhodobé konzultace. Optimalizace daňové zátěže, zakládání společností, restrukturalizace a plánování majetkových převodů.",
    price: "1 500 Kč / hod",
  },
  {
    number: "04",
    title: "Audit & revize",
    description:
      "Nezávislé prověření hospodaření, interní kontrolní systémy, due diligence při akvizicích a identifikace rizik v účetních procesech.",
    price: "Individuálně",
  },
];

const pricingPlans = [
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

export const Route = createFileRoute("/sluzby")({
  head: () => ({
    meta: [
      { title: "Služby a ceník — Andrea Baťková" },
      { name: "description", content: "Nabídka daňových služeb a transparentní ceník. Daňová přiznání, účetnictví, poradenství a audit." },
      { property: "og:title", content: "Služby a ceník — Andrea Baťková" },
      { property: "og:description", content: "Nabídka daňových služeb a transparentní ceník." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-brand-surface font-sans text-brand-primary">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
        <div className="max-w-3xl">
          <span className="text-brand-accent font-medium uppercase tracking-widest text-sm">Služby</span>
          <h1 className="text-5xl lg:text-6xl font-serif leading-tight mt-4 mb-8 text-balance">
            Profesionální řešení <br />
            <span className="italic text-brand-accent">na míru vašemu podnikání</span>
          </h1>
          <p className="text-lg text-brand-primary/70 leading-relaxed">
            Od běžného daňového přiznání po komplexní firemní restrukturalizaci. Každou zakázku řeším osobně a s maximální pečlivostí.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-px bg-brand-primary/10 border-y border-brand-primary/10">
            {services.map((service) => (
              <div
                key={service.number}
                className="group bg-white grid grid-cols-1 md:grid-cols-12 gap-6 py-12 items-baseline hover:bg-brand-surface transition-colors duration-300"
              >
                <div className="md:col-span-1 text-sm font-light text-brand-primary/40">{service.number}</div>
                <div className="md:col-span-6">
                  <h3 className="font-serif text-3xl mb-2 italic">{service.title}</h3>
                  <p className="text-sm text-brand-primary/70 max-w-md">{service.description}</p>
                </div>
                <div className="md:col-span-3 text-sm font-bold uppercase tracking-tighter text-brand-primary/60">
                  {service.price}
                </div>
                <div className="md:col-span-2">
                  <Link
                    to="/kontakt"
                    search={{ service: service.title }}
                    className="inline-flex items-center text-sm font-medium text-brand-accent hover:text-brand-primary transition-colors"
                  >
                    Poptat →
                  </Link>
                </div>
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
            {pricingPlans.map((plan) => (
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
                  {plan.price}{" "}
                  <span className={`text-sm font-sans ${plan.featured ? "text-white/50" : "text-brand-primary/50"}`}>
                    {plan.unit}
                  </span>
                </div>
                <ul className="space-y-3 mb-8 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-brand-accent">•</span>
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
    </div>
  );
}
