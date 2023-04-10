export const paragraphs = [
  <p>
    Cada uma das implementações tem todos os métodos definidos em suas
    interfaces. Em qualquer uma delas é possível inserir elementos{" "}
    <strong>null</strong>. Em mapas, tanto chaves quanto valores podem ser null.
    Diferente de Vector e Hashtable, não são seguras para serem usadas com
    threads (não são Thread-safe). Ou seja, o acesso concorrente a esses objetos
    pode produzir resultados imprevisíveis. Além disso, são serializáveis – isto
    é, seus estados podem ser salvos – e suportam o método clone(), que cria uma
    cópia de um objeto.
  </p>,
  <p>
    <strong>Obs</strong>: <strong>Thread-safe</strong> é o termo designado a
    objetos seguros para serem usados com threads.
  </p>,
  <p>
    Seguindo as boas práticas de orientação a objetos, você deve programar para
    interfaces e não para implementações. A recomendação é escolher uma
    implementação para instanciar o objeto e atribuir a nova coleção ao tipo de
    interface correspondente. Ou ainda, passar o objeto coleção para um método
    que espera um argumento do tipo interface. Seguindo essas práticas você
    conseguirá o que chamamos de baixo acoplamento, ou seja, poderá mudar
    facilmente de implementação sem que isso acarrete alteração no código da
    aplicação. Desta forma você fica livre para mudar a implementação sempre que
    questões relacionadas a desempenho ou detalhes de comportamento exigirem a
    mudança.
  </p>,
  <p>
    <strong>Obs</strong>: Não confunda a interface Collection com a classe
    Collections. Essa classe oferece métodos estáticos utilitários que podem
    manipular coleções. Outra classe utilitária é Arrays, cujos métodos
    estáticos são aplicados a arrays.
  </p>,
];
