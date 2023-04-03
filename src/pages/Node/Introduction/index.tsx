import { Container } from "./styles";
import introduction01 from "../../../assets/introduction-node01.png";
import introduction02 from "../../../assets/introduction-node02.webp";
import { Header } from "../../../components/Header";
import { Section } from "../../../components/Section";

export const IntroductionNode = () => {
  return (
    <Container>
      <Header title="Node.Js" />

      <Section>
        <h2>O que é Node.js?</h2>

        <p>
          <strong>
            O Node.js é um ambiente de execução na porta 80 padrão, baseado na
            pilha da web aberta (HTML, CSS e JS). Ou seja, é uma plataforma em
            que é possível criar aplicações Javascript sem depender de um
            browser para a execução.
          </strong>
          <br />
          <br />
          Sua execução em single-thread não exige resposta a cada requisição.
          Assim, a dinâmica de entrada e saída (I/O) fica diferente, com inputs
          não bloqueadores.
          <br />
          <br />A plataforma preenche uma necessidade específica: criação de
          aplicativos de rede altamente rápidos, escaláveis e com grande volume
          de conexões simultâneas. Apesar disso, não é indicada para operações
          robustas que demandem resposta e muitos recursos computacionais, como
          memória RAM.
        </p>
      </Section>

      <Section>
        <h2>Quais as características do Node.js?</h2>

        <p>
          <strong>
            A característica que diferencia o Node.js de outras plataformas é
            exatamente essa execução single-thread, em que uma única thread
            executa o código Javascript. Em outras linguagens, ela é
            multi-thread, ou seja, a cada solicitação (input) são requisitados
            recursos computacionais até a obtenção de uma resposta (output).
          </strong>
          <br />
          <br />
          A quantidade de threads é limitada ao volume desses recursos
          computacionais disponíveis. Então, elas não podem ser criadas em
          grande volume, pois quando esse limite é atingido, as novas
          solicitações precisam aguardar para ser executadas.
          <br />
          <br />
          Um sistema com capacidade de 8 GB de memória RAM, em que cada thread
          tem 2 MB de memória, está limitado à quantidade máxima de 4.000
          conexões simultâneas. Isso, sem computarmos os gastos de recursos com
          a alternância dos encadeamentos, por exemplo.
          <br />
          <br />
          Com o <strong>Node.js</strong>, esse cenário não existe: ele
          possibilita executar milhões de conexões simultâneas, porque não
          aguarda o processamento da resposta, ou seja,{" "}
          <strong>é altamente escalável</strong>.
          <br />
          <br />É lógico que os desenvolvedores precisam cuidar para que todas
          essas solicitações do usuário não sejam bloqueadas até que o cálculo
          seja concluído. Além disso, devem criar um processo de recuperação em
          cada instância travada, pois pode haver exceções que alcancem o loop
          de eventos e travem o programa.
        </p>
      </Section>

      <Section>
        <h2>Como o Node.js funciona?</h2>

        <p>
          <strong>
            {" "}
            O Node.js opera em um único encadeamento (single-threaded), por meio
            do modelo I/I (Input/Input) sem bloqueio. Isso permite que o sistema
            suporte dezenas de milhares de conexões simultâneas durante o Event
            Loop, ou loop de eventos.
          </strong>
          <br />
          <br />
          <strong>
            Dessa forma, o loop de eventos, chamado assim justamente porque cada
            solicitação é classificada como um evento único, executa todas as
            requisições (inclusive as concorrentes) na pilha de eventos de forma
            assíncrona. Ou seja, sem que elas bloqueiem a thread.
          </strong>{" "}
          Veja essa explicação, na imagem a seguir.
        </p>

        <img src={introduction01} alt="" />
      </Section>

      <Section>
        <h2>Maneiras de usá-lo</h2>

        <h3>
          <strong>Chat</strong>
        </h3>
        <p>
          O bate-papo é uma aplicação multidirecional, ou seja, gera um fluxo de
          informações entre dois ou mais usuários, em tempo real. A aplicação
          por meio do Node.js permite que a comunicação seja estabelecida na
          porta 80 padrão.
          <br />
          <br />
          Além disso, o Node.js permite que a aplicação seja leve, suporte o
          tráfego e o uso intenso de dados sem demandar alto volume de
          processamento. Logo, a operação funciona sob os mesmos princípios
          básicos do Node.js: reage a eventos, manipula as conexões de forma
          simultânea e mantém a fluidez na experiência do usuário.
        </p>
        <br />
        <br />
        <h3>
          <strong>API para requisição no banco de dados</strong>
        </h3>
        <p>
          <strong>
            {" "}
            Bancos de dados são baseados em JSON (JavaScript Object Notation) e
            uma API criada no Node.js funciona sem a incompatibilidade de
            impedância e a necessidade de conversão dos dados. Permite,
            portanto, que os dados sejam enviados para o front-end sem demandar
            várias conexões que uniformizam as informações e atrasam a execução
            da solicitação.
          </strong>
          <br />
          <br />
          Por exemplo, se você usa o Rails, precisa converter os dados de JSON
          para modelos binários e depois retorná-los como JSON para visualização
          em HTTP. Com o Node.js, você pode simplesmente disponibilizar as
          informações ao usuário.
        </p>
        <br />
        <br />
        <h3>
          <strong>Inputs em fila</strong>
        </h3>
        <p>
          O recebimento de uma grande quantidade de dados simultâneos pode criar
          gargalos no seu banco de dados devido à alta demanda por capacidade de
          resposta (a confirmação de gravação dos dados, por exemplo).
          <br />
          <br />
          Para suportar esse grande volume de solicitações e não criar operações
          de bloqueio, é preciso usar um modelo que não demande resposta.{" "}
          <strong>
            Além de funcionar com a single-threaded sem bloqueio, o Node.js
            agiliza e facilita as conexões criadas para a visualização de
            informações, uma vez que opera em JSON.
          </strong>
          <br />
          <br />
          Dessa forma, é ideal para:
          <ul>
            <li>registrar ou gravar dados de rastreamento de usuários;</li>
            <li>
              processar lotes de informações que podem ser usadas
              posteriormente;
            </li>
            <li>
              operar atualizações que não precisam ser refletidas
              instantaneamente (a contagem de curtidas em uma rede social, por
              exemplo).
            </li>
          </ul>
          <br />
          Dessa forma, os dados são enfileirados por meio de algum tipo de
          infraestrutura de armazenamento em cache, como RabbitMQ ou ZeroMQ, e
          processados em lote separadamente, por meio de hardwares diferentes.
          <br />
          <br />
          <strong>
            {" "}
            Em resumo, o Node.js permite que você deixe as informações do banco
            de dados “em stand by”, para que elas sejam tratadas posteriormente.
          </strong>
        </p>
        <img
          src={introduction02}
          alt="demonstration of how the information is on hold and then processed"
        />
        <br />
        <br />
        <h3>
          <strong>Transmissão e visualização de dados</strong>
        </h3>
        <p>
          Nas plataformas da web mais tradicionais, as solicitações e respostas
          HTTP são tratadas como eventos isolados, como fluxos de dados.{" "}
          <strong>
            Por meio do Node.js é possível processar arquivos durante o
            carregamento, pois eles entram em uma fila que permite seu
            processamento simultâneo.
          </strong>
          <br />
          <br />
          Isso pode ser feito, em alguns casos, para codificar os dados de áudio
          ou de vídeo em tempo real. Em outro nível, um aplicativo baseado em
          Node.js pode rastrear informações de terceiros na web em tempo real: o
          preços das ações na bolsa de valores, por exemplo, para embasar
          análises, gráficos e tabelas que auxiliam na visualização de dados.
        </p>
        <br />
        <br />
        <h3>
          <strong>Proxy</strong>
        </h3>
        <p>
          <strong>
            {" "}
            O Node.js é facilmente empregado como um proxy do lado do servidor,
            pois suporta uma grande quantidade de conexões simultâneas sem
            bloqueio. Isso é útil em proxies de diferentes serviços e com tempos
            de resposta variados.
          </strong>
          <br />
          <br />
          Também serve para coletar dados de vários pontos de origem: um
          aplicativo que extrai informações de diferentes fontes, como imagens e
          vídeos, para fazer a compilação depois, por exemplo. Embora existam
          servidores proxy dedicados, o Node.js pode transformar uma
          infraestrutura comum em proxy de base local.
        </p>
        <br />
        <br />
        <h3>
          <strong>Monitoramento de usuários</strong>
        </h3>
        <p>
          <strong>
            Outro uso muito comum do Node.js acontece por meio do rastreamento
            dos visitantes de um site e a visualização de suas interações em
            tempo real. Isso permite que proprietários de páginas coletem
            informações de acesso simultaneamente à ocorrência das ações.
          </strong>
          <br />
          <br />
          Imagine poder iniciar a interação com um cliente ao perceber que ele
          consultou mais de uma vez um produto na sua loja virtual? Ou abrir um
          chat quando perceber que o seu consumidor atingiu um ponto específico
          do funil de vendas?
        </p>

        <h3>Monitoramento de sistemas</h3>
        <p>
          Já na infraestrutura de TI, o Node.js permite monitorar o uso de
          sistemas. Um provedor de SaaS pode oferecer aos seus usuários a
          comodidade de acompanhar como os serviços são executados no software,
          similar ao que acontece na página de status do GitHub.
          <br />
          <br />
          Com o loop de eventos do Node.js, é possível criar um dashboard que
          verifica os status dos serviços de maneira assíncrona e envia dados
          aos usuários em tempo real, todos executados na pilha da web aberta
          suportada pela tecnologia.
        </p>
      </Section>

      <Section>
        <h2>Quais as vantagens do Node.js?</h2>
        <p>
          <strong>
            Não é difícil perceber que a maior vantagem do Node.js é a sua
            escalabilidade. Mas também podemos reforçar sua flexibilidade,
            leveza e a produtividade que seu uso proporciona.
          </strong>{" "}
          Veja, a seguir:
        </p>
        <br />
        <br />
        <h3>
          <strong>Flexibilidade</strong>
        </h3>
        <p>
          O NPM (Node Package Manager) é o repositório do Node.js e abrange uma
          grande quantidade de módulos que podem ser aplicados em muitas
          situações:
        </p>

        <ul>
          <li>
            express ou express.js: uma estrutura de desenvolvimento web
            inspirada no Sinatra e padrão para a maioria dos aplicativos Node.js
            existentes;
          </li>
          <li>
            hapi: uma estrutura centrada na configuração, modulação e
            usabilidade, para a construção de aplicativos e aplicações de
            serviços;
          </li>
          <li>
            connect: estrutura de servidor HTTP extensível para Node.js, que
            fornece uma coleção de plugins de alto desempenho conhecidos como
            middleware;
          </li>
          <li>socket.io e sockjs: componente de servidores;</li>
          <li>
            pug: inspirado no HAML é um padrão no express.js e um dos mecanismos
            mais populares;
          </li>
          <li>mongodb e mongojs: API em Node.js para bancos de dados;</li>
          <li>redis: biblioteca de clientes Redis;</li>
          <li>
            forever: utilitário que garante a continuidade do Node.js diante de
            falhas inesperadas;
          </li>
          <li>
            moment: biblioteca para analisar, validar, manipular e formatar
            datas em JavaScript.
          </li>
        </ul>

        <br />
        <br />
        <h3>
          <strong>Leveza</strong>
        </h3>
        <p>
          <strong>
            Por não exigir muitos recursos de computação, especialmente de
            memória RAM, o Node.js é extremamente leve, se comparado a outras
            tecnologias tradicionais. Pode ser usado conjuntamente com o Docker
            para potencializar ainda mais o desempenho em processos como deploy
            e replicação de máquinas.
          </strong>
        </p>

        <br />
        <br />

        <h3>
          <strong>Produtividade</strong>
        </h3>
        <p>
          <strong>
            {" "}
            Pela compatibilidade com o Javascript e o uso da mesma linguagem em
            frontend e backend, o Node.js é a plataforma preferida para o
            desenvolvimento web. Além disso, a tecnologia possibilita que
            deploys e iterações sejam mais ágeis, o que influencia a facilidade
            de resolução de problemas.
          </strong>
          <br />
          <br />
        </p>
      </Section>
    </Container>
  );
};
