/*
  - Variação do FOR
    '--> FOR IN e FOR OF
*/

const arr=[10,20,30,40,50]
//=== FOR ========================================================================================================================================
  /*
    for (let i = 0; i < arr.length; i++) {
      console.log(i);
    }
  */

 //=== FOR IN ========================================================================================================================================
  console.log('======= IN =======');
  for (const i in arr) {
    console.log(i); //SAÍDA: 0 1 2 3 4 //Assim como o for tradicional, será mostrado a POSIÇÃO do vetor. para mostrar o conteúdo precisa especiificar o nome do array, no caso arr[i].
  }

  //=== FOR OF ========================================================================================================================================
  console.log('======= OF =======');
  for (const i of arr) {
    console.log(i); // SAÍDA: 10 20 30 40 50 //Diferentemente do FOR IN que mostra a posição, com FOR OF colocando na saída i(posição) será mostrado o conteúdo do array(arr = [10,20,30,40,50])
  }