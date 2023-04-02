import { Container, Pre, Section } from "./styles";
import { Header } from "../../../components/Header";

export const LoopRepetition = () => {
  return (
    <Container>
      <Header title="Laços de Repetição" />

      <Section className="section section__while">
        <p>
          Afim de fazer operações repetitivas, o JavaScript oferece algumas
          opções de estruturas de repetições. Também chamados de laços ou loops.
        </p>
        <h2>While</h2>

        <p>
          <strong>
            {" "}
            O while é a estrutura que executa um código enquanto uma condição
            for verdadeira
          </strong>
          . Exemplo:
        </p>

        <Pre>
          <code>
            {`
              let count = 0; 

              while(count < 100){
                  console.log(count);
                  count++;
              }
          `}
          </code>
        </Pre>

        <p>
          A condição dada para a execução é count menor do que 100. Assim
          enquanto essa condição retornar true, o código será executado.
          <br />
          Na linha 4, há a atualização da variável count, o ++ representa a
          operação em aumentar em 1 o valor da variável.
          <br />
          Note que se não houvesse essa linha a condição nunca se tornaria
          falsa, uma vez que continuaria tendo valor 0. Neste caso o laço seria
          infinito.
          <br />
          Preste sempre atenção para evitar esse tipo de cenário. Note também,
          que se a condição for falsa logo de início, por exemplo se mudarmos a
          linha 1 para let count = 200; , o código dentro do while nunca seria
          executado.
        </p>
      </Section>

      <Section className="section section__dowhile">
        <h2>Do-While</h2>

        <p>
          Há casos em que é necessário executar o while pelo menos uma vez. Para
          isso temos a estrutura do-while, onde{" "}
          <strong>
            primeiro se executa o código e depois é verificado a condição para
            continuar executando ou não
          </strong>
          . O mesmo exemplo:
        </p>

        <Pre>
          <code>
            {`
           let count = 0; 

            do {
                console.log(count);
                count++;
            }
            while(count < 100);
          `}
          </code>
        </Pre>
      </Section>

      <Section className="section section__for">
        <h2>For</h2>

        <p>
          O for é uma{" "}
          <strong>
            estrutura de repetição que é executado um número específico de vezes
          </strong>
          . Nele é declarado um variável com um valor inicial, depois é
          determinado a condição de parada e por fim a passo dado entre o valor
          inicial e o final. Exemplo:
        </p>

        <Pre>
          <code>
            {`
           for(let i = 0; i < 10; i++) {
            console.log(i + 1);
           }
         `}
          </code>
        </Pre>

        <p>
          A variável declarada é o i, onde esta é iniciada com valor 0. A
          condição de parada é ao i atingir valor 10, demonstrado em i {`<`} 10.
          Por fim, o i++ mostra que o i vai de 0 a 9 de em incrementos de um.
          Note que a variável declarado no for pode possuir qualquer nome.
        </p>
      </Section>
    </Container>
  );
};
