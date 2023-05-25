import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";

const wildcardExample = `
SELECT * FROM tabela
WHERE nome 
LIKE 'A%';
`;

const wildcardExample2 = `
SELECT * FROM tabela 
WHERE nome 
LIKE '%o';
`;

const wildcardExample3 = `
SELECT * FROM tabela 
WHERE nome
LIKE '%mar%';
`;

const wildcardExample4 = `
SELECT * FROM tabela 
WHERE nome 
LIKE 'A__';
`;

const wildcardExample5 = `
SELECT * FROM tabela 
WHERE nome 
LIKE '__o%';
`;

export const paragraphs = [
  <p>
    Os <strong>wildcards</strong> <strong>"%"</strong> e <strong>"_"</strong>{" "}
    são caracteres especiais usados em conjunto com a cláusula{" "}
    <strong>WHERE</strong> no <strong>MySQL</strong> para realizar buscas de
    padrões em uma coluna.
  </p>,
  <p>
    <strong>O wildcard "%":</strong> O <strong>"%"</strong> é um caractere
    curinga utilizado para{" "}
    <strong>representar qualquer sequência de caracteres</strong>
    (incluindo nenhum caractere) em uma consulta. Ele pode ser usado em qualquer
    posição dentro de uma string.
  </p>,
  <p>
    Para encontrar todos os registros em que a coluna <strong>"nome"</strong>{" "}
    comece com a letra <strong>"A"</strong>:
  </p>,
  <StyledSyntaxHighlighter language="sql" style={coldarkDark}>
    {wildcardExample.trim()}
  </StyledSyntaxHighlighter>,
  <p>
    Para encontrar todos os registros em que a coluna <strong>"nome"</strong>{" "}
    termine com a letra <strong>"o"</strong>:
  </p>,
  <StyledSyntaxHighlighter language="sql" style={coldarkDark}>
    {wildcardExample2.trim()}
  </StyledSyntaxHighlighter>,
  <p>
    Para encontrar todos os registros em que a coluna <strong>"nome"</strong>{" "}
    contenha a sequência <strong>"mar"</strong>:
  </p>,
  <StyledSyntaxHighlighter language="sql" style={coldarkDark}>
    {wildcardExample3.trim()}
  </StyledSyntaxHighlighter>,
  <p>
    O <strong>"%"</strong> pode ser usado antes, depois ou em ambos os lados do
    padrão que você está buscando. Ele corresponde a qualquer número de
    caracteres (incluindo nenhum) naquela posição.
  </p>,
  <p>
    <strong>O wildcard "_"</strong>: é outro caractere curinga usado para{" "}
    <strong>representar um único caractere em uma consulta</strong>. Ele pode
    ser usado em qualquer posição dentro de uma string.
  </p>,
  <p>
    Para encontrar todos os registros em que a coluna <strong>"nome"</strong>{" "}
    tenha <strong>três letras</strong> e o primeiro caractere seja{" "}
    <strong>"A"</strong>:
  </p>,
  <StyledSyntaxHighlighter language="sql" style={coldarkDark}>
    {wildcardExample4.trim()}
  </StyledSyntaxHighlighter>,
  <p>
    Para encontrar todos os registros em que a coluna <strong>"nome"</strong>{" "}
    tenha um <strong>"o"</strong> na terceira posição:
  </p>,
  <StyledSyntaxHighlighter language="sql" style={coldarkDark}>
    {wildcardExample5.trim()}
  </StyledSyntaxHighlighter>,
  <p>
    Lembre-se de que o uso dos <strong>wildcards</strong> depende do operador{" "}
    <strong>LIKE</strong> em conjunto com a cláusula <strong>WHERE</strong>.
    Assim, você pode realizar consultas mais flexíveis e abrangentes em seus
    dados.
  </p>,
];
