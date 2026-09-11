import { useState } from 'react';
import { Clock, MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const hours = [
  { day: 'Monday', time: '11:00 AM — 10:00 PM' },
  { day: 'Tuesday', time: '11:00 AM — 10:00 PM' },
  { day: 'Wednesday', time: '11:00 AM — 10:00 PM' },
  { day: 'Thursday', time: '11:00 AM — 10:00 PM' },
  { day: 'Friday', time: '11:00 AM — 12:00 AM' },
  { day: 'Saturday', time: '10:00 AM — 12:00 AM' },
  { day: 'Sunday', time: '10:00 AM — 9:00 PM' },
];

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <section id="contact" className="relative py-24 bg-ink-800">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="text-center mb-14">
            <span className="text-taco-400 text-sm font-bold uppercase tracking-[0.2em]">
              Get in Touch
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-cream mt-3 tracking-wide">
              CONTACT <span className="text-taco-400">US</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-3xl text-cream tracking-wide mb-4 flex items-center gap-3">
                  <Clock className="w-7 h-7 text-taco-400" />
                  Opening Hours
                </h3>
                <ul className="space-y-2.5">
                  {hours.map((h) => (
                    <li
                      key={h.day}
                      className={`flex justify-between items-center py-2.5 px-4 rounded-lg transition-colors ${
                        h.day === today
                          ? 'bg-taco-400/10 border border-taco-400/30'
                          : 'bg-ink-700/50'
                      }`}
                    >
                      <span
                        className={`text-sm font-medium ${h.day === today ? 'text-taco-300' : 'text-cream/70'}`}
                      >
                        {h.day}
                        {h.day === today && (
                          <span className="ml-2 text-xs uppercase tracking-wider text-taco-400">
                            Today
                          </span>
                        )}
                      </span>
                      <span className={`text-sm ${h.day === today ? 'text-taco-200' : 'text-cream/50'}`}>
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 bg-ink-700/50 rounded-xl p-4">
                  <MapPin className="w-5 h-5 text-taco-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-cream/40 mb-1">Visit Us</div>
                    <div className="text-sm text-cream/80">742 Salsa Verde Ave<br />Austin, TX 78701</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-ink-700/50 rounded-xl p-4">
                  <Phone className="w-5 h-5 text-taco-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-cream/40 mb-1">Call Us</div>
                    <div className="text-sm text-cream/80">(512) 555-TACO<br />(512) 555-8226</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form
                onSubmit={handleSubmit}
                className="bg-ink-700/50 border border-ink-600 rounded-2xl p-8 space-y-5"
              >
                <div>
                  <label className="block text-xs uppercase tracking-wider text-cream/50 mb-2 font-bold">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-ink-800 border border-ink-600 focus:border-taco-400 rounded-lg px-4 py-3 text-cream placeholder-cream/30 outline-none transition-colors text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-cream/50 mb-2 font-bold">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-ink-800 border border-ink-600 focus:border-taco-400 rounded-lg px-4 py-3 text-cream placeholder-cream/30 outline-none transition-colors text-sm"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-cream/50 mb-2 font-bold">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-ink-800 border border-ink-600 focus:border-taco-400 rounded-lg px-4 py-3 text-cream placeholder-cream/30 outline-none transition-colors text-sm resize-none"
                    placeholder="Questions, catering requests, or just saying hola..."
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 font-bold rounded-lg transition-all duration-300 ${
                    sent
                      ? 'bg-green-500 text-white'
                      : 'bg-taco-400 hover:bg-taco-300 text-ink-900 hover:scale-[1.02] hover:shadow-lg hover:shadow-taco-400/20'
                  }`}
                >
                  {sent ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
