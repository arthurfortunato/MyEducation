import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";

const insertData = `
INSERT INTO clientes (nome, idade, email)
VALUES ('João Silva', 30, 'joao@email.com');
`;

const insertDatas = `
INSERT INTO clientes (nome, idade, email)
VALUES ('Maria Souza', 25, 'maria@email.com'),
       ('Carlos Santos', 35, 'carlos@email.com');

`;

export const paragraphs = [
  <p>
    Para inserir dados na tabela <strong>"clientes"</strong>, você usa o comando
    <strong>INSERT INTO</strong> seguido do nome da tabela e, entre parênteses,
    os valores que deseja inserir em cada coluna. No nosso exemplo, vamos
    adicionar um novo cliente com <strong>nome</strong>, <strong>idade</strong>{" "}
    e <strong>e-mail</strong>:
  </p>,
  <StyledSyntaxHighlighter language="sql" style={coldarkDark}>
    {insertData.trim()}
  </StyledSyntaxHighlighter>,
  <p>
    Nesse exemplo, estamos inserindo um novo cliente com o <strong>nome</strong>{" "}
    "João Silva", <strong>idade</strong> 30 e <strong>e-mail</strong>{" "}
    "joao@email.com".
  </p>,
  <p>
    Você pode inserir vários registros de uma vez separando-os com vírgulas. Por
    exemplo:
  </p>,
  <StyledSyntaxHighlighter language="sql" style={coldarkDark}>
    {insertDatas.trim()}
  </StyledSyntaxHighlighter>,
];
