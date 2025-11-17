import { memo } from 'react';

function LoveCrochet() {
  return (
    <section className="py-20 px-5 bg-bege-light">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-[32px] md:text-[32px] font-bold text-cinza-dark mb-8">
          Imagine isso...
        </h2>

        <p className="text-lg text-cinza-medium mb-6 leading-relaxed">
          Um bebê usando o primeiro sapatinho feito por você. Uma criança se recusando a tirar as pantufas fofas de unicórnio. Uma casa aquecida pelo conforto das suas criações artesanais.
        </p>

        <p className="text-lg text-cinza-medium mb-6 leading-relaxed">
          <strong>Tudo feito com suas próprias mãos.</strong>
        </p>

        <div className="flex justify-center mb-8">
          <img
            src="https://i.postimg.cc/6QCZZPB4/Design-sem-nome-24.webp"
            alt="Pantufas e Sapatinhos Coloridos"
            className="max-w-[700px] w-full h-auto rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        <p className="text-lg text-cinza-medium leading-relaxed">
          Simples. Aconchegante. <strong>Inesquecível!</strong>
        </p>
      </div>
    </section>
  );
}

export default memo(LoveCrochet);
