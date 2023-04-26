export const paragraphs = [
  <p>
    Ao usar a annotation <strong>@Autowired</strong>, o Spring irá{" "}
    <strong>
      automaticamente injetar as dependências necessárias em um Bean, sem a
      necessidade de escrever código adicional
    </strong>
    . Isso pode tornar o código mais sucinto e fácil de entender, mas pode ter
    algumas limitações em termos de flexibilidade.
  </p>,
  <p>
    Por outro lado, quando usamos um <strong>construtor</strong> para injetar
    dependências, podemos garantir que{" "}
    <strong>
      todas as dependências necessárias estejam disponíveis antes que o Bean
      seja criado
    </strong>
    . Isso pode ajudar a prevenir erros em tempo de execução e tornar o código
    mais robusto.
  </p>,
  <p>
    Além disso, quando usamos construtores para injetar dependências, podemos
    especificar as dependências necessárias como parâmetros do construtor. Isso
    pode tornar o código mais explícito e fácil de entender, pois as
    dependências são declaradas explicitamente.
  </p>,
  <p>
    Em geral, a escolha entre usar construtores ou a annotation @Autowired
    depende do caso específico e das necessidades do projeto. Em alguns casos, a
    annotation @Autowired pode ser mais conveniente e eficiente, enquanto em
    outros casos, o uso de construtores pode ser mais seguro e robusto. É
    importante avaliar cada situação individualmente e escolher a abordagem mais
    adequada para o projeto em questão.
  </p>,
];
