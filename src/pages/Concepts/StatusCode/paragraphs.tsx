import { List } from "../../../components/List";

export const paragraphs = [
  <strong>
    O status code (código de status) é um número de três dígitos que é retornado
    pelo servidor em resposta a uma solicitação feita pelo cliente, geralmente
    por meio do protocolo HTTP.
  </strong>,
  <p>
    Cada código de status tem um significado específico, que ajuda a indicar ao
    cliente o resultado da solicitação e como ele deve agir a seguir. Esses
    códigos são divididos em 5 categorias principais:
  </p>,
  <List>
    <strong>1xx (Informacional)</strong>: Indica que a solicitação foi recebida
    e o servidor está continuando a processá-la.
  </List>,
  <List>
    <strong>2xx (Sucesso)</strong>: Indica que a solicitação foi recebida,
    entendida e aceita com sucesso.
  </List>,
  <List>
    <strong>3xx (Redirecionamento)</strong>: Indica que mais ações são
    necessárias para concluir a solicitação.
  </List>,
  <List>
    <strong>4xx (Erro do cliente)</strong>: Indica que a solicitação não pôde
    ser concluída devido a um erro do cliente.
  </List>,
  <List>
    <strong>5xx (Erro do servidor)</strong>: Indica que a solicitação não pôde
    ser concluída devido a um erro no servidor.
  </List>,
  <p>Alguns exemplos comuns de códigos de status incluem:</p>,
  <List>
    <strong>200 OK</strong>: indica que a solicitação foi bem-sucedida e o
    servidor retornou os dados solicitados.
  </List>,
  <List>
    <strong>400 Bad Request</strong>: indica que a solicitação enviada pelo
    cliente estava incorreta ou incompleta.
  </List>,
  <List>
    <strong>404 Not Found</strong>: indica que o servidor não encontrou o
    recurso solicitado.
  </List>,
  <List>
    <strong>500 Internal Server Error</strong>: indica que ocorreu um erro
    interno no servidor que impediu a conclusão da solicitação.
  </List>,
  <p>
    Ao entender os diferentes códigos de status e seus significados, os
    desenvolvedores podem usar essas informações para solucionar problemas de
    aplicativos e fornecer uma melhor experiência do usuário.
  </p>,
];
