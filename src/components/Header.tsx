import { Link } from "@tanstack/react-router";

const navItems = [
  { to: "/sluzby", label: "Služby" },
  { to: "/o-mne", label: "O mně" },
  { to: "/kontakt", label: "Kontakt" },
];

export function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-primary/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-serif font-bold tracking-tight italic text-brand-primary">
          Andrea Baťková
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-brand-primary">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-brand-accent" }}
              inactiveProps={{ className: "hover:text-brand-accent transition-colors" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/kontakt"
            className="px-5 py-2 bg-brand-primary text-white hover:bg-brand-accent transition-all"
          >
            Poptávka
          </Link>
        </div>
      </div>
    </nav>
  );
}
