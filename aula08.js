/*
  - OPERADORES BITWISE - Operados bit a bit
    & -> operador de equivalência
    | -> operador de equivalência
    << -> deslocar bits do elemento para esquerda
    >> -> desloca bits do elemento para a direita
*/

//-------------------------------------------------------------------------------------------------------------------------------------------
// EXEMPLO: &, | e ^
console.log('==> EXEMPLO OPERADORES (&, | e ^)');
let n1 = 10; // binário -> 00001010
let n2 = 11; // binário -> 00001011

console.log(n1 & n2);  // (0 com 1 = 0) e (1 com 1 = 1) 
console.log(n1 | n2); // (0 com 1 = 1) e (1 com 1 = 1)
console.log(n1 ^ n2); // (0 com 1 = 1) e (1 com 1 = 0)

//-------------------------------------------------------------------------------------------------------------------------------------------
// EXEMPLO: Deslocando bits para esquerda(<<) e direita(>>)
console.log('==> DESLOCANDO BITS para esquerda(<<) e direita(>>)');

n1 = 10; // binário -> 00001010

let res = n1 << 1; // deslocar 1 bit da variável n1 para a esquerda. resultando em binário 00010100 que é igual a 20. caso fosse 2 bits para a esquerda teríamos 00101000, que é igual a 40.
console.log('(deslocando pra esquerda) ' + res);

res = n1 >> 1; // // deslocar 1 bit da variável n1 para a direita. resultando em binário 00000101 que é igual a 5. caso fosse 2 bits para a esquerda teríamos 1000010, que é igual a 2.
console.log('(deslocando pra direita) ' + res);

// pode-se concluir que deslocando 1 bit para a esquerda irá resultar no dobro do valor. Já deslocar 1 bit para a direita irá resultar na metade do valor.
//-------------------------------------------------------------------------------------------------------------------------------------------