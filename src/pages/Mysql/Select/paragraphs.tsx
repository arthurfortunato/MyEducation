import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";

const selectData = `
SELECT * FROM nome_da_tabela;
`;

const selectColumns = `
SELECT coluna1, coluna2 FROM nome_da_tabela;
`;

export const paragraphs = [
  <p>
    O comando <strong>SELECT</strong> é uma parte fundamental da linguagem SQL
    (Structured Query Language) e{" "}
    <strong>é utilizado para recuperar dados de um banco de dados</strong>. Ele
    permite que você faça consultas específicas para selecionar informações que
    atendam a certos critérios ou condições.
  </p>,
  <p>
    <strong>Recuperar todos os dados de uma tabela</strong>: O uso mais básico
    do comando SELECT é recuperar todos os dados de uma tabela. Você pode fazer
    isso utilizando o seguinte formato:
  </p>,
  <StyledSyntaxHighlighter language="sql" style={coldarkDark}>
    {selectData.trim()}
  </StyledSyntaxHighlighter>,
  <p>
    O asterisco <strong>(*)</strong> é um caractere curinga que{" "}
    <strong> representa todas as colunas da tabela</strong>. Portanto, esse
    comando irá retornar todos os registros e todas as colunas da tabela
    especificada.
  </p>,
  <p>
    <strong>Selecionar colunas específicas</strong>: Em vez de selecionar todas
    as colunas da tabela, você pode especificar quais colunas deseja recuperar.
    Isso é útil quando você precisa apenas de determinadas informações. Por
    exemplo:
  </p>,
  <StyledSyntaxHighlighter language="sql" style={coldarkDark}>
    {selectColumns.trim()}
  </StyledSyntaxHighlighter>,
  <p>
    Nesse caso, substitua <strong>"coluna1"</strong> e{" "}
    <strong>"coluna2"</strong> pelos nomes reais das colunas que você deseja
    selecionar. O resultado da consulta irá conter apenas essas colunas.
  </p>,
];
