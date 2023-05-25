import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";

const groupBy = `
SELECT coluna1, coluna2, COUNT(*) 
FROM tabela 
GROUP BY coluna1, coluna2;
`;

const orderBy = `
SELECT coluna1, coluna2 
FROM tabela 
ORDER BY coluna1 ASC, coluna2 DESC;
`;

const groupByOrderBy = `
SELECT coluna1, COUNT(*) 
FROM tabela 
GROUP BY coluna1 ORDER BY COUNT(*) DESC;
`;

export const paragraphs = [
  <p>
    A cláusula <strong>GROUP BY</strong> é usada para{" "}
    <strong>
      agrupar os resultados da consulta com base em uma ou mais colunas
    </strong>
    . Ela divide os registros em grupos com base nos valores dessas colunas e
    permite realizar operações agregadas nos grupos.
  </p>,
  <StyledSyntaxHighlighter language="sql" style={coldarkDark}>
    {groupBy.trim()}
  </StyledSyntaxHighlighter>,
  <p>
    A cláusula <strong>GROUP BY</strong> agrupa os registros com base nessas
    colunas. Além disso, é possível usar funções agregadas, como{" "}
    <strong>COUNT</strong>, <strong>SUM</strong>, <strong>AVG</strong>,{" "}
    <strong>MAX</strong>, <strong>MIN</strong>, entre outras, para realizar
    cálculos nos grupos.
  </p>,
  <p>
    A cláusula <strong>GROUP BY</strong> é frequentemente usada em conjunto com
    funções agregadas para realizar análises e resumos dos dados agrupados.
  </p>,
  <p>
    A cláusula <strong>ORDER BY</strong> é usada para{" "}
    <strong>
      ordenar os resultados da consulta com base em uma ou mais colunas
    </strong>
    . Ela permite classificar os registros em uma ordem específica, seja
    ascendente <strong>(crescente)</strong> ou descendente{" "}
    <strong>(decrescente)</strong>.
  </p>,
  <StyledSyntaxHighlighter language="sql" style={coldarkDark}>
    {orderBy.trim()}
  </StyledSyntaxHighlighter>,
  <p>
    A cláusula <strong>ORDER BY</strong> classificará os registros com base
    nessas colunas. O modificador <strong>"ASC"</strong> especifica a ordenação
    ascendente (opcional, pois é o padrão) e o modificador{" "}
    <strong>"DESC"</strong> especifica a ordenação descendente. A cláusula{" "}
    <strong>ORDER BY</strong> é útil para organizar os resultados de acordo com
    critérios específicos, facilitando a análise e a visualização dos dados.
  </p>,
  <p>
    É importante observar que as cláusulas <strong>GROUP BY</strong> e{" "}
    <strong>ORDER BY</strong> podem ser usadas em conjunto, permitindo agrupar e
    ordenar os registros simultaneamente.
  </p>,
  <StyledSyntaxHighlighter language="sql" style={coldarkDark}>
    {groupByOrderBy.trim()}
  </StyledSyntaxHighlighter>,
  <p>
    Nesse caso, os registros são <strong>agrupados</strong> pela coluna{" "}
    <strong>"coluna1"</strong> e, em seguida, são <strong>ordenados</strong> com
    base na contagem decrescente dos registros em cada grupo.
  </p>,
];
