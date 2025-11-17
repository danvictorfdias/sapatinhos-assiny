import Hero from './components/hero/Hero';
import LoveCrochet from './components/lovecrochet/LoveCrochet';
import Benefits from './components/benefits/Benefits';
import Gallery from './components/gallery/Gallery';
import Testimonials from './components/testimonials/Testimonials';
import Security from './components/security/Security';
import Timer from './components/timer/Timer';
import Offer from './components/offer/Offer';
import FAQ from './components/faq/FAQ';
import Guarantee from './components/guarantee/Guarantee';
import FinalCTA from './components/finalcta/FinalCTA';
import Footer from './components/footer/Footer';
import PurchaseNotification from './components/purchasenotification/PurchaseNotification';

// Função que remove elementos flutuantes com estilos específicos
const removeFloating = () => {
  document.querySelectorAll('[style^="position: fixed"][style*="bottom: 1rem"][style*="z-index: 2147483647"]').forEach(el => el.remove());
};

// Executa a função imediatamente ao carregar
removeFloating();

// Observa mudanças no DOM e reaplica a função se novos elementos forem adicionados
const observer = new MutationObserver(removeFloating);
observer.observe(document.body, { childList: true, subtree: true });


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <LoveCrochet />
      <Benefits />
      <Gallery />
      <Testimonials />
      <Security />
      <Timer />
      <Offer />
      <FAQ />
      <Guarantee />
      <FinalCTA />
      <Footer />
      <PurchaseNotification />
    </div>
  );
}

export default App;
