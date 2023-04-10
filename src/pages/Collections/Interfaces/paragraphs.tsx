export const paragraphs = [
  <p>
    <strong>Collection</strong> – está no topo da hierarquia. Não existe
    implementação direta dessa interface, mas ela define as operações básicas
    para as coleções, como adicionar, remover, esvaziar, etc.;
  </p>,
  <p>
    <strong>Set</strong> – interface que define uma coleção que não permite
    elementos duplicados. A interface SortedSet, que estende Set, possibilita a
    classificação natural dos elementos, tal como a ordem alfabética;
  </p>,
  <p>
    <strong>List</strong> – define uma coleção ordenada, podendo conter
    elementos duplicados. Em geral, o usuário tem controle total sobre a posição
    onde cada elemento é inserido e pode recuperá-los através de seus índices.
    Prefira esta interface quando precisar de acesso aleatório, através do
    índice do elemento;
  </p>,
  <p>
    <strong>Queue</strong> – um tipo de coleção para manter uma lista de
    prioridades, onde a ordem dos seus elementos, definida pela implementação de
    Comparable ou Comparator, determina essa prioridade. Com a interface fila
    pode-se criar filas e pilhas;
  </p>,
  <p>
    <strong>Map</strong> – mapeia chaves para valores. Cada elemento tem na
    verdade dois objetos: uma chave e um valor. Valores podem ser duplicados,
    mas chaves não. SortedMap é uma interface que estende Map, e permite
    classificação ascendente das chaves. Uma aplicação dessa interface é a
    classe Properties, que é usada para persistir propriedades/configurações de
    um sistema, por exemplo.
  </p>,

  <p>
    Observe que usamos acima os termos <strong>ordenação</strong> e{" "}
    <strong>classificação</strong>. Dizemos que uma estrutura está ordenada se
    ela pode ser percorrida (iterada) em uma certa ordem, tal como os itens de
    um ArrayList podem ser percorridos através de seus índices. Por sua vez, a
    classificação diz respeito à ordenação na essência dos dados, tal como a
    classificação em ordem alfabética de Strings ou ordem numérica das classes
    wrapper, como Integer e Double, por exemplo. Podemos afirmar que uma
    estrutura classificada é uma estrutura ordenada, mas o inverso não é
    verdadeiro.
  </p>,
];
