import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";

const filterValue = `
SELECT * FROM produtos 
WHERE preco > 50;
`;

const multipleConditions = `
SELECT * FROM produtos 
WHERE preco > 50 
AND nome 
LIKE 'A%';
`;

const wildcards = `
SELECT * FROM produtos 
WHERE nome 
LIKE '%camiseta%';
`;

export const paragraphs = [
  <p>
    A cláusula <strong>WHERE</strong> é usada para filtrar os resultados da
    consulta com base em uma ou mais condições. Ela{" "}
    <strong>
      permite selecionar apenas os registros que atendem a critérios específicos
    </strong>
    .
  </p>,
  <p>
    <strong>Filtrar registros com base em um valor específico:</strong> Suponha
    que você tenha uma tabela chamada "produtos" com as colunas "nome" e
    "preco", e deseja recuperar apenas os produtos com preço maior que 50. Você
    pode usar o <strong>WHERE</strong> da seguinte maneira:
  </p>,
  <StyledSyntaxHighlighter language="sql" style={coldarkDark}>
    {filterValue.trim()}
  </StyledSyntaxHighlighter>,
  <p>
    Essa consulta irá retornar apenas os registros em que o valor da coluna
    "preco" seja maior que 50.
  </p>,
  <p>
    <strong>Combinar múltiplas condições:</strong> É possível combinar várias
    condições usando <strong>operadores lógicos</strong>, como{" "}
    <strong>AND</strong> e <strong>OR</strong>. Por exemplo, se você quiser
    selecionar produtos com preço maior que 50 e nome começando com a letra "A",
    você pode fazer o seguinte:
  </p>,
  <StyledSyntaxHighlighter language="sql" style={coldarkDark}>
    {multipleConditions.trim()}
  </StyledSyntaxHighlighter>,
  <p>
    Essa consulta retornará registros em que o preço seja maior que 50 e o nome
    comece com a letra "A".
  </p>,
  <p>
    <strong>Utilizar expressões com wildcards:</strong> Os{" "}
    <strong>wildcards</strong>, como <strong>"%"</strong> e <strong>"_"</strong>
    , podem ser usados em conjunto com o operador <strong>LIKE</strong> para
    realizar buscas parciais em uma coluna. Por exemplo, se você quiser
    selecionar produtos com nome que contenha a palavra "camiseta",
    independentemente do que vem antes ou depois, você pode usar o seguinte:
  </p>,
  <StyledSyntaxHighlighter language="sql" style={coldarkDark}>
    {wildcards.trim()}
  </StyledSyntaxHighlighter>,
  <p>
    Essa consulta retornará registros em que o nome contenha a palavra
    <strong>"camiseta"</strong>.
  </p>,
];
