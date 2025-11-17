import { useCheckoutLink } from '../../hooks/useCheckoutLink';
import { trackClickNonBlocking } from '../../services/trackingBeacon';

export default function FinalCTA() {
  const checkoutUrl = useCheckoutLink();

  const handlePurchase = () => {
    trackClickNonBlocking(
      checkoutUrl,
      'final-cta-section'
    );
  };

  return (
    <section className="py-16 px-5 bg-gradient-to-br from-rosa-gradient-start to-rosa-gradient-end">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-[32px] font-bold text-white mb-6">
          Garanta agora sua apostila com +100 receitas por apenas R$27!
        </h2>

        <a
          href={checkoutUrl}
          onClick={handlePurchase}
          className="checkout inline-block w-full max-w-md bg-verde-cta hover:bg-verde-hover text-white px-12 py-6 rounded-lg text-xl font-bold shadow-2xl transition-all duration-300 hover:scale-105"
        >
          QUERO GARANTIR AGORA!
        </a>

        <p className="text-sm text-white/80 mt-6">
          🔒 Pagamento 100% seguro - Acesso imediato - Garantia de 7 dias
        </p>
      </div>
    </section>
  );
}
