import collection from "../../../assets/Collections/collectionInterface.png";
import map from "../../../assets/Collections/map.jpg";

export const paragraphs = [
  <p>
    Collections Framework é um conjunto bem definido de interfaces e classes
    para representar e tratar grupos de dados como uma única unidade, que pode
    ser chamada coleção, ou collection. A Collections Framework contém os
    seguintes elementos:
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
    A Figura mostra a árvore da hierarquia de interfaces e classes da Java
    Collections Framework que são derivadas da interface Collection. O diagrama
    usa a notação da UML, onde as linhas cheias representam extends e as linhas
    pontilhadas representam implements.
  </p>,

  <p>
    A hierarquia da Collections Framework tem uma segunda árvore. São as classes
    e interfaces relacionadas a mapas, que não são derivadas de Collection.
    Essas interfaces, mesmo não sendo consideradas coleções, podem ser
    manipuladas como tal.
  </p>,

  <img src={map} alt="" />
];
