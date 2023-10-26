/*
  - WHILE e DO WHILE
    '-->  Semelhanças:
    '       '-> Ambos vão executar enquanto uma expressão for verdadeira.
    '      '-> Usados em situações indefinidas(quando não sei a quantidade de vezes que vai ser iterado).
    '-->  Diferenças:
            '-> WHILE: teste lógico feito no INÍCIO. Não tenho a garantia que o código não será executado ao menos uma vez.
            '-> DO WHILE: teste lógico feito no FIM. Código será executado ao menos uma vez.
*/

//=== WHILE ========================================================================================================================================

  let n = 10

  while(n<10){
    console.log("Curso JS, testando iteração [ " + n + " ]");
    n++;
  }
  console.log("Fim do Programa")

//=== DO WHILE ========================================================================================================================================
  let n1 = 10

  do{
    console.log("Curso JS, testando iteração [ " + n1 + " ]");
    n1++;
  }while(n1<10)
  console.log("Fim do Programa")