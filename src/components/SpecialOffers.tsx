import { Flame, Clock, Truck, PartyPopper } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const offers = [
  {
    icon: Flame,
    title: 'Taco Tuesday',
    description: 'Buy any 3 tacos, get 1 free. Every Tuesday, all day long.',
    badge: 'Every Tuesday',
    accent: 'from-taco-400/20 to-taco-600/5',
  },
  {
    icon: Clock,
    title: 'Happy Hour',
    description: 'Half-price sides and salsas from 3–5 PM on weekdays.',
    badge: '3–5 PM',
    accent: 'from-orange-400/20 to-orange-600/5',
  },
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'Complimentary delivery on all orders over $25 within 5 miles.',
    badge: 'Orders $25+',
    accent: 'from-amber-400/20 to-amber-600/5',
  },
  {
    icon: PartyPopper,
    title: 'Party Platter',
    description: '30-taco platter with all the fixings — perfect for your next gathering.',
    badge: 'From $89',
    accent: 'from-yellow-400/20 to-yellow-600/5',
  },
];

export default function SpecialOffers() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="offers" className="relative py-24 bg-ink-800">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="text-center mb-14">
            <span className="text-taco-400 text-sm font-bold uppercase tracking-[0.2em]">
              Limited Time
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-cream mt-3 tracking-wide">
              SPECIAL <span className="text-taco-400">OFFERS</span>
            </h2>
            <p className="text-cream/60 mt-4 max-w-md mx-auto">
              Deals so good, you'll want to come back every day of the week.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offers.map((offer, i) => (
              <div
                key={offer.title}
                className={`reveal ${visible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="group relative h-full bg-ink-700 border border-ink-600 hover:border-taco-400/50 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-2">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${offer.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="relative">
                    <div className="w-12 h-12 bg-taco-400/10 border border-taco-400/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-taco-400/20 transition-colors duration-300">
                      <offer.icon className="w-6 h-6 text-taco-400" />
                    </div>
                    <span className="inline-block text-xs font-bold uppercase tracking-wider text-taco-300 bg-taco-400/10 px-3 py-1 rounded-full mb-4">
                      {offer.badge}
                    </span>
                    <h3 className="font-display text-2xl text-cream tracking-wide mb-2">
                      {offer.title}
                    </h3>
                    <p className="text-sm text-cream/60 leading-relaxed">
                      {offer.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
