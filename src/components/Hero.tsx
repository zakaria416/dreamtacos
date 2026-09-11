import { ChevronRight, Star } from 'lucide-react';

const heroImage = 'https://images.pexels.com/photos/7388095/pexels-photo-7388095.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Three tacos al pastor with cilantro and onion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/80 via-ink-900/60 to-ink-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-taco-400/10 border border-taco-400/30 rounded-full mb-6 animate-fade-in">
          <Star className="w-4 h-4 text-taco-400 fill-taco-400" />
          <span className="text-taco-200 text-sm font-medium tracking-wide">
            Voted #1 Street Tacos in the City
          </span>
        </div>

        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-cream leading-none tracking-wide animate-fade-up">
          TASTE THE
          <br />
          <span className="text-taco-400">DREAM</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-cream/70 max-w-xl mx-auto text-balance animate-fade-up" style={{ animationDelay: '0.15s' }}>
          Authentic Mexican street tacos, hand-crafted with fresh ingredients
          and bold flavors that'll transport you south of the border.
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          <a
            href="#menu"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-taco-400 hover:bg-taco-300 text-ink-900 font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-taco-400/40"
          >
            Order Now
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#offers"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-cream/30 hover:border-taco-400 text-cream hover:text-taco-400 font-bold text-lg rounded-full transition-all duration-300"
          >
            View Specials
          </a>
        </div>

        <div
          className="mt-16 flex items-center justify-center gap-8 text-cream/60 animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="text-center">
            <div className="font-display text-4xl text-taco-400">15+</div>
            <div className="text-xs uppercase tracking-wider mt-1">Taco Varieties</div>
          </div>
          <div className="w-px h-12 bg-cream/20" />
          <div className="text-center">
            <div className="font-display text-4xl text-taco-400">4.9</div>
            <div className="text-xs uppercase tracking-wider mt-1">Avg. Rating</div>
          </div>
          <div className="w-px h-12 bg-cream/20" />
          <div className="text-center">
            <div className="font-display text-4xl text-taco-400">10k+</div>
            <div className="text-xs uppercase tracking-wider mt-1">Tacos Served</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ink-900 to-transparent z-10 pointer-events-none" />
    </section>
  );
}
