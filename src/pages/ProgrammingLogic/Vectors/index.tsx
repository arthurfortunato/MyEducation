import { Container, Pre, Section } from "./styles";
import { Header } from "../../../components/Header";

export const Vectors = () => {
  return (
    <Container>
      <Header title="Vetores"/>
      
      <Section className="section section__vectors">
        <p>
          <strong>Vetor é uma sequência ordenada de valores</strong>. Também é
          chamado pelo nome em inglês, array. É denotado pelo uso de colchetes,
          com os valores separados por vírgula. Exemplo:
        </p>

        <br />

        <Pre>
          <code>
            {`
              let vetor = [1,2,3,4,5,6,7,8,9,10];
              
            `}
          </code>
        </Pre>

        <br />

        <p>
          Também é possível declarar o vetor vazio e ir adicionando pela posição
          os elementos:
        </p>

        <br />

        <Pre>
          <code>
            {`
              let vetor = []; 

              vetor[0] = 'teste'; 

              vetor[1] = 'teste2';
            `}
          </code>
        </Pre>

        <br />

        <p>
          Além de índice numérico é possível fazer índice associativo usando
          strings.
        </p>

        <Pre>
          <code>
            {`
              vetor['indice1'] = 'teste'; 

              vetor['indice2'] = 'teste2';
            `}
          </code>
        </Pre>

        <br />

        <p>
          <strong>Vetores são heterogêneos</strong>, isto é, podem guardar
          valores de tipos diferentes:
        </p>

        <Pre>
          <code>
            {`
              let vetor = [1,2,3,'a','b','c',true,false]; 

              let primeiro_elemento = vetor[0]; 

              let quinto_elemento = vetor[4];
            `}
          </code>
        </Pre>

        <br />

        <p>
          Porém, uma boa prática é construir vetores de um único tipo de dado.
          Para conseguir acessar um elemento específico, basta passar em
          colchetes o índice (posição) do elemento no vetor. Sendo a contagem da
          esquerda para a direita, iniciando em 0.
        </p>
      </Section>

      <Section className="section section__traversing-vector">
        <h2>Percorrendo o Vetor</h2>

        <p>
          Usando a estrutura de repetição for é possível percorrer todos os
          elementos de um vetor:
        </p>
        <br />

        <Pre>
          <code>
            {`
            let vetor = [1,2,3,4,5,6,7,8,9,10];

            for (let i = 0; i < vetor.length; i++){
                console.log(vetor[i]);
            }
          `}
          </code>
        </Pre>

        <br />

        <p>
          O i do for vai do valor 0 até o comprimento do vetor menos um. Note
          que vetor.length retorna o comprimento do mesmo.
        </p>

        <p>
          Há ainda dois laços for especiais que permitem percorrer um vetor com
          maior facilidade. O for-of:
        </p>

        <Pre>
          <code>
            {`
            const vetor = [10,20,30,40,50];

            for (let valor of vetor){
              console.log(valor);
            `}
          </code>
        </Pre>

        <br />

        <p>
          O <strong>for-of</strong> recebe um vetor e a variável declarada vai
          possuir os valores dos elementos do vetor. Assim percorrendo
          diretamente o array inteiro.
        </p>

        <p>
          A alternativa é o <strong>for-in</strong>, onde a variável declarada
          assume o valor dos índices do vetor passado:
        </p>

        <Pre>
          <code>
            {`
            const vetor = [10,20,30,40,50];

            for (let indice in vetor){
                console.log(indice, vetor[indice]);
           }
         `}
          </code>
        </Pre>
      </Section>

      <Section className="section section__matrices">
        <h2>Matrizes</h2>

        <p>
          <strong>
            Matrizes são vetores multidimensional, isto é, é um vetor de vetores
          </strong>
          . Portanto tudo que se aplica a vetor também vale para matrizes. A
          declaração de uma matriz segue o padrão
        </p>

        <Pre>
          <code>
            {`
            const matriz = [
                [1,2,3],
                [4,5,6],
                [7,8,9]
            ];

            for(let linha of matriz){
                for (let dado of linha){
                      console.log(dado);
                }
            }
         `}
          </code>
        </Pre>

        <br />

        <p>
          Para percorrer os elementos de uma matriz é necessário aninhar laços
          for. O primeiro para percorrer as linhas e o segundo os elementos
          dessa linha.
        </p>
      </Section>

      <Section className="section section__dynamic-vectors">
        <h2>Vetores Dinâmicos</h2>

        <p>
          Em JavaScript vetores são estruturas de dados dinâmicas, isto é, de
          tamanho variável. Para adicionar um elemento ao final do vetor, faça:
        </p>

        <Pre>
          <code>
            {`
              let vetor = [10,20,30,40,50]; 

              let novo_elemento = 60;

              vetor.push(novo_elemento);
            `}
          </code>
        </Pre>

        <br />

        <p>Para remover do final <strong>(POP)</strong>:</p>

        <Pre>
          <code>
            {`
            let vetor = [10,20,30,40,50]; 

            vetor.pop();
            `}
          </code>
        </Pre>

        <br />

        <p>Para adicionar ao começo <strong>(UNSHIFT)</strong>:</p>

        <Pre>
          <code>
            {`
              let vetor = [10,20,30,40,50]; 

              let novo_elemento = 0;

              vetor.unshift(novo_elemento);
            `}
          </code>
        </Pre>

        <br />

        <p>Para remover do começo <strong>(SHIFT)</strong>:</p>

        <Pre>
          <code>
            {`
            let vetor = [10,20,30,40,50];

            vetor.shift();
            `}
          </code>
        </Pre>
      </Section>
    </Container>
  );
};
