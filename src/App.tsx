import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SpecialOffers from '@/components/SpecialOffers';
import Menu from '@/components/Menu';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink-900 text-cream">
      <Navbar />
      <main>
        <Hero />
        <SpecialOffers />
        <Menu />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
