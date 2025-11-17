const securityFeatures = [
  {
    image: 'https://i.postimg.cc/C1Yqs4Kj/plataforma-png.webp',
    text: 'A plataforma de pagamento é certificada e aprovada.'
  },
  {
    image: 'https://i.postimg.cc/43pcc0Xx/dados-png.webp',
    text: 'Seus dados financeiros permanecerão totalmente secretos e protegidos.'
  },
  {
    image: 'https://i.postimg.cc/hGVmmYKx/entrega-p-png.webp',
    text: 'Seu acesso será entregue por Email e Whatsapp.'
  }
];

export default function Security() {
  return (
    <section className="py-16 px-5 bg-cinza-light">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={feature.image}
                alt={`Segurança ${index + 1}`}
                className="w-20 h-20 mb-5"
              />
              <p className="text-sm text-cinza-medium leading-relaxed">
                {feature.text.split(' ').map((word, idx) => {
                  const boldWords = ['certificada', 'aprovada', 'secretos', 'protegidos', 'entregue'];
                  if (boldWords.some(bw => word.toLowerCase().includes(bw))) {
                    return (
                      <strong key={idx} className="font-semibold text-cinza-dark">
                        {word}{' '}
                      </strong>
                    );
                  }
                  return word + ' ';
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
