export default function Guarantee() {
  return (
    <section className="py-20 px-5 bg-bege-light">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-[28px] font-bold text-cinza-dark mb-8">
          Garantia de 100% de Satisfação ou <span className="text-rosa-primary">Reembolso Total!</span>
        </h2>

        <div className="mb-8">
          <img
            src="https://i.postimg.cc/QtsTJqMQ/selo-de-garantia-7-dias-1.webp"
            alt="Garantia 7 dias"
            loading="lazy"
            className="w-[200px] mx-auto"
            style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))' }}
          />
        </div>

        <p className="text-lg text-cinza-medium leading-relaxed max-w-2xl mx-auto">
          Teste por 7 dias: se não gostar, seu dinheiro de volta.
        </p>

        <p className="text-lg text-cinza-dark font-semibold mt-4">
          Simples, rápido e sem perguntas.
        </p>
      </div>
    </section>
  );
}
