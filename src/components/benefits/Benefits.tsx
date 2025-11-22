import { memo } from 'react';

const benefits = [
  {
    emoji: '📚',
    title: 'Mais de 100 Moldes Exclusivos',
    description: 'Coleção completa de amigurumis temáticos de pantufas e sapatinhos com instruções detalhadas'
  },
  {
    emoji: '⚡',
    title: 'Acesso Imediato e Vitalício',
    description: 'Receba tudo no seu e-mail em segundos e tenha acesso para sempre, sem mensalidades'
  },
  {
    emoji: '📖',
    title: 'Passo a Passo Ilustrado',
    description: 'Cada molde vem com fotos e explicações claras, perfeito para iniciantes e avançadas'
  },
  {
    emoji: '💰',
    title: 'Gere Renda Extra',
    description: 'Venda suas peças prontas ou aceite encomendas personalizadas e lucre com seu talento'
  },
  {
    emoji: '📈',
    title: 'Tendência em Alta',
    description: 'Sapatinhos e pantufas amigurumi são sucesso nas redes sociais e vendem muito bem online'
  },
  {
    emoji: '🤝',
    title: 'Suporte e Comunidade',
    description: 'Entre para grupo exclusivo de artesãs e receba dicas, inspirações e ajuda sempre que precisar'
  }
];

function Benefits() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-[32px] font-bold text-cinza-dark text-center mb-6">
          Por que a "Apostila Amigurumi Pantufas & Sapatinhos" é tudo que você precisa?
        </h2>

        <p className="text-lg text-cinza-medium text-center mb-12 max-w-3xl mx-auto">
          Tudo que você precisa para dominar a arte do amigurumi e transformar seu hobby em negócio
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-bege-light to-[#F5F0E8] p-10 rounded-2xl border-2 border-transparent transition-all duration-300 hover:-translate-y-2 hover:border-azul-primary hover:shadow-xl hover:shadow-azul-primary/20"
            >
              <div className="text-5xl mb-4">{benefit.emoji}</div>
              <h3 className="text-xl font-semibold text-cinza-dark mb-3">
                {benefit.title}
              </h3>
              <p className="text-base text-cinza-medium leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Benefits);
