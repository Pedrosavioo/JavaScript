/*
  - PARÂMETROS REST EM FUNÇÕES
      '--> É uma forma de passagem de parâmetros em que eu não preciso informar a quantidade de parâmetros que quero enviar para dentro da função.
      '--> declaração: function(...valores), isso implica em permitir a passagem de n valores para dentro da função.
      '--> Porém o tratamento desses parâmetros muda um pouco, pois preciso saber primeiro quantos parâmetros foram passados.
*/

//=== PARÂMETROS REST EM FUNÇÕES ========================================================================================================================================
  // QUANTIDADE DE PARÂMETROS:
  /*
    function soma(...valores) {
      return valores.length; // retorna a quantidade de parâmetros que foram passados.
    }

    soma(10,2) // Saída: 2 // A função está retornando a quantidade de valores.
    console.log('Fim do Programa');
  */

  // TRATAMENTO DOS PARÂMETROS:
  /*
    function soma(...valores) {
      let s = 0;
      // Tamanho/quantidade de parâmetros passados:
      let tam = valores.length;

      // Percorrer os valores dos parâmetros e soma-los:
      for(let i = 0; i < tam; i++){
        s += valores[i];
      }
      return s;
    }

    console.log(soma(1,2,4,5)); // Saída: 12 // A função está retornando a soma dos valores.
    console.log('Fim do Programa');
  */

  // EXEMPLO USANDO FOR OF:
    function soma(...valores) {
      let s = 0;
      // Percorrer os valores dos parâmetros e soma-los:
      for(let v of valores){
        s += v; // A variável v recebe os VALORES que estão dentro do array valores[1,2,4,5] em cada iteração.
      }
      return s;
    }

    console.log(soma(1,2,4,5)); // Saída: 12 // A função está retornando a soma dos valores.
    console.log('Fim do Programa');