export const paragraphs = [
  <p>
    O <strong>Spring Framework</strong> é o projeto base para todo ecossistema
    Spring e é dividido em sete grupos:{" "}
  </p>,

  <ul>
    <li>
      <strong>Core Container</strong>: responsável por conter as partes
      fundamentais do Framework;
    </li>
    <li>
      <strong>Data Access/Integration</strong>: responsável por prover
      funcionalidades para transações com o banco de dados;
    </li>
    <li>
      <strong>Web</strong>: contém os recursos para uma aplicação Web, com a
      implementação MVC, Web Services REST, entre outros;
    </li>
    <li>
      <strong> Aspect Oriented Programming (AOC)</strong>: fornece a
      implementação para programação orientada a aspectos;
    </li>
    <li>
      <strong>Instrumentations</strong>: fornece implementações de
      instrumentação;
    </li>
    <li>
      <strong>Messaging</strong>: contém implementação e suporte para
      programação baseada em mensagens;
    </li>
    <li>
      <strong>Test</strong>: suporte para testes unitários JNUIT testes de
      integração.
    </li>
  </ul>,

  <h3>Inversão de Controle (IoC – Inversion of Control)</h3>,
  <p>
    <strong>Inversão de controle</strong> é um padrão de projeto, em que um
    objeto apenas declara suas dependências sem criá-las e delega a tarefa de
    construir tais dependências a um Container IoC (Core Container).
  </p>,

  <h3>Injeção de Dependência</h3>,
  <p>
    <strong>Injeção de dependência</strong> é a implementação utilizada pelo
    Spring Framework de aplicar a Inversão de Controle quando necessário.
  </p>,

  <h3>Core Container</h3>,
  <strong>
    O Spring Framework utiliza da Injeção de Dependência para aplicar a Inversão
    de Controle no sistema e toda essa implementação está presente no Core
    Container, onde fica a base de configuração do Spring Framework.
  </strong>,
  <p>
    Quando a aplicação é executada, o Core Container é iniciado, as
    configurações da aplicação pré-definidas em classes ou arquivos XML são
    lidas e as dependências necessárias são definidas e criadas através da IoC e
    destruídas quando não mais fores utilizadas. Essas dependências são
    denominadas beans dentro do contexto Spring, que consistem em objetos os
    quais possuem seu ciclo de vida gerenciado pelo container de IoC/ID do
    Spring.
  </p>,

  <h3>Beans</h3>,

  <strong>
    Bean é um objeto que é instanciado, montado e gerenciado por um Container do
    Spring através da Inversão de Controle e Injeção de Dependência.
  </strong>,

  <p>
    Na configuração por annotations, é possível utilizar os estereótipos do
    Spring para determinar de forma mais objetiva qual o tipo de Bean será cada
    classe. Principais tipos de beans:
  </p>,
  <ul>
    <li>@Coponent</li>
    <li>@Service</li>
    <li>@Controller</li>
    <li>@Repository</li>
  </ul>,
  <p>
    Assim, ao anotar determinada classe com algum desses estereótipos, o Spring
    entende que tal classe é um Bean e será gerenciada por ele.
  </p>,

  <p>
    Considerando que os Beans gerenciados pelo Spring já foram definidos a
    próxima questão é entender como o Spring saberá onde injetar as instâncias
    que ele irá criar com suas dependências. Para isso é preciso criar os{" "}
    <strong>pontos de injeção</strong>, que consistem em uma maneira de entregar
    as dependência ao objeto que necessita.
  </p>,

  <strong>
    Os dois tipos de pontos de injeção mais comuns são os construtores e
    setters.
  </strong>,

  <p>
    Dentro do Spring, há uma outra maneira de se criar pontos de injeção de
    forma automática, utilizando a anotação <strong>@Autowired</strong>.
  </p>,
];
