import { useEffect, useState } from 'react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Offers', href: '#offers' },
  { label: 'Menu', href: '#menu' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-900/95 backdrop-blur-md shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <UtensilsCrossed className="w-8 h-8 text-taco-400 group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-display text-2xl tracking-wider text-cream">
            DREAM <span className="text-taco-400">TACOS</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-cream/80 hover:text-taco-400 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-taco-400 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#menu"
          className="hidden md:inline-flex items-center px-5 py-2.5 bg-taco-400 hover:bg-taco-300 text-ink-900 font-bold text-sm rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-taco-400/30"
        >
          Order Now
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cream p-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="bg-ink-800/95 backdrop-blur-md flex flex-col gap-1 px-6 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-cream/80 hover:text-taco-400 transition-colors font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#menu"
              onClick={() => setOpen(false)}
              className="block py-3 text-taco-400 font-bold"
            >
              Order Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
