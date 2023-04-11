import { PreCode } from "../../../components/PreCode";

export const paragraphs = [
  <p>
    Em Java, a <strong>interface Set</strong> é uma das interfaces da biblioteca
    de coleções do Java, que permite que as implementações forneçam métodos para
    adicionar, remover e verificar se um elemento pertence a um conjunto. A
    principal característica do Set é que ele não permite elementos duplicados.
    As implementações mais comuns da interface Set em Java são:
  </p>,
  <p>
    <strong>HashSet</strong>: implementação de Set baseada em tabela de
    espalhamento (hash table) que fornece acesso rápido aos elementos e não
    mantém a ordem em que os elementos foram inseridos. Exemplo:
  </p>,

  <PreCode>
    <code>
      {`
        Set<String> conjuntoDeNomes = new HashSet<>();
        conjuntoDeNomes.add("João");
        conjuntoDeNomes.add("Maria");
        conjuntoDeNomes.add("Pedro");
        conjuntoDeNomes.add("Maria"); 
        // Não adiciona um segundo "Maria"
        System.out.println(conjuntoDeNomes); 
        // Imprime: [Pedro, João, Maria]
      `}
    </code>
  </PreCode>,

  <p>
    <strong>LinkedHashSet</strong>: implementação de Set baseada em tabela de
    espalhamento que mantém a ordem em que os elementos foram inseridos.Exemplo:
  </p>,
  <PreCode>
    <code>
      {`
        Set<String> conjuntoDeNomes = new LinkedHashSet<>();
        conjuntoDeNomes.add("João");
        conjuntoDeNomes.add("Maria");
        conjuntoDeNomes.add("Pedro");
        conjuntoDeNomes.add("Maria"); 
        // Não adiciona um segundo "Maria"
        System.out.println(conjuntoDeNomes); 
        // Imprime: [João, Maria, Pedro]
      `}
    </code>
  </PreCode>,

  <p>
    Em resumo, a interface Set e suas implementações em Java fornecem uma
    maneira conveniente e eficiente de manipular coleções de objetos que não
    permitem elementos duplicados. Cada implementação tem suas próprias
    características e é adequada para diferentes cenários de uso, como a ordem
    dos elementos ou a necessidade de acesso rapido.
  </p>,
];
