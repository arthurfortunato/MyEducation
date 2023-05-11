export const paragraphs = [
  <p>
    <strong>REST</strong> e <strong>RESTful</strong> são termos frequentemente
    usados para descrever a mesma abordagem arquitetônica de serviços web, mas
    há uma diferença sutil entre eles.
  </p>,
  <p>
    <strong>RESTful</strong> é uma variação da arquitetura <strong>REST</strong>
    , que segue os princípios e restrições do REST de forma mais completa e
    rigorosa. Enquanto{" "}
    <strong>
      REST é um conjunto de princípios, RESTful é uma implementação desses
      princípios
    </strong>
    .
  </p>,
  <p>
    Um serviço web <strong>RESTful</strong> segue as seguintes restrições, entre
    outras:
  </p>,

  <li>
    <strong>client-server</strong>: o cliente e o servidor são separados e
    independentes um do outro, o que permite que eles evoluam e sejam mantidos
    separadamente.
  </li>,
  <li>
    <strong>stateless</strong>: o servidor não mantém o estado das solicitações
    do cliente. Cada solicitação contém todas as informações necessárias para
    que o servidor entenda a solicitação e possa processá-la.
  </li>,
  <li>
    <strong>cacheable</strong>: as respostas devem ser definidas como cacheáveis
    ou não cacheáveis, permitindo que as respostas sejam armazenadas em cache
    para melhorar o desempenho.
  </li>,
  <li>
    <strong>interface uniforme</strong>: a interface do serviço web deve ser
    uniforme, incluindo um conjunto bem definido de verbos HTTP (GET, POST, PUT,
    DELETE, etc.), recursos identificados por URIs e representações dos recursos
    em formatos padrão (como JSON, XML, etc.).
  </li>,
  <li>
    <strong>sistema em camadas</strong>: o serviço web pode ser composto por
    camadas intermediárias, como caches, gateways e proxies, sem afetar a
    interface uniforme.
  </li>,
  <p>
    Portanto, pode-se dizer que <strong>RESTful</strong> é uma implementação
    mais completa e rigorosa dos princípios do <strong>REST</strong>, que segue
    as restrições adicionais acima mencionadas.
  </p>,
];
