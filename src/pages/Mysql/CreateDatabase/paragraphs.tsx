import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";

const createDatabase = `
CREATE DATABASE nome_do_banco_de_dados;
`;

const showDatabase = `
SHOW DATABASES;
`;

export const paragraphs = [
  <p>
    <strong>Passo 1: Conectar-se ao servidor MySQL</strong> <br />
    Você precisa conectar-se ao servidor MySQL antes de criar um novo banco de
    dados. Você pode usar um cliente MySQL, como o MySQL Workbench, ou acessar o
    servidor via linha de comando usando o comando mysql -u {"<usuário>"} -p
    (substitua {"<usuário>"} pelo nome de usuário correto).
  </p>,
  <p>
    <strong>
      Passo 2: Criar o banco de dados Após conectar-se ao servidor MySQL
    </strong>
    <br />
    Você pode usar o seguinte comando SQL para criar um novo banco de dados:
  </p>,
  <StyledSyntaxHighlighter language="sql" style={coldarkDark}>
    {createDatabase.trim()}
  </StyledSyntaxHighlighter>,
  <p>
    <strong>Passo 3: Verificar se o banco de dados foi criado</strong> <br />
    Você pode verificar se o banco de dados foi criado executando o seguinte
    comando SQL:
  </p>,
  <StyledSyntaxHighlighter language="sql" style={coldarkDark}>
    {showDatabase.trim()}
  </StyledSyntaxHighlighter>,
];
