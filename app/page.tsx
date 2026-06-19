export default function Home() {
  return (
    <div className="min-h-screen bg-fg-black text-fg-text">
      <main className="flex min-h-screen flex-col items-center justify-center px-6 sm:px-8">
        <div className="max-w-3xl text-center sm:text-left">
          <div className="space-y-6">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
    Seu próximo cliente está procurando no Google agora.
    <br />
    Seu negócio aparece bem e responde mesmo depois do horário comercial?
  </h1>

  <p className="text-lg sm:text-xl text-fg-gray max-w-2xl">
    Ajudo empresas a conquistarem mais clientes com sites modernos, atendimento
    automatizado e uma presença digital que transmite profissionalismo desde o
    primeiro clique.
  </p>

  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
  <button className="inline-flex items-center justify-center rounded-full bg-fg-gold px-6 py-3 text-sm font-semibold text-fg-black shadow-md transition hover:brightness-110">
    Quero um site que trabalhe por mim
  </button>

  <button className="inline-flex items-center justify-center rounded-full border border-fg-gray px-6 py-3 text-sm font-semibold text-fg-text transition hover:bg-fg-gray-dark">
    Ver como funciona
  </button>
</div>
</div>
        </div>

        <div className="mt-16 max-w-3xl text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Como seu site trabalha por você 24/7
          </h2>
          
          <ul className="space-y-3 text-fg-gray text-base sm:text-lg">
            <li>
              Seu negócio continua respondendo, vendendo e trabalhando mesmo enquanto você
              dorme ou está ocupado.
            </li>
            <li>
              Seus clientes encontram informações e respostas sem precisar esperar por atendimento.
            </li>
            <li>
              Sua empresa transmite mais confiança e credibilidade desde o primeiro contato.
            </li>
            <li>
              Menos tempo respondendo perguntas repetidas, mais tempo fechando negócios.
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}