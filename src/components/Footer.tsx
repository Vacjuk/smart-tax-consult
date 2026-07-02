import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="py-12 border-t border-brand-primary/5 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <Link to="/" className="font-serif italic font-bold text-brand-primary">
          Andrea Baťková
        </Link>
        <div className="text-xs text-brand-primary/40">
          © {new Date().getFullYear()} Všechna práva vyhrazena. Člen Komory daňových poradců ČR.
        </div>
        <div className="flex gap-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-brand-primary/5 flex items-center justify-center text-[10px] font-bold hover:bg-brand-accent hover:text-white transition-all"
          >
            LI
          </a>
          <a
            href="mailto:batkova@danovy-expert.cz"
            className="w-8 h-8 rounded-full bg-brand-primary/5 flex items-center justify-center text-[10px] font-bold hover:bg-brand-accent hover:text-white transition-all"
          >
            @
          </a>
        </div>
      </div>
    </footer>
  );
}
