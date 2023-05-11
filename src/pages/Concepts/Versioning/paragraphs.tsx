export const paragraphs = [
  <p>
    O <strong>versionamento semântico</strong> é uma convenção para nomear
    versões de software que foi criada para facilitar a comunicação entre
    desenvolvedores e usuários, evitando conflitos e problemas de
    compatibilidade.
  </p>,
  <p>
    Essa convenção define que cada versão deve ter um número de versão composto
    por três partes: <strong>MAJOR.MINOR.PATCH</strong>. Essas partes
    representam diferentes níveis de alterações no software.
  </p>,
  <p>
    A primeira parte, <strong>MAJOR</strong>, representa mudanças significativas
    que podem causar incompatibilidades com versões anteriores. Por exemplo,
    adicionar ou remover funcionalidades importantes, mudanças de arquitetura,
    etc.
  </p>,
  <p>
    A segunda parte, <strong>MINOR</strong>, representa mudanças menores que não
    devem causar incompatibilidades com versões anteriores. Por exemplo,
    adicionar novas funcionalidades, melhorar a performance, etc.
  </p>,
  <p>
    A terceira parte, <strong>PATCH</strong>, representa correções de bugs e
    pequenas alterações que não devem ter impacto na compatibilidade com versões
    anteriores.
  </p>,
  <p>
    Esses números são incrementados de acordo com o tipo de mudança que foi
    feita. Por exemplo,{" "}
    <strong>
      se for adicionada uma nova funcionalidade que não quebra a compatibilidade
      com versões anteriores, a versão será incrementada na parte MINOR (por
      exemplo, de 1.2.3 para 1.3.0). Se for corrigido um bug, a versão será
      incrementada na parte PATCH (por exemplo, de 1.2.3 para 1.2.4)
    </strong>
    .
  </p>,
  <p>
    Além disso, a convenção do versionamento semântico estabelece que as versões
    são comparáveis entre si. Isso significa que, por exemplo, a versão 2.0.0 é
    maior que a versão 1.9.0, mas menor que a versão 3.0.0.
  </p>,
  <p>
    Essa convenção é muito útil para os desenvolvedores, porque permite que eles
    comuniquem claramente as mudanças e melhorias feitas no software. E para os
    usuários, ela é útil porque permite que eles saibam facilmente quais são as
    mudanças e se elas podem ou não afetar o funcionamento de seus sistemas.
  </p>,
];
