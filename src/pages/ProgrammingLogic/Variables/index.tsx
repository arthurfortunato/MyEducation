import { Container, Section } from "./styles";
import { AiOutlineCaretRight } from "react-icons/ai";
import { Header } from "../../../components/Header";

export const Variables = () => {
  return (
    <Container>
      <Header title="Variáveis" />

      <Section className="section section__variables">
        <p>
          <strong>Variáveis</strong> são o conceito mais básico da programação.
          De forma super simplificada{" "}
          <strong>é atribuir um "apelido" a um valor</strong>. Isso permite que
          esse valor seja lido e modificado durante o programa.
          <br />
          <br />
          No entanto, por baixo dos panos, seu programa está solicitando que o
          sistema operacional da sua máquina reserve um pedaço de memória RAM
          para guardar esse valor. Diferentes tipos de valor têm tamanhos
          diferentes. Por isso, o sistema precisa saber de antemão qual tipo
          utilizar.
          <br />
          <br />
          Existem duas vertentes de linguagens que tratam isso de forma
          diferente:
          <br />
          <br />
          <AiOutlineCaretRight color="#f5b324" />
          <strong>Estática</strong>, obriga a variável ser de um tipo exclusivo
          de informação. Isto é, uma variável numérica é sempre numérica. Você
          pode alterar o número armazenado mas não pode mudar a informação para
          texto por exemplo. Geralmente essas linguagens exigem declarar o tipo
          ao criar a variável para reservar memória, mesmo que a variável ainda
          não tenha valor.
          <br />
          <br />
          <AiOutlineCaretRight color="#f5b324" />
          <strong>Dinâmica</strong>, em que o tipo é inferido implicitamente e
          este pode ser mudado ao longo do código. A memória só é alocada se a
          variável tiver um valor. Este é o caso de JavaScript.
          <br />
          <br />
          O tipos de informação que podem ser salvos em variáveis são:
          <br />
        </p>
      </Section>

      <Section className="section section__primitives">
        <h2>Primitivos</h2>

        <p>
          <AiOutlineCaretRight color="#f5b324" /> <strong>undefined</strong>:
          Não há tipo nem valor;
          <br />
          <AiOutlineCaretRight color="#f5b324" /> <strong>boolean</strong>:
          Verdadeiro ou Falso;
          <br />
          <AiOutlineCaretRight color="#f5b324" /> <strong>string</strong>:
          Textos;
          <br />
          <AiOutlineCaretRight color="#f5b324" /> <strong>number</strong>:
          Números;
          <br />
        </p>
      </Section>

      <Section className="section section__complexes">
        <h2>Complexos</h2>

        <p>
          <AiOutlineCaretRight color="#f5b324" />
          <strong>function</strong>: funções
          <br />
          <AiOutlineCaretRight color="#f5b324" />
          <strong>object</strong>: objetos
          <br />
        </p>

        <p>
          Tipos primitivos são as informações básicas que uma linguagem consegue
          armazenar. Todas construção de dados mais complexos decorre da
          utilização desses. Também podem ser armazenados funções (muito
          importante) e objetos em variáveis. Os tipos primitivos são, números,
          texto (representado entre aspas) e booleano (valor lógico verdadeiro
          ou falso). O undefined representa uma variável sem valor atribuído.
          <br />
          <br />
          <strong>
            O null representa uma informação vazia. Diferente de undefined, ele
            mostra que a variável foi declarada mas com valor vazio.
          </strong>
          <br />
          <br />
          Em JavaScript, temos um comportamento estranho das variáveis. Elas
          podem ser declaradas depois de utilizadas, pois elas são levantadas
          para o início do escopo. Isso se chama <strong>hoisting</strong>.
          <br />
          <br />
          Usando <strong>var</strong> variáveis não respeitam seu escopo, uma
          variável declarada em uma função estará disponível depois do escopo da
          função.
          <br />
          <br />
          Esses comportamentos são peculiares e diferentes de muitas linguagens,
          por isso padronizamos usar <strong>let</strong> em vez de var, o que
          fará com que os escopos sejam respeitados.
          <br />
          <br />O <strong>const</strong> impede que o valor possa ser alterado
          após ser iniciado, gerando um erro ao ser tentado.
          <br />
        </p>
      </Section>
    </Container>
  );
};
