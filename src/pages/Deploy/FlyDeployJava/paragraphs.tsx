import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";

const dockerfile = `
FROM adoptopenjdk:11-jre-hotspot
WORKDIR /app
COPY target/nome-do-seu-projeto.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
`;

const dockerbuild = `
docker build -t nome-do-seu-projeto .
`;

const flyctlLogin = `
flyctl auth login
`;

const flyctlSelect = `
flyctl apps list
flyctl apps select nome-do-seu-aplicativo
`;

const flyctlDeploy = `
flyctl deploy
`;

export const paragraphs = [
  <li>
    Certifique-se de que você possui uma conta no Fly.io. Caso não tenha, você
    pode se inscrever em <strong>https://fly.io</strong>.
  </li>,
  <li>
    No diretório do seu projeto Spring Boot, verifique se você tem um arquivo
    Dockerfile. O Fly.io usa contêineres Docker para implantar aplicativos. Se
    você não tiver um Dockerfile, precisará criá-lo. Um exemplo simples de
    Dockerfile para um projeto Spring Boot seria o seguinte:
  </li>,
  <StyledSyntaxHighlighter language="dockerfile" style={coldarkDark}>
    {dockerfile.trim()}
  </StyledSyntaxHighlighter>,
  <li>
    Abra um terminal ou prompt de comando e navegue até o diretório do seu
    projeto.
  </li>,
  <li>
    Execute o seguinte comando para criar uma imagem Docker do seu projeto:
  </li>,
  <StyledSyntaxHighlighter language="dockerfile" style={coldarkDark}>
    {dockerbuild.trim()}
  </StyledSyntaxHighlighter>,
  <>
    <li>Faça login no Fly.io usando o comando:</li>
    <StyledSyntaxHighlighter language="dockerfile" style={coldarkDark}>
      {flyctlLogin.trim()}
    </StyledSyntaxHighlighter>
  </>,
  <>
    <li>Selecione o aplicativo que você deseja atualizar usando o comando:</li>
    <StyledSyntaxHighlighter language="dockerfile" style={coldarkDark}>
      {flyctlSelect.trim()}
    </StyledSyntaxHighlighter>
  </>,
  <>
    <li>Execute o comando de implantação para atualizar sua aplicação: :</li>
    <StyledSyntaxHighlighter language="dockerfile" style={coldarkDark}>
      {flyctlDeploy.trim()}
    </StyledSyntaxHighlighter>
  </>,
  <p>
    Durante o processo de implantação, o Fly.io substituirá a imagem anterior
    pelo novo contêiner Docker com as alterações atualizadas. Dependendo das
    alterações feitas, pode ser necessário reiniciar a aplicação para que as
    mudanças sejam aplicadas. O Fly.io cuidará disso automaticamente durante o
    processo de implantação.
  </p>,
  <p>
    Após a conclusão da implantação, sua aplicação estará atualizada no Fly.io e
    pronta para uso.
  </p>,
];
