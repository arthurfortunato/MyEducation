import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const exampleAbstractClass = `
public abstract class Animal {
    // Método abstrato (sem implementação)
    public abstract void fazerSom();

    // Método concreto (com implementação)
    public void dormir() {
        System.out.println("Animal está dormindo...");
    }
}
`;

const exampleAbstractClassDog = `
public class Cachorro extends Animal {
    @Override
    public void fazerSom() {
        System.out.println("Cachorro latindo...");
    }
}
`;

export const paragraphs = [
  <p>
    Em Java, uma <strong>classe abstrata</strong> é uma classe que não pode ser
    instanciada diretamente e que geralmente é usada como uma classe base para
    outras classes derivadas. Uma <strong>classe abstrata</strong> pode ter
    métodos abstratos, que são métodos sem implementação, e métodos concretos,
    que têm implementação definida.
  </p>,
  <p>
    Para definir uma <strong>classe abstrata</strong> em Java, é necessário
    utilizar o modificador de acesso <strong>"abstract"</strong> na declaração
    da classe. Por exemplo:
  </p>,

  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {exampleAbstractClass.trim()}
  </StyledSyntaxHighlighter>,

  <p>
    Aqui, <strong>Animal</strong> é uma <strong>classe abstrata</strong> que
    define um método abstrato <strong>fazerSom()</strong> e um método concreto
    <strong> dormir()</strong>.
  </p>,

  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {exampleAbstractClassDog.trim()}
  </StyledSyntaxHighlighter>,

  <p>
    A <strong>classe Cachorro </strong>herda de <strong>Animal</strong> e é
    obrigada a fornecer uma implementação para o método abstrato{" "}
    <strong>fazerSom()</strong>. Porém, ela pode usar diretamente o método
    <strong> dormir()</strong> da classe Animal.
  </p>,

  <p>
    Uma classe abstrata pode ser útil para definir uma classe base que possui
    atributos e métodos comuns a outras classes que serão derivadas dela,
    permitindo uma maior modularidade e reutilização de código no
    desenvolvimento de software.
  </p>,

  <h2>Classe Abstrata x Interface</h2>,

  <p>
    Em Java, tanto as <strong>classes abstratas</strong> quanto as{" "}
    <strong>interfaces</strong> são usadas para definir contratos que as classes
    concretas devem implementar. No entanto, existem algumas diferenças
    importantes entre elas:
  </p>,

  <ul>
    <li>
      <strong>Implementação de métodos</strong>: Uma classe abstrata pode ter
      métodos abstratos e métodos concretos com implementação definida, enquanto
      uma interface só pode ter métodos abstratos, ou seja, sem implementação.
    </li>
    <li>
      <strong>Herança</strong>: Uma classe abstrata pode estender outra classe
      abstrata ou implementar uma ou mais interfaces, enquanto uma interface só
      pode estender outras interfaces.
    </li>
    <li>
      <strong>Modificadores de acesso</strong>: Os membros de uma interface são
      públicos e abstratos por padrão, enquanto uma classe abstrata pode ter
      membros com qualquer tipo de modificador de acesso (public, protected,
      private).
    </li>
    <li>
      <strong>Construtores</strong>: Uma classe abstrata pode ter construtores,
      enquanto uma interface não pode.
    </li>
  </ul>,

  <p>
    Em geral, as <strong>classes abstratas</strong> são usadas quando se deseja
    fornecer uma implementação base para um conjunto de classes derivadas e para
    criar relacionamentos de herança. As <strong>interfaces</strong>, por outro
    lado, são usadas para definir um contrato que as classes devem seguir,
    permitindo que diferentes classes implementem o mesmo conjunto de métodos.
  </p>,
];
