export default function Testimonials() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-[32px] font-bold text-cinza-dark text-center mb-6">
          O que nossas alunas dizem:
        </h2>

        <p className="text-lg text-cinza-medium text-center mb-12">
          +3.500 alunas já estão criando seus sapatinhos
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-bege-light rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <img
              src="https://i.postimg.cc/k5WSSH7V/da-790x1024.webp"
              alt="Depoimento Clarice Souza"
              loading="lazy"
              className="w-full h-auto block"
            />
          </div>

          <div className="bg-bege-light rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <img
              src="https://i.postimg.cc/Pq1DD7dp/db-790x1024.webp"
              alt="Depoimento Maria Lima"
              loading="lazy"
              className="w-full h-auto block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
