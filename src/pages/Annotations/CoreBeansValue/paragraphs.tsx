import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";

const jdbc = `
banco.dados.url=jdbc:mysql://localhost:3306/meu_banco_de_dados
`;

const classes = `
@Service
public class MeuServicoDeBancoDeDados {
    private final String urlDoBancoDeDados;
    
    public MeuServicoDeBancoDeDados
      (@Value(${"banco.dados.url"}) String urlDoBancoDeDados) {
      this.urlDoBancoDeDados = urlDoBancoDeDados;
    }
    
    public void conectar() {
    //Usa a variável urlDoBancoDeDados para se 
    //conectar ao banco de dados
    }
}
`;
export const paragraphs = [
  <p>
    A anotação <strong>@Value</strong> é usada para injetar valores de
    propriedades em variáveis ​​dentro de classes gerenciadas pelo Spring. Ela
    <strong>
      permite que você injete valores em variáveis com base em expressões de
      propriedades do Spring ou valores literais
    </strong>
    .
  </p>,
  <p>
    Para entender melhor, imagine que você tenha uma aplicação Spring que
    precise de um valor de configuração que pode mudar dependendo do ambiente em
    que ela está sendo executada. Você pode usar a anotação @Value para injetar
    esse valor em uma variável.
  </p>,
  <>
    <p>
      Suponha que você tenha um arquivo de propriedades chamado
      "application.properties" com a seguinte propriedade:
    </p>
    <StyledSyntaxHighlighter language="java" style={coldarkDark}>
      {jdbc.trim()}
    </StyledSyntaxHighlighter>
  </>,
  <p>
    Agora, suponha que você queira injetar esse valor em uma classe que acessa o
    banco de dados. Você pode fazer isso da seguinte forma:
  </p>,
  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {classes.trim()}
  </StyledSyntaxHighlighter>,
  <p>
    Observe que a classe MeuServicoDeBancoDeDados tem um construtor que recebe
    uma String com a anotação @Value(${"banco.dados.url"}). Essa anotação indica
    ao Spring que ele deve injetar o valor da propriedade "banco.dados.url" do
    arquivo "application.properties" nessa variável.
  </p>,
  <p>
    Dessa forma, quando você instanciar um objeto do tipo
    MeuServicoDeBancoDeDados, o Spring irá injetar o valor da propriedade
    "banco.dados.url" na variável urlDoBancoDeDados. Você pode então usar essa
    variável para se conectar ao banco de dados.
  </p>,
];
