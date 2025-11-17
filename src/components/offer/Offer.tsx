import { useRef, useEffect, useState, memo } from 'react';
import { Check } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useCheckoutLink } from '../../hooks/useCheckoutLink';
import { trackClickNonBlocking } from '../../services/trackingBeacon';

function Offer() {
  const offerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(progressRef, { threshold: 0.5 });
  const [progress, setProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const checkoutUrl = useCheckoutLink();

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
      let currentProgress = 0;
      const targetProgress = 94;
      const duration = 2000;
      const steps = 60;
      const increment = targetProgress / steps;
      const stepDuration = duration / steps;

      const timer = setInterval(() => {
        currentProgress += increment;
        if (currentProgress >= targetProgress) {
          setProgress(targetProgress);
          clearInterval(timer);
        } else {
          setProgress(Math.floor(currentProgress));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible, hasAnimated]);

  const handlePurchase = () => {
    trackClickNonBlocking(
      checkoutUrl,
      'offer-section'
    );
  };

  return (
    <section id="preco" ref={offerRef} className="py-20 px-5 bg-white">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="bg-gradient-to-br from-[#E8F5E9] to-[#F1F8E9] rounded-2xl p-8 md:p-12 border-2 border-verde-cta">
          <p className="inline-block bg-verde-cta text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            OFERTA LIMITADA
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-verde-cta mb-2">
            Somente hoje
          </h2>

          <div className="mb-8">
            <img
              src="https://i.postimg.cc/TPnbbsTG/Capa-Pantufas-736x1024.webp"
              alt="Apostila Pantufas e Sapatinhos Amigurumi"
              loading="lazy"
              className="max-w-[250px] mx-auto rounded-lg"
              style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))' }}
            />
          </div>

          <div className="mb-2">
            <p className="text-sm line-through text-cinza-medium">De R$197,00</p>
            <p className="inline-block bg-vermelho-urgencia text-white px-3 py-1 rounded text-xs font-bold">por apenas</p>
          </div>

          <div className="mb-6">
            <div style={{ fontSize: '160px', fontWeight: '900', color: '#2E7D32', letterSpacing: '-0.02em', lineHeight: '1', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              R$27
            </div>
          </div>

          <p className="text-lg mb-8 text-cinza-medium font-semibold">
            Ou 6x de 5,68
          </p>

          <div className="bg-white rounded-xl p-6 mb-8 border-l-4 border-verde-cta">
            <p className="text-base font-semibold text-cinza-dark mb-4">Receitas exclusivas:</p>
            <ul className="space-y-3 text-sm text-cinza-dark text-left">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0 text-verde-cta" />
                <span>Mais de 100 receitas de Pantufas e Sapatinhos decorativos</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0 text-verde-cta" />
                <span>Passo a passo Em português</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0 text-verde-cta" />
                <span>Pagamento Único Acesso Vitalício</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0 text-verde-cta" />
                <span>Atualizações Semanais</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 flex-shrink-0 mt-0 text-verde-cta" />
                <span>Mini-eBook Acessórios Infantis Amigurumi</span>
              </li>
            </ul>
          </div>

          <a
            href={checkoutUrl}
            onClick={handlePurchase}
            className="checkout inline-block w-full bg-verde-cta hover:bg-verde-hover text-white px-12 py-5 rounded-full text-lg font-bold shadow-lg transition-all duration-300 mb-6"
          >
            QUERO MEUS SAPATINHOS AMIGURUMI AGORA!
          </a>

          <div className="bg-[#FFF8E1] rounded-xl p-4 border-2 border-[#FFB74D]">
            <p className="text-base font-semibold text-[#E65100]">
              ⚠️ Vagas limitadas para garantir um acompanhamento personalizado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Offer);
