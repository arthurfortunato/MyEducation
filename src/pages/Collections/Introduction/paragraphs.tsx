import collection from "../../../assets/Collections/collectionInterface.png";
import map from "../../../assets/Collections/map.jpg";

export const paragraphs = [
  <p>
    <strong>Collections Framework </strong>é um conjunto bem definido de
    interfaces e classes para representar e tratar grupos de dados como uma
    única unidade, que pode ser chamada <strong>coleção</strong>, ou{" "}
    <strong>collection</strong>.
  </p>,
  <p>
    Existem vários tipos de <strong>coleções</strong> e a escolha do tipo
    correto vai depender principalmente do cenário de uso.
  </p>,
  <p>
    Alguns critérios que devem ser considerados são:
    <ul>
      <li>
        A <strong>coleção</strong> precisa de ordenação?
      </li>
      <li>
        A <strong>ordem</strong> dos elementos importa para a lógica do
        programa?
      </li>
      <li>
        Eu vou permitir <strong>registros duplicados</strong>?
      </li>
      <li>
        Qual a <strong>rapidez</strong> nas operações que a gente deseja? Que
        tipo de operação deve ser mais ágil (Escrita, consulta, inserção)?
      </li>
      <li>
        Qual o uso de <strong>memória</strong> esperado?
      </li>
    </ul>
  </p>,
  <p>
    A <strong>Collections Framework</strong> contém os seguintes elementos:
  </p>,
  <p>
    <strong>Interfaces</strong>: tipos abstratos que representam as coleções.
    Permitem que coleções sejam manipuladas tendo como base o conceito
    “Programar para interfaces e não para implementações”, desde que o acesso
    aos objetos se restrinja apenas ao uso de métodos definidos nas interfaces;
  </p>,
  <p>
    <strong>Implementações</strong>: são as implementações concretas das
    interfaces;
  </p>,
  <p>
    <strong>Algoritmos</strong>: são os métodos que realizam as operações sobre
    os objetos das coleções, tais como busca e ordenação.
  </p>,

  <img src={collection} alt="" />,

  <p>
    A Figura mostra a árvore da hierarquia de <strong>interfaces</strong> e
    classes da <strong>Java Collections Framework</strong> que são derivadas da
    <strong>interface Collection</strong>. O diagrama usa a notação da UML, onde
    as linhas cheias representam extends e as linhas pontilhadas representam
    implements.
  </p>,

  <p>
    A hierarquia da <strong>Collections Framework</strong> tem uma segunda
    árvore. São as <strong>classes</strong> e <strong>interfaces</strong>{" "}
    relacionadas a mapas, que não são derivadas de <strong>Collection</strong>.
    Essas <strong>interfaces</strong>, mesmo não sendo consideradas{" "}
    <strong>coleções</strong>, podem ser manipuladas como tal.
  </p>,

  <img src={map} alt="" />,
];
