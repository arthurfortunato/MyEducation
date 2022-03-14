import { Container, Header, Section, Table, Pre, Lista } from "./styles";

export const Conditional = () => {
  return (
    <Container>
      <Header>
        <h1>Condicionais</h1>
      </Header>

      <Section className="section section__logical-operators">
        <h2>Operadores Lógicos</h2>

        <p>
          Em programação, condicionais são estruturas de decisões. O código
          executa de uma maneira ou de outra a depender de uma condição, que por
          sua vez será interpretada como verdadeiro ou falso. Esse tipo de dado
          é chamado de booleano e possui valor true or false. Uma condição é uma
          operação lógica que te como resultado um valor booleano. Os operados
          de comparação em Javascript são:
        </p>
        <br />

        <Table>
          <thead>
            <tr>
              <th>Operador</th>
              <th>Nome</th>
              <th>Exemplo</th>
              <th>Exemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> {">"} </td>
              <td>Maior</td>
              <td>2 {">"} 0</td>
              <td>true</td>
            </tr>
            <tr>
              <td> {">="} </td>
              <td>Maior ou Igual</td>
              <td>2 {">="} 2</td>
              <td>true</td>
            </tr>
            <tr>
              <td> {"<"} </td>
              <td>Menor</td>
              <td>2 {"<"} 0</td>
              <td>false</td>
            </tr>
            <tr>
              <td> {"<="} </td>
              <td>Menor ou Igual</td>
              <td>2 {"<="} 1</td>
              <td>false</td>
            </tr>
            <tr>
              <td> == </td>
              <td>Igual</td>
              <td>1 == '1'</td>
              <td>true</td>
            </tr>
            <tr>
              <td> === </td>
              <td>Igual em valor e tipo</td>
              <td>1 === '1'</td>
              <td>false</td>
            </tr>
            <tr>
              <td> != </td>
              <td>Diferente</td>
              <td>1 != 2</td>
              <td>true</td>
            </tr>
            <tr>
              <td> !== </td>
              <td>Diferente em valor ou tipo</td>
              <td>5 !== '5'</td>
              <td>false</td>
            </tr>
          </tbody>
        </Table>
        <br />

        <p>Os operadores lógicos em JavaScript são:</p>

        <br />
        <Table>
          <thead>
            <tr>
              <th>Operador</th>
              <th>Nome</th>
              <th>Exemplo</th>
              <th>Exemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{"&&"}</td>
              <td>E</td>
              <td>
                2 {">"} 0 {"&&"} 1!==1
              </td>
              <td>false</td>
            </tr>
            <tr>
              <td>||</td>
              <td>Ou</td>
              <td>
                2 {">"} 0 {"&&"} 1!==1
              </td>
              <td>true</td>
            </tr>
            <tr>
              <td>!</td>
              <td>Não</td>
              <td>!(1===1)</td>
              <td>false</td>
            </tr>
          </tbody>
        </Table>

        <p>
          Os operadores de comparação retornam um booleano a depender do
          resultado da comparação. E os operados lógicos fazem operações sobre
          valores booleano.
          <br />O operador {"&&"} só retorna verdadeiro se as duas condições
          forem verdadeira.
          <br />
          Enquanto para o operador || basta uma das condições ser para o
          resultado ser verdadeiro.
          <br />O operador ! inverte o valor lógico, ou seja, verdadeiro vira
          falso e vice-versa.
        </p>
      </Section>

      <Section className="section section__if-else">
        <h2>If/Else</h2>
        <p>A estrutura condicional em JavaScript é da seguinte maneira:</p>

        <Pre>
          <code>
            {`
          let condicao = x {">"} 0; 
          if(condicao) {
            console.log("X é maior do que zero")
          }
          else {
            console.log("X é menor ou igual a que zero")
          }
          `}
          </code>
        </Pre>

        <p>
          A condição deve estar entre parêntesis. Para fim de ilustração o
          resultado condição foi guardada em uma variável (linha 1), porém é
          prática escrever diretamente dentro dos parêntesis. Caso a condição
          seja true o código dentro do if é executado, senão o do else é
          executado.
          <br />
          <br />
          Ainda é possível fazer estruturas que verifiquem mais de uma condição
          usando o else if:
          <br />
          <br />
        </p>

        <Pre>
          <code>
            {`
             if(x {">"} 0){console.log("X é positivo")}
             else if(x == 0){console.log("X é zero")}
             else{console.log("X é negativo")}
          `}
          </code>
        </Pre>
        <br />
        <br />
        <p>
          Caso a condição do if for false, é verificado a condição do else if,
          se esta por sua vez for falsa é verificado a condição do próximo else
          if, se houver, senão é executado o else, também se houver.
        </p>
      </Section>

      <Section className="section section__ternary-operator">
        <h2>Operador Ternário</h2>

        <p>
          Para atribuição condicional de valor o JavaScript possui um operador
          que permite fazer uma if else inline, isto é, em uma única linha.
          Operador tenário é representado por ?:
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
          separados por : (dois pontos).
        </p>
      </Section>

      <Section className="section section__switch">
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

      <Section className="section section__truthy-falsy">
        <h2>Truthy e Falsy</h2>

        <p>
          Além do true e do false, o JavaScript aceita outras informações que
          não são booleanos e os interpreta como se fosse true ou false. Esses
          casos chamamos de truthy e falsy. Por exemplo, o JavaScript interpreta
          os seguintes valores como falso:
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
          Todos os demais são interpretados como verdadeiro. Alguns exemplos de
          truthy:
        </p>

        <Lista>
          <ul>
            <li>[ ]</li>
            <li>{}</li>
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
