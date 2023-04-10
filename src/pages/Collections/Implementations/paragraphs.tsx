import implementations from "../../../assets/Collections/implementations.png";

export const paragraphs = [
  <p>
    As interfaces apresentadas anteriormente possuem diversas implementações que
    são utilizadas para armazenar as coleções. Na Tabela abaixo estão resumidas
    as implementações mais comuns.
  </p>,

  <img src={implementations} alt="" />,

  <p>
    <strong>ArrayList</strong> – é como um array cujo tamanho pode crescer. A
    busca de um elemento é rápida, mas inserções e exclusões não são. Podemos
    afirmar que as inserções e exclusões são lineares, o tempo cresce com o
    aumento do tamanho da estrutura. Esta implementação é preferível quando se
    deseja acesso mais rápido aos elementos. Por exemplo, se você quiser criar
    um catálogo com os livros de sua biblioteca pessoal e cada obra inserida
    receber um número sequencial (que será usado para acesso) a partir de zero;
  </p>,
  <p>
    <strong>LinkedList</strong> – implementa uma lista ligada, ou seja, cada nó
    contém o dado e uma referência para o próximo nó. Ao contrário do ArrayList,
    a busca é linear e inserções e exclusões são rápidas. Portanto, prefira
    LinkedList quando a aplicação exigir grande quantidade de inserções e
    exclusões. Um pequeno sistema para gerenciar suas compras mensais de
    supermercado pode ser uma boa aplicação, dada a necessidade de constantes
    inclusões e exclusões de produtos;
  </p>,
  <p>
    <strong>HashSet</strong> – o acesso aos dados é mais rápido que em um
    TreeSet, mas nada garante que os dados estarão ordenados. Escolha este
    conjunto quando a solução exigir elementos únicos e a ordem não for
    importante. Poderíamos usar esta implementação para criar um catálogo
    pessoal das canções da nossa discografia;
  </p>,
  <p>
    <strong>TreeSet</strong> – os dados são classificados, mas o acesso é mais
    lento que em um HashSet. Se a necessidade for um conjunto com elementos não
    duplicados e acesso em ordem natural, prefira o TreeSet. É recomendado
    utilizar esta coleção para as mesmas aplicações de HashSet, com a vantagem
    dos objetos estarem em ordem natural;
  </p>,
  <p>
    <strong>LinkedHashSet</strong> – é derivada de HashSet, mas mantém uma lista
    duplamente ligada através de seus itens. Seus elementos são iterados na
    ordem em que foram inseridos. Opcionalmente é possível criar um
    LinkedHashSet que seja percorrido na ordem em que os elementos foram
    acessados na última iteração. Poderíamos usar esta implementação para
    registrar a chegada dos corredores de uma maratona;
  </p>,
  <p>
    <strong>HashMap</strong> – baseada em tabela de espalhamento, permite chaves
    e valores null. Não existe garantia que os dados ficarão ordenados. Escolha
    esta implementação se a ordenação não for importante e desejar uma estrutura
    onde seja necessário um ID (identificador). Um exemplo de aplicação é o
    catálogo da biblioteca pessoal, onde a chave poderia ser o ISBN
    (International Standard Book Number);
  </p>,
  <p>
    <strong>TreeMap</strong> – implementa a interface SortedMap. Há garantia que
    o mapa estará classificado em ordem ascendente das chaves. Mas existe a
    opção de especificar uma ordem diferente. Use esta implementação para um
    mapa ordenado. Aplicação semelhante a HashMap, com a diferença que TreeMap
    perde no quesito desempenho;
  </p>,
  <p>
    <strong>LinkedHashMap</strong> – mantém uma lista duplamente ligada através
    de seus itens. A ordem de iteração é a ordem em que as chaves são inseridas
    no mapa. Se for necessário um mapa onde os elementos são iterados na ordem
    em que foram inseridos, use esta implementação. O registro dos corredores de
    uma maratona, onde a chave seria o número que cada um recebe no ato da
    inscrição, é um exemplo de aplicação desta coleção.
  </p>,
];
