/*
  - BREAK e CONTINUE

    -> BREAK:
        -Expressão que vai gerar uma interrupção na execução.
        - Encerra o loop e continua a execução normal do programa.
        - ENCERRA o loop.

    -> CONTINUE:
        - Quando executado dentro de um loop ele para somente aquela iteração em que está o continue.
        - Pula para a próxima iteração.
        - CONTINUA dentro do loop, porém pula para a próxima iteração.
*/

//=== BREAK ========================================================================================================================================
/*
  let n = 0;
  const max = 10;

  while(n<max){
    console.log(`iteração [${n + 1}]`);
    n++;
    // Mostrar apenas 5 iterações do loop:
    if(n==5){
      break; // Assim que chegar no BREAK a execução do loop é encerrada.
    }
  }
  console.log('Fim do Programa');
*/

//=== CONTINUE ========================================================================================================================================
let n = 0;
const max = 10;

while(n<max){
  // Não mostrar iteração 5:
  if (n==5){
    n++;
    continue; // Ao chegar no CONTINUE, será executada a próxima execução.
  }
  console.log(`iteração [${n}]`);
  n++;
}
console.log('Fim do Programa');