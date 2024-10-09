import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const exampleSimple = `
class Animal {
    public void fazerSom() {
        System.out.println("Animal fazendo som...");
    }
}

class Cachorro extends Animal {
    @Override
    public void fazerSom() {
        System.out.println("Cachorro latindo...");
    }
}

public class ExemploLSP {
    public static void main(String[] args) {
        Animal meuAnimal = new Cachorro();  // Substituindo por uma subclasse
        meuAnimal.fazerSom();  // Funciona como esperado, imprime "Cachorro latindo..."
    }
}
`;

const exampleViolation = `
class Animal {
    public void andar() {
        System.out.println("Animal andando...");
    }
}

class Peixe extends Animal {
    @Override
    public void andar() {
        throw new UnsupportedOperationException("Peixe não pode andar!");
    }
}

public class ExemploViolacaoLSP {
    public static void main(String[] args) {
        Animal meuAnimal = new Peixe();
        meuAnimal.andar();  // Lança exceção! Quebra o comportamento esperado de "andar".
    }
}
`;

const exampleUnbounded = `
public static void imprimirLista(List<?> lista) {
    for (Object obj : lista) {
        System.out.println(obj);
    }
}
`;

const exampleUpperbounded = `
public static void processarAnimais(List<? extends Animal> animais) {
    for (Animal a : animais) {
        a.fazerSom();  // Funciona porque todos são subclasses de Animal
    }
}
`;

const exampleLowerbounded = `
public static void adicionarAnimais(List<? super Cachorro> lista) {
    lista.add(new Cachorro());  // Você pode adicionar Cachorro ou subclasses
}
`;

export const paragraphs = [
  <p>
    O <strong>Princípio de Substituição de Liskov (LSP)</strong> faz parte dos
    princípios <strong>SOLID</strong> de design de software orientado a objetos.
    Ele estabelece que uma classe derivada (subclasse) deve poder ser
    substituída por sua classe base (superclasse) sem que o comportamento do
    programa seja alterado. Ou seja,{" "}
    <strong>
      objetos de uma subclasse devem ser capazes de substituir objetos da
      superclasse sem comprometer a funcionalidade ou violar as expectativas do
      código que os utiliza
    </strong>
    .
  </p>,
  <p>
    Se você tem uma classe <strong>Animal</strong> e uma classe{" "}
    <strong>Cachorro</strong> que herda de <strong>Animal</strong>, qualquer
    lugar do código que espera um objeto do tipo <strong>Animal</strong> deve
    funcionar corretamente se você passar um objeto do tipo{" "}
    <strong>Cachorro</strong>. Isso significa que a subclasse{" "}
    <strong>(Cachorro)</strong> não deve alterar o comportamento esperado do
    sistema, mas sim estender ou especializar a superclasse de forma coerente.
  </p>,

  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {exampleSimple.trim()}
  </StyledSyntaxHighlighter>,

  <p>
    Neste caso, o método <strong>fazerSom()</strong> de{" "}
    <strong>Cachorro</strong> substitui corretamente o comportamento de{" "}
    <strong>Animal</strong> sem causar problemas no código.
  </p>,

  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {exampleViolation.trim()}
  </StyledSyntaxHighlighter>,

  <p>
    Aqui, a classe <strong>Peixe</strong> violaria o <strong>LSP</strong> porque
    redefiniu o comportamento esperado do método <strong>andar()</strong>, o que
    causaria erros no sistema.
  </p>,

  <h2>Wildcards em Generics</h2>,

  <p>
    Em Java, <strong>wildcards</strong> são utilizados para tornar os tipos
    genéricos mais flexíveis. O <strong>wildcard</strong> é representado por um
    <strong> ?</strong> e permite que você especifique um tipo desconhecido em
    uma classe, interface ou método genérico.
  </p>,
  <p>
    Existem três tipos principais de <strong>wildcards</strong> em Java: <br />
    1. <strong>Unbounded Wildcard {"(<?>)"}</strong> <br />
    2. <strong>Upper-bounded Wildcard {"(<? extends Tipo>)"}</strong> <br />
    3. <strong>Lower-bounded Wildcard {"(<? super Tipo>)"}</strong>
  </p>,

  <p>
    <strong>Unbounded Wildcard {"(<?>)"}</strong>: O <strong>{"<?>"}</strong>{" "}
    significa "qualquer tipo". Isso é útil quando você não se importa com o tipo
    exato e quer que o método aceite qualquer tipo de dado.
  </p>,

  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {exampleUnbounded.trim()}
  </StyledSyntaxHighlighter>,

  <p>
    Aqui, o método <strong>imprimirLista</strong> pode aceitar uma lista de
    qualquer tipo {"(List<Integer>, List<String>, etc.)"}. Ele funciona para
    qualquer tipo, mas dentro do método você só pode tratar os elementos como
    objetos genéricos do tipo Object.
  </p>,

  <p>
    <strong>Upper-bounded Wildcard {"(<? extends Tipo>)"}</strong>: O{" "}
    <strong>{"<? extends Tipo>"}</strong> significa que o tipo pode ser qualquer
    coisa que seja subclasse de Tipo (ou o próprio Tipo). Isso é útil quando
    você quer garantir que os objetos na coleção ou parâmetro sejam de um tipo
    específico ou uma subclasse.
  </p>,

  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {exampleUpperbounded.trim()}
  </StyledSyntaxHighlighter>,

  <p>
    Neste exemplo, List{"<? extends Animal>"} permite que você passe uma lista
    de <strong>Cachorro</strong>, <strong>Gato</strong>, ou qualquer subclasse
    de <strong>Animal</strong>. Você pode chamar métodos definidos na classe
    Animal, mas não pode adicionar novos elementos à lista.
  </p>,

  <p>
    <strong>Lower-bounded Wildcard {"(<? super Tipo>)"}</strong>: O{" "}
    <strong>{"<? super Tipo>"} </strong>significa que o tipo pode ser Tipo ou
    qualquer superclasse de Tipo. Isso é útil quando você deseja garantir que
    pode adicionar objetos de um tipo específico a uma coleção.
  </p>,

  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {exampleLowerbounded.trim()}
  </StyledSyntaxHighlighter>,

  <p>
    Aqui, List{"<? super Cachorro>"} garante que você pode adicionar objetos do
    tipo <strong>Cachorro</strong> ou de uma subclasse de{" "}
    <strong>Cachorro</strong> à lista, mas não permite a leitura de elementos
    específicos da lista como Cachorro diretamente (você os lê como Object).
  </p>,

  <p>
    Resumo sobre Wildcards
    <ul>
      <li>
        <strong>{"<?>"}</strong>: Aceita qualquer tipo.
      </li>
      <li>
        <strong>{"<? extends T>"}</strong>: Aceita T ou qualquer subclasse de T,
        mas você só pode ler dados.
      </li>
      <li>
        <strong>{" <? super T>"}</strong>: Aceita T ou qualquer superclasse de
        T, mas você só pode adicionar dados.
      </li>
    </ul>
  </p>,

  <p>
    O <strong>Liskov Substitution Principle (LSP)</strong> garante que as
    subclasses possam substituir suas superclasses sem quebrar o comportamento
    do sistema.
  </p>,

  <p>
    <strong>Wildcards</strong> em <strong>Generics</strong> tornam os tipos
    genéricos mais flexíveis, permitindo que você use herança e polimorfismo de
    maneira eficaz em coleções genéricas.
  </p>,
];
