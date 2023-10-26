/*
  - OPERADOR TERNÁRIO (?)

  Vamos usar o exeplo para saber se um numero é par ou impar
*/

let n = 10

//-------------------------------------------------------------------------------------------------------------------------------------------

// -> MANEIRA TRADICIONAL
/*  
  if (n%2 == 0) {
    console.log('Par')
  } else {
    console.log('Impar')
  }
*/

//-------------------------------------------------------------------------------------------------------------------------------------------

// --> USANDO OPERADOR TERNÁRIO

let res = (n%2 ? "Par":"Impar") // (teste lógico ? se true(1) : se false(0))
// A saída será impar, já que o resultado de 10%2 é igual a 0, como o resto da divisão é zero(0), ou seja, segundo o código se a expressão for false a saída será "impar"
console.log(res);

// para resolver tal problema podemos usar o operador de negação que irá converter false em true e sucessivamente.
res = ( !(n%2) ? 'Par' : 'Impar'); // agora 10%2 será convertido de false para true. resultando na saída Par (1/true).
console.log(res);