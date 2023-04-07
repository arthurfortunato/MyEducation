import { PreCode } from "../../../components/PreCode";

export const paragraphs = [
  `A Herança é um mecanismo da Orientação a Objetos que permite que uma
  classe (chamada classe filha ou subclasse) herde as propriedades e
  métodos de outra classe (chamada classe pai ou superclasse).`,

  `Dessa forma, é possível reutilizar código e organizar de forma
  hierárquica as classes de acordo com suas semelhanças.`,

  `Por exemplo, considere as classes Animal e Gato. A classe Animal pode
  ter as propriedades nome e idade, enquanto a classe Gato pode ter a
  propriedade raça. A classe Gato pode herdar as propriedades da classe
  Animal, e adicionar a propriedade raça. Assim, todas as informações de
  um gato podem ser representadas por sua classe.`,

        <PreCode>
          <code>
            {`
              public class Professor extends Pessoa {
                private String disciplina;
                
                public Professor(String nome, int idade, 
                    String disciplina) {
                      
                  super(nome, idade);
                  this.disciplina = disiplina;
                }

                public String getDisciplina() {
                  return disciplina;
                }
              }
            `}
          </code>
        </PreCode>
];
