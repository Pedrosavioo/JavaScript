/*
  - FUNÇÕES ANÔNIMAS
      '--> Funções que não possuem um nome associado.
      '--> São chamadas em tempo de execução, ou seja, não fica alocada na memória para ser executada novamente.
      '--> Declaradas associadas a uma variável.
*/

//=== FUNÇÕES ANÔNIMAS ========================================================================================================================================
let f = function (...valores){
  let soma = 0;
  for (const i of valores) {
    soma+=i;
  }
  return soma;
}
console.log(f(10,5)); //Saída 15

//=== CONTRUTOR DENTRO DE UMA FUNÇÃO ANÔNIMA ========================================================================================================================================
let f1 = new Function("v1","v2", "return v1 + v2") //Função Construtor Anônima. //OBS: function deve ser escrito com o "f" em MAIÚSCULO "F".
console.log(f1(10,32));