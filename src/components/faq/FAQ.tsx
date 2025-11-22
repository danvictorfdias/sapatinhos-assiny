import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: 'A apostila é indicada para iniciantes no crochê?',
    answer: 'Com certeza! A apostila foi feita para ser fácil de entender, com explicações passo a passo, gráficos claros e várias dicas. Mesmo que você esteja começando do zero no amigurumi, vai conseguir acompanhar e criar peças incríveis.'
  },
  {
    question: 'Quantos modelos de pantufas e sapatinhos estão incluídos?',
    answer: 'Você vai receber um total de 16 receitas completas: modelos para adultos, crianças e unissex. Tudo isso acompanhado de gráficos claros e dicas detalhadas.'
  },
  {
    question: 'Existe algum suporte para tirar dúvidas?',
    answer: 'Sim. De segunda a sexta de 09:00 as 18:00 horas, exceto feriados.'
  },
  {
    question: 'É seguro comprar neste site?',
    answer: 'Sim, sua compra estará 100% segura. Utilizamos protocolo https em parceria com o Mercado Pago, empresa de pagamentos online mais segura do Brasil.'
  },
  {
    question: 'O Acesso é vitalício?',
    answer: 'Sim o pagamento é único e o acesso a apostila é vitalício!'
  },
  {
    question: 'Por que custa tão pouco? Isso é real?',
    answer: 'Sim, o valor promocional de R$ 27 é para tornar o kit acessível ao maior número de pessoas possível. Mas atenção: essa é uma oferta limitada e pode acabar a qualquer momento.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-5 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-[32px] font-bold text-cinza-dark text-center mb-12">
          Dúvidas Frequentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-5 py-5 flex items-center justify-between text-left bg-bege-light hover:bg-[#F0E6E0] transition-colors"
              >
                <span className="font-semibold text-base text-cinza-dark pr-4">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-azul-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''
                    }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 bg-white ${openIndex === index ? 'max-h-[500px]' : 'max-h-0'
                  }`}
              >
                <div className="px-5 py-5 text-cinza-medium leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
