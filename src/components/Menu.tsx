import { useState } from 'react';
import { Flame, Leaf } from 'lucide-react';
import { menuItems, categories, type MenuCategory } from '@/data/menu';
import { useReveal } from '@/hooks/useReveal';

type Filter = 'All' | MenuCategory;

export default function Menu() {
  const [active, setActive] = useState<Filter>('All');
  const { ref, visible } = useReveal<HTMLDivElement>();

  const filtered =
    active === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === active);

  return (
    <section id="menu" className="relative py-24 bg-ink-900">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="text-center mb-12">
            <span className="text-taco-400 text-sm font-bold uppercase tracking-[0.2em]">
              Our Tacos
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-cream mt-3 tracking-wide">
              THE <span className="text-taco-400">MENU</span>
            </h2>
            <p className="text-cream/60 mt-4 max-w-md mx-auto">
              Every taco is made to order with fresh, locally-sourced ingredients.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  active === cat
                    ? 'bg-taco-400 text-ink-900 scale-105 shadow-lg shadow-taco-400/20'
                    : 'bg-ink-700 text-cream/70 hover:bg-ink-600 hover:text-taco-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <article
                key={item.name}
                className={`reveal ${visible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="group relative bg-ink-800 rounded-2xl overflow-hidden border border-ink-600 hover:border-taco-400/40 transition-all duration-300 hover:-translate-y-1.5">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/20 to-transparent" />
                    {item.tag && (
                      <span
                        className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-sm ${
                          item.tag === 'Spicy'
                            ? 'bg-red-500/80 text-white'
                            : item.tag === 'Vegan'
                              ? 'bg-green-500/80 text-white'
                              : 'bg-taco-400/90 text-ink-900'
                        }`}
                      >
                        {item.tag === 'Spicy' && <Flame className="w-3 h-3 inline mr-1" />}
                        {item.tag === 'Vegan' && <Leaf className="w-3 h-3 inline mr-1" />}
                        {item.tag}
                      </span>
                    )}
                    <div className="absolute bottom-3 right-3 bg-taco-400 text-ink-900 font-display text-2xl px-3 py-0.5 rounded-lg shadow-lg">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-2xl text-cream tracking-wide mb-1.5">
                      {item.name}
                    </h3>
                    <p className="text-sm text-cream/55 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
