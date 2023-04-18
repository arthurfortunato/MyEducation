import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";

const transporte = `
public interface Transporte {
  void mover();
}
`;

const classes = `
@Service
@Qualifier("carro")
public class Carro implements Transporte {
    public void mover() {
        System.out.println("Movendo carro");
    }
}

@Service
@Qualifier("moto")
public class Moto implements Transporte {
    public void mover() {
        System.out.println("Movendo moto");
    }
}`;

const usuario = `
@Service
public class UsuarioTransporte {
    private final Transporte transporte;
    
    public UsuarioTransporte
          (@Qualifier("carro") Transporte transporte) {
        this.transporte = transporte;
    }
    
    public void usarTransporte() {
        transporte.mover();
    }
}
`;

export const paragraphs = [
  <p>
    Em geral, quando usamos a injeção de dependência do Spring, podemos ter mais
    de uma implementação de uma mesma interface ou classe abstrata. Por exemplo,
    imagine que você tem uma interface "Transporte" e duas classes que a
    implementam: "Carro" e "Moto". Para injetar uma dessas implementações em
    outro componente, é preciso especificar qual delas você quer utilizar.
  </p>,
  <p>
    É aí que entra a anotação <strong>@Qualifier</strong>. Ela permite que você
    diferencie as implementações pelo nome ou por um valor específico que você
    atribui a cada uma delas. Assim, você pode indicar ao Spring qual
    implementação você deseja injetar.
  </p>,
  <>
    <p>Suponha que você tenha a seguinte interface:</p>
    <StyledSyntaxHighlighter language="java" style={coldarkDark}>
      {transporte.trim()}
    </StyledSyntaxHighlighter>
  </>,
  <>
    <p>E duas classes que a implementam:</p>
    <StyledSyntaxHighlighter language="java" style={coldarkDark}>
      {classes.trim()}
    </StyledSyntaxHighlighter>
  </>,
  <p>
    Observe que cada classe tem a anotação @Qualifier indicando o nome dela
    ("carro" ou "moto"). Agora, suponha que você tenha uma outra classe que
    precise de uma implementação da interface "Transporte":
  </p>,
  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {usuario.trim()}
  </StyledSyntaxHighlighter>,
  <p>
    Observe que o construtor de UsuarioTransporte recebe uma implementação de
    Transporte com a anotação @Qualifier("carro"). Isso indica ao Spring que
    deve injetar a implementação do Carro nesse componente. Dessa forma, quando
    você chamar o método "usarTransporte" do objeto UsuarioTransporte, ele irá
    imprimir "Movendo carro", já que a implementação injetada foi a do Carro.
  </p>,
];
