import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";

const innerJoin = `
SELECT coluna1, coluna2
FROM tabela1
INNER JOIN tabela2 
ON tabela1.chave = tabela2.chave;
`;

const example = `
SELECT clientes.nome, pedidos.numero_pedido
FROM clientes
INNER JOIN pedidos 
ON clientes.id = pedidos.id_cliente;
`;

export const paragraphs = [
  <p>
    A cláusula <strong>INNER JOIN</strong> é utilizada para{" "}
    <strong>combinar linhas de duas ou mais tabelas</strong> com base em uma
    condição relacionada. Ela retorna apenas as linhas que têm valores
    correspondentes nas duas tabelas envolvidas.
  </p>,
  <StyledSyntaxHighlighter language="sql" style={coldarkDark}>
    {innerJoin.trim()}
  </StyledSyntaxHighlighter>,
  <p>
    A cláusula <strong>INNER JOIN</strong> combina as linhas da{" "}
    <strong>tabela1</strong> e <strong>tabela2</strong> com base na condição
    especificada após o <strong>ON</strong>, onde as chaves correspondentes são
    iguais.
  </p>,
  <p>
    Suponha que você tenha duas tabelas, <strong>"clientes"</strong> e{" "}
    <strong>"pedidos"</strong>, onde a coluna "<strong>id_cliente"</strong> é a
    <strong>chave estrangeira</strong> na tabela <strong>"pedidos"</strong> que
    corresponde à coluna <strong>"id"</strong> na tabela{" "}
    <strong>"clientes"</strong>. Você pode usar <strong>INNER JOIN</strong> para
    obter informações dos pedidos juntamente com os detalhes dos clientes
    associados.{" "}
  </p>,
  <StyledSyntaxHighlighter language="sql" style={coldarkDark}>
    {example.trim()}
  </StyledSyntaxHighlighter>,
  <p>
    Neste caso, a consulta retorna o <strong>nome do cliente</strong> e o{" "}
    <strong>número do pedido</strong> para todos os pedidos que têm um cliente
    correspondente na tabela <strong>"clientes"</strong>. A condição
    <strong>"clientes.id = pedidos.id_cliente"</strong> especifica a relação
    entre as duas tabelas.
  </p>,
  <p>
    É importante ressaltar que a cláusula <strong>INNER JOIN</strong> retorna
    apenas as linhas que têm correspondências nas duas tabelas. Caso não haja
    correspondência, as linhas não serão retornadas na consulta resultante.
  </p>,
];
