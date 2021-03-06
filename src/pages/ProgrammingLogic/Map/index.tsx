import { Container, Header, Pre, Section } from "./styles";

export const Map = () => {
  return (
    <Container>
      <Header>
        <h1>Map</h1>
      </Header>

      <Section className="section section__map">
        <p>
          A função <strong>Map</strong> é o primeiro caso de aplicação de função
          de alta ordem que vamos ver.{" "}
          <strong>
            Essa função é usada para transformar vetores. Passamos uma função
            para o Map, e essa função é aplicada a cada item do vetor
          </strong>
          .
          <br />
          <br />
          Vamos supor que temos um vetor numérico e queremos criar um vetor que
          é o dobro do anterior.
        </p>

        <Pre>
          <code>
            {`
            const vetor = [1,2,3,4,5,6];

            const dobro = (item) => 2 * item;
  
            const vetorDobrado = vetor.map(dobro);
         `}
          </code>
        </Pre>
        <br />
        <p>
          Criamos a variável dobro para salvar a função que recebe um item e
          retorna o mesmo multiplicado por dois. Ao passar como parâmetro para o
          map, que é utilizado com um ponto na variável que armazena o nosso
          vetor, a função dobro é chamado onde cada item do vetor é passado de
          parâmetro. Então, o resultado é salvo numa nova variável vetorDobrado,
          isso é necessário pois
          <strong>o map não altera o vetor original</strong>.
          <br />
          <br />
          <strong>
            É possível passar mais dois parâmetros para as funções no map. O
            primeiro parâmetro é sempre o próprio elemento, o segundo é a sua
            posição no vetor e o terceiro é o próprio vetor.
          </strong>
        </p>

        <Pre>
          <code>
            {`
              //Função que eleva ao quadrado
              const aoQuadrado = (item, indice, vetor) => {
                return vetor[indice]*item;
              }  
            `}
          </code>
        </Pre>
        <br />
        <p>É possível escrever a função diretamente dentro do map.</p>

        <Pre>
          <code>
            {`
            const vetor = [1,2,3,4,5,6];

            const vetorTransformado = vetor.map((x)=>x+1);
          `}
          </code>
        </Pre>
        <br />
        <p>
          <strong>O map exige que seja passado pelo menos um parâmetro para a função</strong>.
          Então para usar métodos de um tipo específico de dado também é
          necessário fazer a declaração de uma função. Exemplo:
        </p>

        <Pre>
          <code>
            {`
             const vetor = ["a","b","c"];

             const toUpper = (str) => str.toUpperCase();
             
             const maiusculas = vetor.map(toUpper);
          `}
          </code>
        </Pre>
        <br />
        <p>
          No código acima tínhamos um vetor de caracteres que para passar para
          maiúsculo definimos a função toUpper, que recebe uma string e aplica o
          método toUpperCase.
        </p>
      </Section>
    </Container>
  );
};
