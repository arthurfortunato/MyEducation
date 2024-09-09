export const paragraphs = [
  <p>
    No <strong>Spring</strong>, as anotações <strong>stereotypes</strong>{" "}
    desempenham um papel crucial ao especificar a função e a responsabilidade de
    uma classe.{" "}
    <strong>
      Elas ajudam a tornar o código mais claro e organizado, facilitando a
      compreensão e a manutenção
    </strong>
    .
  </p>,
  <p>
    Anotações Genéricas e Específicas: <br />
    <strong>@Component</strong>: É a anotação genérica utilizada para marcar
    qualquer Bean que desejamos que o Spring gerencie. Embora seja uma anotação
    ampla, seu uso pode não indicar claramente a função específica da classe.
  </p>,
  <p>
    <strong>@Service</strong>: Utilizamos essa anotação para classes que contêm
    lógica de negócios. Ela indica que a classe oferece um serviço ou
    funcionalidade específica dentro da camada de serviço da aplicação.
  </p>,
  <p>
    <strong>@Repository</strong>: Essa anotação é destinada a classes que
    manipulam a lógica de acesso a dados. Ela marca classes que interagem
    diretamente com a camada de persistência e são responsáveis pela comunicação
    com o banco de dados.
  </p>,
  <p>
    <strong>@Controller</strong>: É usada para classes que lidam com a lógica de
    controle em uma aplicação web. As classes anotadas com{" "}
    <strong>@Controller</strong> gerenciam as requisições HTTP e direcionam a
    resposta para as visualizações apropriadas. Em outras palavras, elas atuam
    como intermediárias entre a camada de serviço e as views (páginas HTML).
    <br />
    * Usado para controladores que retornam visualizações (por exemplo, arquivos
    HTML) e utilizam a tecnologia de templating (como Thymeleaf ou JSP).
    <br />* Os métodos de um @Controller normalmente retornam String que
    representa o nome da view a ser renderizada, ou objetos de modelos que serão
    utilizados para gerar a view.
  </p>,
  <p>
    <strong>@RestController</strong>: Esta anotação é uma especialização de
    <strong> @Controller</strong> que é mais adequada para{" "}
    <strong>APIs RESTful</strong>. Quando você usa{" "}
    <strong>@RestController</strong>, o <strong>Spring</strong> trata os métodos
    da classe como manipuladores de requisições <strong>REST</strong> e
    automaticamente serializa os objetos retornados em <strong>JSON</strong> ou
    <strong> XML</strong> (dependendo da configuração). Além disso, não é
    necessário usar a anotação <strong>@ResponseBody</strong> em cada método,
    pois <strong>@RestController</strong> já a inclui implicitamente.
    <br />* Usado para criar <strong>APIs RESTful</strong> que retornam dados no
    formato <strong>JSON </strong>ou <strong>XML</strong>.
    <br />* Os métodos de um @RestController retornam diretamente os dados que
    serão serializados em JSON ou XML, e não visualizações. Assim,
    <strong>@RestController</strong> combina <strong>@Controller</strong> e
    <strong> @ResponseBody</strong> em uma única anotação.
  </p>,
];
