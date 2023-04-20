import { List } from "../../../components/List";

export const paragraphs = [
  <p>
    REST e RESTful são termos frequentemente usados ​​para descrever a mesma
    abordagem arquitetônica de serviços web, mas há uma diferença sutil entre
    eles.
  </p>,
  <p>
    RESTful é uma variação da arquitetura REST, que segue os princípios e
    restrições do REST de forma mais completa e rigorosa. Enquanto REST é um
    conjunto de princípios, RESTful é uma implementação desses princípios.
  </p>,
  <p>Um serviço web RESTful segue as seguintes restrições, entre outras:</p>,

  <List>
    Client-server: o cliente e o servidor são separados e independentes um do
    outro, o que permite que eles evoluam e sejam mantidos separadamente.
  </List>,
  <List>
    Stateless: o servidor não mantém o estado das solicitações do cliente. Cada
    solicitação contém todas as informações necessárias para que o servidor
    entenda a solicitação e possa processá-la.
  </List>,
  <List>
    Cacheable: as respostas devem ser definidas como cacheáveis ou não
    cacheáveis, permitindo que as respostas sejam armazenadas em cache para
    melhorar o desempenho.
  </List>,
  <List>
    Interface uniforme: a interface do serviço web deve ser uniforme, incluindo
    um conjunto bem definido de verbos HTTP (GET, POST, PUT, DELETE, etc.),
    recursos identificados por URIs e representações dos recursos em formatos
    padrão (como JSON, XML, etc.).
  </List>,
  <List>
    Sistema em camadas: o serviço web pode ser composto por camadas
    intermediárias, como caches, gateways e proxies, sem afetar a interface
    uniforme.
  </List>,
  <p>
    Portanto, pode-se dizer que RESTful é uma implementação mais completa e
    rigorosa dos princípios do REST, que segue as restrições adicionais acima
    mencionadas.
  </p>,
];
