import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";

const references = [
  {
    company: "Stavební společnost s.r.o.",
    text: "S panem Vaňkem spolupracujeme třetím rokem. Jeho precizní přístup nám ušetřil desítky hodin práce a výrazně snížil daňové riziko.",
    author: "Petr Svoboda, jednatel",
  },
  {
    company: "TechFlow a.s.",
    text: "Profesionální, rychlý a vždy dobře informovaný. Doporučuji každému, kdo potřebuje spolehlivého daňového poradce.",
    author: "Lenka Nováková, CFO",
  },
  {
    company: "OSVČ — marketingové služby",
    text: "Konečně mám přehledné daně a klid na práci. Díky individuálnímu přístupu vím, na čem jsem.",
    author: "Jana Dvořáková, freelancer",
  },
];

const experience = [
  { number: "15+", label: "let praxe" },
  { number: "200+", label: "spokojených klientů" },
  { number: "50+", label: "úspěšných kontrol" },
];

export const Route = createFileRoute("/o-mne")({
  head: () => ({
    meta: [
      { title: "O mně — Andrea Baťková" },
      { name: "description", content: "Poznejte svou daňovou poradkyni. Reference, zkušenosti a přístup." },
      { property: "og:title", content: "O mně — Andrea Baťková" },
      { property: "og:description", content: "Poznejte svou daňovou poradkyni. Reference, zkušenosti a přístup." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-surface font-sans text-brand-primary">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <img
              src={portrait}
              alt="Andrea Baťková, daňová poradkyně"
              width={1024}
              height={1280}
              className="w-full aspect-[4/5] object-cover rounded-sm"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-7">
            <span className="text-brand-accent font-medium uppercase tracking-widest text-sm">O mně</span>
            <h1 className="text-5xl lg:text-6xl font-serif leading-tight mt-4 mb-8 text-balance">
              Martin Vaněk, <br />
              <span className="italic text-brand-accent">daňový poradce</span>
            </h1>
            <div className="space-y-6 text-lg text-brand-primary/70 leading-relaxed max-w-2xl">
              <p>
                Věřím, že daňové poradenství není jen o číslech, ale především o klidu a jistotě mých klientů. Specializuji se na komplexní správu daní pro firmy, živnostníky i jednotlivce. Jako daňový poradce hledám vždy nejlepší cestu.
              </p>
              <p>
                Mým cílem je najít optimální řešení, které je v souladu se zákonem a zároveň ekonomicky výhodné. Díky dlouholeté praxi v oboru dokážu předvídat rizika a navrhovat strategie na míru.
              </p>
              <p>
                Jsem členem Komory daňových poradců ČR a pravidelně se vzdělávám v oblasti mezinárodního zdanění a firemních restrukturalizací.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-b border-brand-primary/10 py-16">
            {experience.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-6xl font-serif text-brand-accent mb-2">{stat.number}</div>
                <div className="text-sm uppercase tracking-widest text-brand-primary/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-accent font-medium uppercase tracking-widest text-sm">Reference</span>
            <h2 className="text-4xl font-serif mt-4">Co o mně říkají klienti</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {references.map((ref) => (
              <div key={ref.company} className="bg-white p-10 border border-brand-primary/5">
                <p className="text-brand-primary/70 leading-relaxed mb-8 italic">„{ref.text}“</p>
                <div>
                  <div className="font-bold text-sm uppercase tracking-widest">{ref.company}</div>
                  <div className="text-sm text-brand-primary/50 mt-1">{ref.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
