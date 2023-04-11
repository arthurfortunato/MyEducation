import { PreCode } from "../../../components/PreCode";

export const paragraphs = [
  <p>
    Em Java, <strong>a interface Map</strong> é uma das interfaces da biblioteca
    de coleções do Java, que permite que as implementações forneçam uma
    estrutura de dados para armazenar pares chave-valor, onde cada valor é
    associado a uma chave exclusiva. As implementações mais comuns da interface
    Map em Java são:
  </p>,
  <p>
    <strong>HashMap</strong>: implementação de Map baseada em uma tabela de hash
    que permite a inserção, remoção e recuperação rápida de elementos com base
    em sua chave. Exemplo de uso do HashMap:
  </p>,

  <PreCode>
    <code>
      {`
        Map<String, Integer> mapaDeNotas = new HashMap<>();
        mapaDeNotas.put("João", 8);
        mapaDeNotas.put("Maria", 9);
        mapaDeNotas.put("Pedro", 7);
        System.out.println(mapaDeNotas); 
        // Imprime: {João=8, Maria=9, Pedro=7}
        int notaDaMaria = mapaDeNotas.get("Maria");
        System.out.println(notaDaMaria); 
        // Imprime: 9
        mapaDeNotas.remove("Pedro");
        System.out.println(mapaDeNotas); 
        // Imprime: {João=8, Maria=9}
      `}
    </code>
  </PreCode>,

  <p>
    <strong>TreeMap</strong>: implementação de Map baseada em uma árvore que
    mantém as chaves em ordem natural ou em uma ordem definida por um Comparator
    fornecido pelo usuário. Exemplo de uso do TreeMap:
  </p>,

  <PreCode>
    <code>
      {`
        Map<String, Integer> mapaDeNotas = new TreeMap<>();
        mapaDeNotas.put("João", 8);
        mapaDeNotas.put("Maria", 9);
        mapaDeNotas.put("Pedro", 7);
        System.out.println(mapaDeNotas); 
        // Imprime: {João=8, Maria=9, Pedro=7}
        int notaDaMaria = mapaDeNotas.get("Maria");
        System.out.println(notaDaMaria); 
        // Imprime: 9
        mapaDeNotas.remove("Pedro");
        System.out.println(mapaDeNotas); 
        // Imprime: {João=8, Maria=9}
      `}
    </code>
  </PreCode>,

  <p>
    <strong>LinkedHashMap</strong>: implementação de Map baseada em uma lista
    duplamente encadeada que mantém a ordem de inserção dos elementos. Exemplo
    de uso do LinkedHashMap:
  </p>,

  <PreCode>
    <code>
      {`
        Map<String, Integer> mapaDeNotas 
                        = new LinkedHashMap<>();
        mapaDeNotas.put("João", 8);
        mapaDeNotas.put("Maria", 9);
        mapaDeNotas.put("Pedro", 7);
        System.out.println(mapaDeNotas); 
        // Imprime: {João=8, Maria=9, Pedro=7}
        int notaDaMaria = mapaDeNotas.get("Maria");
        System.out.println(notaDaMaria); 
        // Imprime: 9
        mapaDeNotas.remove("Pedro");
        System.out.println(mapaDeNotas); 
        // Imprime: {João=8, Maria=9}
      `}
    </code>
  </PreCode>,

  <p>
    Em resumo, a interface Map e suas implementações em Java fornecem uma
    maneira conveniente e eficiente de manipular coleções de pares chave-valor.
    Cada implementação tem suas próprias características e é adequada para
    diferentes cenários de uso, como a necessidade de uma tabela de hash para
    acesso rápido, a necessidade de uma árvore para manter as chaves ordenadas
    ou a necessidade de manter a ordem de inserção dos elementos.
  </p>,
];
