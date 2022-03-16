import { Container, Header, Pre, Section } from "./styles";

export const Functions = () => {
  return (
    <Container>
      <Header>
        <h1>Funções</h1>
      </Header>

      <Section className="section section__functions">
        <p>
          Podemos ter duas interpretações do que são <strong>funções</strong>. A
          primeira de que uma função é{" "}
          <strong>
            um trecho de código em que damos um nome e que é executado a cada
            vez que é chamado
          </strong>
          . Exemplo:
        </p>

        <Pre>
          <code>
            {`
              // Definindo a função

              function geradorNumerico(){
                  for(let i = 0; i < 10; i++) {
                      console.log(i);
                  }
              }
    
              // Chamando a função
              geradorNumerico();
          `}
          </code>
        </Pre>

        <br />
        <br />
        <p>
          Criamos uma função usando a function e demos o nome geradorNumerico. É
          uma função que apenas imprime no console os número de 0 a 100. Cada
          vez que é chamada a função, o seu código é executado. <br />
          <strong>
            {" "}
            Para tornar a função mais reutilizável, podemos parametriza-la
          </strong>
          . Para isso, adicionamos os parâmetros na declaração.
        </p>

        <Pre>
          <code>
            {`
             // Definindo a função
             function geradorNumerico(comeco, fim){
                 for(let i = comeco; i <= fim; i++){
                     console.log(i);
                 }
             }
   
             // Chamando a função
             geradorNumerico(10,20);
          `}
          </code>
        </Pre>
        <br />
        <br />

        <p>
          Entre os parêntesis adicionamos a declaração de duas variáveis, começo
          e fim. De forma que a função imprime os números entre esses dois
          valores.
        </p>

        <p>
          A segunda interpretação de função é a matemática, como algo que recebe
          valores e devolve outro.
        </p>

        <Pre>
          <code>
            {`
            function soma(a, b){
              return a + b;
          }
        
            const resultado = soma(2, 3);
         `}
          </code>
        </Pre>
        <br />
        <br />

        <p>
          Declaramos dois parâmetros, a e b, que ao ser passados a função soma,
          esta retorna a soma dos dois. Esse valor fica disponível para ser
          salvo em outra variável ou para ser passado como valor em outra
          função.
        </p>
      </Section>

      <Section className="section section__ways-declare">
        <h2>Formas de Declarar</h2>

        <p>
          Além da forma tradicional de declarar, há ainda duas formas de
          utilizar funções, que é usando do artifício de que em JavaScript
          funções são valores.
        </p>

        <Pre>
          <code>
            {`
              // Usando function
              function soma1(a, b) { 
                return a + b; 
              }

              // Atribuindo uma função anônima em constantes
              const soma2 = function(a, b){ 
                return a+b; 
              }

              // Atribuindo uma função de "flecha" em constantes
              const soma3 = (a,b) => a + b;
         `}
          </code>
        </Pre>
        <br />
        <br />

        <p>
          A primeira função foi declarada como a{" "}
          <strong>forma tradicional</strong> apresentada antes. No segundo caso
          foi usado uma <strong>função anônima</strong>, isto é, sem nome. Note
          que seguido de function não há declaração de um nome para a função. O
          que define o seu nome é a variável. No terceiro caso é também uma
          função anônima porém é usada a chamada{" "}
          <strong>função de flecha</strong>. Onde é declarado os parâmetros de
          entrada em parêntesis e a sua definição seguido da flecha {`=>`}.
        </p>

        <p>Exemplos de funções de flecha:</p>

        <Pre>
          <code>
            {`
                const hello1 = () => "Hello World!";

                const hello2 = (name) => "Hello " + name;
                
                const hello3 = (name) => {return "Hello " + name;};
          `}
          </code>
        </Pre>
        <br />
        <br />

        <p>
          Note que não é possível fazer qualquer restrição de tipo de entrada
          como parâmetro de uma função. Caso seja passado algo que não era
          esperado, possivelmente quebrará o código.
        </p>
      </Section>
    </Container>
  );
};
