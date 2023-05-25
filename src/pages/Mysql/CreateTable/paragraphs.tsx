import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";

const createTable = `
CREATE TABLE clientes (
  nome VARCHAR(50),
  idade INT,
  email VARCHAR(100)
);
`;

export const paragraphs = [
  <p>
    Especifique o nome da tabela e as colunas que ela terá, juntamente com os
    tipos de dados adequados. No nosso exemplo, queremos criar a tabela{" "}
    <strong>"clientes"</strong> com as colunas <strong>"nome"</strong> (texto),{" "}
    <strong>"idade"</strong> (número inteiro) e <strong>"email"</strong>{" "}
    (texto):
  </p>,
  <p></p>,
  <StyledSyntaxHighlighter language="sql" style={coldarkDark}>
    {createTable.trim()}
  </StyledSyntaxHighlighter>,
  <p>
    Este comando cria a tabela <strong>"clientes"</strong> com três colunas:{" "}
    <strong>"nome"</strong> (texto com até 50 caracteres),{" "}
    <strong>"idade"</strong> (número inteiro) e <strong>"email"</strong> (texto
    com até 100 caracteres).
  </p>,
];
