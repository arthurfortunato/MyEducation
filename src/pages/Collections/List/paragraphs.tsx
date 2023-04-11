import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ArrayList = `
  List<String> listaDeNomes = new ArrayList<>();
  listaDeNomes.add("João");
  listaDeNomes.add("Maria");
  listaDeNomes.add("Pedro");
  System.out.println(listaDeNomes); 
  // Imprime: [João, Maria, Pedro]
`;

const LinkedList = `
  List<String> listaDeNomes = new LinkedList<>();
  listaDeNomes.add("João");
  listaDeNomes.add("Maria");
  listaDeNomes.add("Pedro");
  System.out.println(listaDeNomes); 
  // Imprime: [João, Maria, Pedro]
`;

export const paragraphs = [
  <p>
    Em Java, a <strong>interface List</strong> é uma das interfaces da
    biblioteca de coleções do Java, que permite que as implementações forneçam
    métodos para adicionar, remover e acessar elementos em uma lista. As
    implementações mais comuns da interface List em Java são:
  </p>,
  <p>
    <strong>ArrayList</strong>: implementação de List baseada em um array
    dinâmico que cresce automaticamente à medida que novos elementos são
    adicionados. É adequado para uso em listas que exigem operações de acesso e
    atualização frequentes. Exemplo de uso do ArrayList:
  </p>,

  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {ArrayList.trim()}
  </StyledSyntaxHighlighter>,

  <p>
    <strong>LinkedList</strong>: implementação de List baseada em uma lista
    duplamente encadeada que permite a inserção e remoção rápida de elementos em
    qualquer posição da lista. É adequado para uso em listas que exigem
    operações de inserção e remoção frequentes.
  </p>,

  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {LinkedList.trim()}
  </StyledSyntaxHighlighter>,
];
