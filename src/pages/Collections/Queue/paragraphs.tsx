import { PreCode } from "../../../components/PreCode";

export const paragraphs = [
  <p>
    Em Java, a <strong>interface Queue</strong> é uma das interfaces da
    biblioteca de coleções do Java, que permite que as implementações forneçam
    métodos para inserir, remover e acessar elementos em uma fila. A principal
    característica de uma fila é que ela segue o princípio "primeiro a entrar,
    primeiro a sair" (FIFO - First In First Out). As implementações mais comuns
    da interface Queue em Java são:
  </p>,
  <p>
    <strong>LinkedList</strong>: implementação de Queue baseada em uma lista
    duplamente encadeada que permite a inserção e remoção rápida de elementos no
    início e no fim da fila. Exemplo de uso do LinkedList como Queue:
  </p>,

  <PreCode>
    <code>
      {`
        Queue<String> filaDeNomes = new LinkedList<>();
        filaDeNomes.add("João");
        filaDeNomes.add("Maria");
        filaDeNomes.add("Pedro");
        System.out.println(filaDeNomes); 
        // Imprime: [João, Maria, Pedro]
        String primeiroDaFila = filaDeNomes.remove();
        System.out.println(primeiroDaFila); 
        // Imprime: João
        System.out.println(filaDeNomes); 
        // Imprime: [Maria, Pedro]
      `}
    </code>
  </PreCode>,

  <p>
    <strong>PriorityQueue</strong>: implementação de Queue baseada em uma fila
    de prioridade que ordena os elementos com base em uma ordem definida pela
    implementação da interface Comparable ou um Comparator fornecido pelo
    usuário. Exemplo de uso do PriorityQueue:
  </p>,

  <PreCode>
    <code>
      {`
        Queue<Integer> filaDeNumeros = new PriorityQueue<>();
        filaDeNumeros.add(10);
        filaDeNumeros.add(5);
        filaDeNumeros.add(8);
        System.out.println(filaDeNumeros); 
        // Imprime: [5, 10, 8]
        int primeiroDaFila = filaDeNumeros.remove();
        System.out.println(primeiroDaFila); 
        // Imprime: 5
        System.out.println(filaDeNumeros); 
        // Imprime: [8, 10]
      `}
    </code>
  </PreCode>,

  <p>
    <strong>ArrayDeque</strong>: implementação de Queue baseada em um array
    dinâmico que permite a inserção e remoção rápida de elementos no início e no
    fim da fila. Além disso, ela também pode ser usada como uma pilha (Stack)
    com os métodos push e pop. Exemplo de uso do ArrayDeque:
  </p>,

  <PreCode>
    <code>
      {`
        Deque<String> filaDeNomes = new ArrayDeque<>();
        filaDeNomes.add("João");
        filaDeNomes.add("Maria");
        filaDeNomes.add("Pedro");
        System.out.println(filaDeNomes); 
        // Imprime: [João, Maria, Pedro]
        String primeiroDaFila = filaDeNomes.remove();
        System.out.println(primeiroDaFila); 
        // Imprime: João
        filaDeNomes.push("Carlos");
        System.out.println(filaDeNomes); 
        // Imprime: [Carlos, Maria, Pedro]
        String ultimoDaFila = filaDeNomes.pop();
        System.out.println(ultimoDaFila); 
        // Imprime: Pedro
        System.out.println(filaDeNomes); 
        // Imprime: [Carlos, Maria]
      `}
    </code>
  </PreCode>,

  <p>
    Em resumo, a interface Queue e suas implementações em Java fornecem uma
    maneira conveniente e eficiente de manipular coleções de objetos em uma
    fila. Cada implementação tem suas próprias características e é adequada para
    diferentes cenários de uso, como a necessidade de uma fila ordenada por
    prioridade ou a necessidade de acesso rápido em ambas as extremidades da
    fila. Além disso, a implementação ArrayDeque também pode ser usada como uma
    pilha (Stack) com os métodos push e pop.
  </p>,
];
