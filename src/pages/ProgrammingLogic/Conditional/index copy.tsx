import { Container, Table, Pre, Lista } from "./styles";
import { Header } from "../../../components/Header";
import { Section } from "../../../components/Section";

export const Conditional = () => {
  return (
    <Container>
      <Header title="Concidionais"/>

      <Section>
        <h2>Operador Ternário</h2>

        <p>
          Para atribuição condicional de valor o JavaScript possui um operador
          que permite fazer uma if else inline, isto é, em uma única linha.
          Operador ternário é representado por <strong>? :</strong>
        </p>

        <Pre>
          <code>
            {`
            let paridade = x % 2 === 0 ? 'par' : 'impar';
            `}
          </code>
        </Pre>

        <p>
          Primeiro colocamos a condição a ser verificada, no caso x % 2 === 0
          onde % é o operador que retorna o resto da divisão. Ou seja, a
          condição é se o resto da divisão é igual a zero. Se sim, guardamos a
          string 'par' na variável, se não, 'ímpar'. Note que os valores são
          separados por <strong>: (dois pontos)</strong>.
        </p>
      </Section>

      <Section>
        <h2>Switch</h2>

        <p>
          O Switch é uma estrutura condicional que recebe um valor e executa um
          código quebrando os casos que a variável pode receber. Por exemplo:
        </p>

        <Pre>
          <code>
            {`
         let hoje = new Date().getDay(); 
         let dia;
 
         switch (hoje) {
           case 0:
             console.log(dia = "Domingo")
             break;
           case 1:
             console.log(dia = "Segunda")
             break;
           case 2:
             console.log(dia = "Terça")
             break;
           case 3:
             console.log(dia = "Quarta")
             break;
           case 4:
             console.log(dia = "Quinta")
             break;
           case 5:
             console.log(dia = "Sexta")
             break;
           case 6:
             console.log(dia = "Sábado")
             break;
           default:
             console.log("data inválida");
         }
       `}
          </code>
        </Pre>
        <br />

        <p>
          O comando new Date().getDay() retorna o dia atual como um inteiro,
          começando em 0 no domingo e indo até 6 para o sábado. O switch recebe
          a variável e quebra casos. Caso seja 1, por exemplo, definimos a
          variável dia como "Segunda". O break representa o fim do case. Caso
          seja omitido o computador executará o caso seguinte. Por isso é
          dispensável no último caso. Ainda é possível definir um padrão caso
          nenhum dos casos exista usando o default.
        </p>
      </Section>

      <Section>
        <h2>Truthy e Falsy</h2>

        <p>
          Além do true e do false,{" "}
          <strong>
            o JavaScript aceita outras informações que não são booleanos e os
            interpreta como se fosse true ou false
          </strong>
          . Esses casos chamamos de truthy e falsy. Por exemplo, o JavaScript
          interpreta os seguintes valores como <strong>falso</strong>:
        </p>

        <Lista>
          <ul>
            <li>0</li>
            <li>"ou"</li>
            <li>null</li>
            <li>undefined</li>
            <li>NaN</li>
          </ul>
        </Lista>

        <p>
          Todos os demais são interpretados como <strong>verdadeiro</strong>. Alguns exemplos de
          truthy:
        </p>

        <Lista>
          <ul>
            <li>[ ]</li>
            <li>{`{ }`}</li>
            <li>function()</li>
          </ul>
        </Lista>
        <p>
          Uma utilidade dessa característica é verificar se uma variável está
          definida antes de usá-la. Assim evitando erro.
        </p>
      </Section>
    </Container>
  );
};
