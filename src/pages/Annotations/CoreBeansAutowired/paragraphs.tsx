export const paragraphs = [
  <p>
    A injeção de dependência é um dos conceitos fundamentais do Spring
    Framework. Ela permite que as dependências entre classes sejam gerenciadas
    pelo Spring, tornando a aplicação mais modular e fácil de manter.
  </p>,
  <strong>
    Para que o Spring possa injetar as dependências corretamente, é necessário
    criar pontos de injeção nas classes que precisam das dependências. Existem
    várias formas de criar pontos de injeção, incluindo construtores, setter
    methods e fields.
  </strong>,
  <p>
    Uma das formas mais comuns de criar pontos de injeção é usando a annotation{" "}
    <strong>@Autowired</strong>. Essa annotation permite que o Spring injete
    automaticamente as dependências necessárias em um Bean, sem a necessidade de
    escrever código adicional.
  </p>,
  <p>
    Outra opção é usar construtores para injetar as dependências de um Bean.
    Isso pode ajudar a garantir que todas as dependências necessárias estejam
    disponíveis antes que o Bean seja criado.
  </p>,
  <p>
    Também é possível usar setter methods para injetar as dependências de um
    Bean. Isso pode tornar o código mais flexível e fácil de entender, mas pode
    ser menos eficiente do que o uso de construtores.
  </p>,
  <p>
    Em resumo, a injeção de dependência é uma técnica fundamental no Spring
    Framework que permite que as dependências entre classes sejam gerenciadas de
    forma eficiente e modular. Com as annotations adequadas e boas práticas de
    programação, podemos garantir que nossos Beans sejam criados e injetados
    corretamente, facilitando o desenvolvimento e manutenção de aplicações
    Spring.
  </p>,
];
