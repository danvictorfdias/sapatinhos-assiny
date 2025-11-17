export default function Footer() {
  return (
    <footer className="bg-cinza-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-lg font-bold mb-4">
            Apostila Digital Amigurumi Pantufas & Sapatinhos
          </h3>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6 text-sm">
            <p className="flex items-center gap-2">
              ✓ Pagamento 100% Seguro
            </p>
            <p className="flex items-center gap-2">
              ✓ Dados Protegidos
            </p>
            <p className="flex items-center gap-2">
              ✓ Garantia de 7 Dias
            </p>
          </div>

          <p className="text-sm opacity-80 mb-2">
            © 2025 Apostila Amigurumi Pantufas & Sapatinhos. Todos os direitos reservados.
          </p>

          <p className="text-xs opacity-70">
            Este produto é comercializado com garantia através da plataforma segura de pagamentos.
          </p>
        </div>
      </div>
    </footer>
  );
}
