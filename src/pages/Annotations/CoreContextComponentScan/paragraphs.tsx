import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";

const classes = `
@Service
public class MeuServicoDeExemplo {
    public void realizarOperacao() {
        // Lógica do serviço
    }
}

`;

const scan = `
@Configuration
@ComponentScan("com.example.meuapp.servicos")
public class ConfiguracaoDoSpring {
    // Outras configurações do Spring
}
`;

export const paragraphs = [
  <p>
    A anotação <strong>@ComponentScan</strong> é usada para informar ao Spring
    em quais pacotes ele deve buscar por componentes gerenciados por ele, como
    classes anotadas com @Component, @Service, @Repository, entre outras.
  </p>,
  <p>
    Com a anotação <strong>@ComponentScan</strong>, você pode configurar o
    Spring para que ele encontre e gerencie automaticamente todos os componentes
    em um ou mais pacotes, sem precisar configurar cada componente
    individualmente.
  </p>,
  <>
    <p>
      Suponha que você tenha a seguinte classe que representa um componente de
      serviço:
    </p>
  </>,
  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {classes.trim()}
  </StyledSyntaxHighlighter>,
  <p>
    Agora, suponha que você tenha um pacote chamado
    "com.example.meuapp.servicos" onde estão todas as classes de serviços do seu
    aplicativo. Você pode configurar o Spring para encontrar automaticamente
    esses serviços usando a anotação @ComponentScan, da seguinte forma:
  </p>,
  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {scan.trim()}
  </StyledSyntaxHighlighter>,
  <p>
    Observe que a classe ConfiguracaoDoSpring tem a anotação @ComponentScan
    indicando ao Spring que ele deve buscar por componentes no pacote
    "com.example.meuapp.servicos".
  </p>,
  <p>
    Dessa forma, quando o Spring iniciar a aplicação, ele encontrará
    automaticamente o componente MeuServicoDeExemplo e o registrará como um bean
    gerenciado por ele.
  </p>,
  <p>
    A partir desse ponto, você pode injetar esse bean em outras classes
    gerenciadas pelo Spring, usando a anotação @Autowired ou declarando-o
    diretamente em um construtor ou método, por exemplo.
  </p>,
];
