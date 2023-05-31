export const paragraphs = [
  <p>
    O <strong>Elastic Load Balancing</strong> é um serviço da{" "}
    <strong>Amazon Web Services (AWS)</strong> que{" "}
    <strong>
      permite distribuir automaticamente o tráfego de aplicativos entre várias
      instâncias ou recursos
    </strong>
    . Ele atua como um intermediário entre os usuários e os servidores que
    executam os aplicativos, garantindo que as solicitações sejam distribuídas
    de maneira equilibrada e eficiente.
  </p>,
  <p>
    Imagine que você possui um aplicativo web hospedado em várias instâncias do{" "}
    <strong>Amazon EC2</strong>. À medida que o número de usuários acessando o
    aplicativo aumenta, uma única instância pode não conseguir lidar com todo o
    tráfego. É aí que o <strong>Elastic Load Balancing</strong> entra em ação.
  </p>,
  <p>
    O <strong>ELB</strong> age como um ponto central para todo o tráfego de
    entrada. Quando um usuário faz uma solicitação ao seu aplicativo, ela é
    direcionada para o <strong>ELB</strong>. O <strong>ELB</strong> então decide
    para qual instância ou recurso enviar essa solicitação, garantindo que todas
    as instâncias recebam uma carga de trabalho equilibrada.
  </p>,
  <p>
    Existem diferentes tipos de balanceadores de carga disponíveis no{" "}
    <strong>ELB</strong>:
  </p>,
  <li>
    <strong>Classic Load Balancer (CLB)</strong>: O CLB distribui o tráfego
    entre as instâncias com base nas configurações de balanceamento de carga
    definidas. Ele opera no nível de transporte (camada 4) e pode distribuir
    solicitações TCP e UDP.
  </li>,
  <li>
    <strong>Application Load Balancer (ALB)</strong>: O ALB é um balanceador de
    carga de camada de aplicativo (camada 7) que permite rotear o tráfego com
    base em informações do protocolo HTTP. Ele oferece recursos avançados, como
    balanceamento de carga baseado em conteúdo, suporte a vários domínios e
    redirecionamentos.
  </li>,
  <li>
    <strong>Network Load Balancer (NLB)</strong>: O NLB é um balanceador de
    carga de camada de transporte (camada 4) projetado para lidar com tráfego
    TCP, UDP e TLS de alto desempenho. Ele é ideal para cargas de trabalho que
    exigem baixa latência, como aplicativos em tempo real e streaming de mídia.
  </li>,
  <p>
    Ao utilizar o <strong>ELB</strong>, você obtém vários benefícios, incluindo:
  </p>,
  <li>
    <strong>Distribuição de carga equilibrada</strong>: O ELB garante que as
    solicitações sejam distribuídas de forma justa entre as instâncias, evitando
    sobrecarga em um único servidor.
  </li>,
  <li>
    <strong>Escalabilidade</strong>: O ELB pode ser facilmente dimensionado para
    lidar com um aumento no tráfego, adicionando ou removendo instâncias
    conforme necessário.
  </li>,
  <li>
    <strong>Alta disponibilidade</strong>: Se uma instância falhar, o ELB
    redireciona o tráfego para as instâncias restantes, garantindo que o
    aplicativo continue funcionando sem interrupções.
  </li>,
  <li>
    <strong>Monitoramento e gerenciamento</strong>: O ELB fornece métricas e
    registros para que você possa acompanhar o desempenho do seu aplicativo e
    fazer ajustes conforme necessário.
  </li>,
  <p>
    Em resumo, o <strong>Elastic Load Balancing</strong> é um serviço da{" "}
    <strong>AWS</strong> que permite distribuir automaticamente o tráfego de
    aplicativos entre várias instâncias ou recursos. Ele garante uma
    distribuição equilibrada das solicitações, melhora a escalabilidade e a
    disponibilidade do aplicativo, além de fornecer recursos avançados para
    balanceamento de carga em diferentes camadas do protocolo.
  </p>,
];
