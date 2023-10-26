/*
  - OPERADOR TYPEOF
    '--> operador que retorna o tipo do operando, ou seja, o tipo da variável.
*/

let v1 = 10 // qualquer valor numérico é tratado como number. Não é serado por número inteiro ou real.
let v2 = "10"
let v3 = v1 === v2 // faz a comparação com o operador === para retornar true caso seja verdadeiro e false para falso. logo a saída será false.
let v4 = {nome:"Pedro"}

// valores
console.log(v1);
console.log(v2);
console.log(v3);
console.log(v4);

// tipos dos valores
console.log('Valor = '+ v1 + ', do Tipo ' + typeof(v1));
console.log('Valor = '+ v2 + ', do Tipo ' + typeof(v2));
console.log('Valor = '+ v3 + ', do Tipo ' + typeof(v3));
console.log('Valor = '+ v4 + ', do Tipo ' + typeof(v4));