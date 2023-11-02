/*
  - FUNÇÕES PARAMETRIZADAS
      '--> Permite inserir valores para dentro da função.
      '--> Como o javascript faz a conversão automática, posso passar qualquer valor para os parâmetros.
*/

//=== FUNÇÃO PARAMETRIZADA ========================================================================================================================================
  /*
    function soma(n1,n2) {
      console.log(n1 + n2);
    }

    soma(12,3); // Saída: 15
    soma(12); // Saída: NaN
  */

//=== FUNÇÃO COM PARÂMETROS PADRONIZADOS ========================================================================================================================================
  /*
    // Caso não seja definido os valores dos parâmetros na chamada da função. A função vai assumir valores padrão
    function soma(n1=0,n2=0) {
      console.log(n1 + n2);
    }

    soma(12); // saída: 12 // Como os parâmetros foram definidos com valores padrôes, n1=0 e n2=0, passando 12 como parâmetro de n1 a soma fica da seguinte maneira: 12 + 0 = 12 
  */
  
//=== FUNÇÃO RETORNANDO VALOR ========================================================================================================================================
  function somaa(n1=0,n2=0) {
    // return n1+n2;
    return console.log(n1+n2);
  }

  // console.log(somA(12,32)); // Saída: 44
  console.log(somaa(12,32));