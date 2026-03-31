import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Catalog from '@/components/Catalog';
import Production from '@/components/Production';
import Timeline from '@/components/Timeline';
import Portfolio from '@/components/Portfolio';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen" style={{ background: '#0a0a0f' }}>
      <div className="side-glow-left" />
      <div className="side-glow-right" />

      <Header />
      <Hero />
      <Catalog />
      <Production />
      <Timeline />
      <Portfolio />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;
