import { Table } from "./styles";

export const paragraphs = [
  <p>
    Em programação, <strong>condicionais são estruturas de decisões</strong>. O
    código executa de uma maneira ou de outra a depender de uma condição, que
    por sua vez será interpretada como verdadeiro ou falso.{" "}
    <strong>
      Esse tipo de dado é chamado de booleano e possui valor true or false
    </strong>
    .
  </p>,

  <strong>Os operadores lógicos são:</strong>,

  <Table>
    <thead>
      <tr>
        <th>Operador</th>
        <th>Nome</th>
        <th>Exemplo</th>
        <th>Resultado</th>
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
  </Table>,

  <strong>Os operados de comparação são:</strong>,

  <Table>
    <thead>
      <tr>
        <th>Operador</th>
        <th>Nome</th>
        <th>Exemplo</th>
        <th>Resultado</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{">"}</td>
        <td>Maior</td>
        <td>2 {">"} 0</td>
        <td>true</td>
      </tr>
      <tr>
        <td>{">="}</td>
        <td>Maior ou Igual</td>
        <td>2 {">="} 2</td>
        <td>true</td>
      </tr>
      <tr>
        <td>{"<"}</td>
        <td>Menor</td>
        <td>2 {"<"} 0</td>
        <td>false</td>
      </tr>
      <tr>
        <td>{"<="}</td>
        <td>Menor ou Igual</td>
        <td>2 {"<="} 1</td>
        <td>false</td>
      </tr>
      <tr>
        <td>==</td>
        <td>Igual</td>
        <td>1 == '1'</td>
        <td>true</td>
      </tr>
      <tr>
        <td>===</td>
        <td>Igual em valor e tipo</td>
        <td>1 === '1'</td>
        <td>false</td>
      </tr>
      <tr>
        <td>!=</td>
        <td>Diferente</td>
        <td>1 != 2</td>
        <td>true</td>
      </tr>
      <tr>
        <td>!==</td>
        <td>Diferente em valor ou tipo</td>
        <td>5 !== '5'</td>
        <td>false</td>
      </tr>
    </tbody>
  </Table>,

  <p>
    Os operadores de comparação retornam um booleano a depender do resultado da
    comparação. E os operados lógicos fazem operações sobre valores booleano.
  </p>,
  <p>
    O operador <strong>&&</strong> só retorna verdadeiro se as duas condições
    forem verdadeira.
  </p>,

  <p>
    Enquanto para o operador <strong>||</strong> basta uma das condições ser
    para o resultado ser verdadeiro.
  </p>,

  <p>
    O operador <strong>!</strong> inverte o valor lógico, ou seja, verdadeiro
    vira falso e vice-versa.
  </p>,
];
