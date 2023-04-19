import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";

const classes = `
public class MeuServicoDeEmail {
  private final String servidor;
  private final int porta;
  
  public MeuServicoDeEmail(String servidor, int porta) {
      this.servidor = servidor;
      this.porta = porta;
  }
  
  public void enviarEmail
    (String destinatario, String assunto, String corpo) {
    // Lógica para enviar o email
  }
}
`;

const configuration = `
@Configuration
public class ConfiguracaoDoServicoDeEmail {
    @Bean
    public MeuServicoDeEmail meuServicoDeEmail() {
        return new MeuServicoDeEmail("smtp.gmail.com", 587);
    }
}

`;

export const paragraphs = [
  <p>
    A anotação <strong>@Configuration</strong> é usada para indicar ao Spring
    que uma classe é uma classe de configuração. Essa classe pode definir beans
    e outras configurações do Spring, como definições de propriedades e
    configurações de componentes.
  </p>,
  <p>
    Com a anotação <strong>@Configuration</strong>, você pode criar e
    configurar beans do Spring em uma classe que não é um componente gerenciado
    pelo Spring.
  </p>,
  <>
    <p>
      Suponha que você tenha a seguinte classe que representa um serviço de
      email:
    </p>
    <StyledSyntaxHighlighter language="java" style={coldarkDark}>
      {classes.trim()}
    </StyledSyntaxHighlighter>
  </>,
  <p>
    Agora, suponha que você queira criar um bean do Spring para esse serviço de
    email e configurá-lo com valores específicos para o servidor e porta. Você
    pode fazer isso da seguinte forma:
  </p>,
  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {configuration.trim()}
  </StyledSyntaxHighlighter>,
  <p>
    Observe que a classe ConfiguracaoDoServicoDeEmail tem a anotação
    @Configuration indicando ao Spring que ela é uma classe de configuração.
    Além disso, ela tem um método com a anotação @Bean que retorna um objeto
    MeuServicoDeEmail.
  </p>,
  <p>
    Dessa forma, quando o Spring iniciar a aplicação, ele criará um bean do tipo
    MeuServicoDeEmail com as configurações especificadas no método
    meuServicoDeEmail() da classe de configuração.
  </p>,
  <p>
    A partir desse ponto, você pode injetar esse bean em outras classes
    gerenciadas pelo Spring, usando a anotação @Autowired ou declarando-o
    diretamente em um construtor ou método, por exemplo.
  </p>,
];
