import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";

const example = `
# Estágio de construção
FROM node:14 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Estágio de produção
FROM nginx:1.19-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
`;

const run = `
# Construir a imagem Docker
docker build -t nome_do_projeto .

# Executar o contêiner Docker
docker run -p 80:80 nome_do_projeto
`;

export const paragraphs = [
  <p>
    Crie um arquivo chamado <strong>Dockerfile (sem extensão)</strong> no
    diretório raiz do seu projeto React.
  </p>,
  <p>
    Abra o arquivo <strong>Dockerfile</strong> em um editor de texto e adicione
    o seguinte conteúdo:
  </p>,
  <StyledSyntaxHighlighter language="markdown" style={coldarkDark}>
    {example.trim()}
  </StyledSyntaxHighlighter>,
  <p>
    Na primeira parte do <strong>Dockerfile</strong>, usamos uma imagem do
    Node.js como o estágio de construção. Definimos o diretório de trabalho para
    /app, copiamos o arquivo package.json e executamos o comando npm install
    para instalar as dependências. Em seguida, copiamos todo o código-fonte do
    projeto para o diretório de trabalho e executamos o comando npm run build
    para criar a versão otimizada do aplicativo React.
  </p>,
  <p>
    Na segunda parte do <strong>Dockerfile</strong>, usamos uma imagem do Nginx
    como o estágio de produção. Copiamos os arquivos gerados no estágio de
    construção (/app/build) para o diretório /usr/share/nginx/html no contêiner
    Nginx. Definimos a porta 80 como a porta exposta pelo contêiner. Por fim,
    usamos o comando CMD para iniciar o servidor Nginx.
  </p>,
  <>
    <p>
      Agora você pode construir e executar a imagem do Docker para o seu projeto
      React. Abra o terminal na pasta do projeto React e execute os seguintes
      comandos:
    </p>
    <StyledSyntaxHighlighter language="markdown" style={coldarkDark}>
      {run.trim()}
    </StyledSyntaxHighlighter>
  </>,
  <p>
    Após a execução do último comando, você poderá acessar o aplicativo React em
    um navegador, digitando <strong>http://localhost</strong> ou
    <strong>http://127.0.0.1</strong>.
  </p>,
];
