import { UtensilsCrossed, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink-900 border-t border-ink-600 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <UtensilsCrossed className="w-7 h-7 text-taco-400" />
            <span className="font-display text-xl tracking-wider text-cream">
              DREAM <span className="text-taco-400">TACOS</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-cream/50 hover:text-taco-400 transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-cream/50 hover:text-taco-400 transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-cream/50 hover:text-taco-400 transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-cream/40">
            &copy; {new Date().getFullYear()} Dream Tacos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
