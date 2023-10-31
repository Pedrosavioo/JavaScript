/*
  - FUNÇÕES COM RETORNO
      '--> Para retornar algo para quem fez a chamada da função usamos o comando 'return'.
      '--> Garantir que o 'return' está sendo executado somente uma vez, como por exemplo, utilizando um condicional para fazer o return.
*/

//=== FUNÇÃO COM RETONRO ========================================================================================================================================
  function nome() {
    return 'Pedro';
  }
  nome(); //Saída: //Chamando a função nome que RETORNA uma STRING não é mostrada no console, isso ocorreu pois não está sendo executado o comando 'console.log()'.
  // mostrando no console:
  console.log(nome()); // executando a função dentro do comando 'console.log()' será mostrado a STRING que está sendo retornada da função.