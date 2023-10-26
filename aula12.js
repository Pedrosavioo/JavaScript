/*
  - OPERADOR Spreed (...)
    '
    '--> Usado para quebrar Array.
    '--> Spreed traduzido significa "espalhar", ou seja, irá quebrar um conjunto de elementos e vai devolver elemento a elemento.
    '--> Vantagens do seu uso:
          '-> AJUDA A SIMPLIFICAR O USO DE ARRAY.
          '-> COPIAR ARRAY.
          '-> CÓPIAS DE OBJETO.
          '-> FUNÇÕES.
*/

//=== COPIANDO UM ARRAY ========================================================================================================================================
  /*
    let arr1 = [10, 20, 30];
    let arr2 = [11, 22, 33, 44, 55];
    // let arr3 = arr1 // copiando array
      // OU
    let arr3 =[...arr1]; // COPIANDO ARRAY usando Spreed

    console.log(`arr1 = ${arr1}`); // [10, 20, 30]
    console.log(`arr2 = ${arr2}`); // [11,22,33,44,55]
    console.log(`arr3 = ${arr3}`); // [10,20,30]
  */

//=== COPIANDO MAIS DE UM ARRAY ========================================================================================================================================
  /*
    let arr1 = [10, 20, 30];
    let arr2 = [11, 22, 33, 44, 55];
    // let arr3 = [arr1,arr2] // copiando dois array
      // OU
    let arr3 =[...arr1,..arr2]; // COPIANDO ARRAY usando Spreed

    console.log(`arr1 = ${arr1}`); // 10, 20, 30
    console.log(`arr2 = ${arr2}`); // 11,22,33,44,55
    console.log(`arr3 = ${arr3}`); // 10,20,30,11,22,33,44,55
  */

//=== COPIANDO OBJETOS ========================================================================================================================================
  /*
    const jogador1 = {nome:"Pedro Sávio", passe:92, chute:84};
    const jogador2 = {nome:"Messi", passe:98, chute:94};
    const jogador3 = {...jogador1,...jogador2}; // só será mostrado o jogador2, isso ocorreu pois a junção de objetos usando spreed irá JUNTAR as PROPRIEDADES INCOMUM, por sua vez as PROPRIEDADES COMUNS serão mostradas conforme o último dado mostrado, que no caso foi a do jogador2.

    console.log(jogador3);
  */

//=== COPIANDO OBJETOS COM PROPRIEDADES DIFERENTES ========================================================================================================================================
  /*
    const jogador1 = {nome:"CR7", passe:92, chute:84, fisico:88}; // note que apenas o jogador1 tem a propriedade FISICO declarada no objeto.
    const jogador2 = {nome:"Messi", passe:98, chute:94, habilidade:98}; // note que apenas o jogador2 tem a propriedade HABILIDADE declarada no objeto.
    const jogador3 = {...jogador1,...jogador2} // a saída será feita pelas propriedades em comum(nome, passe e chute) com o valor do último dado inspecionado e das duas propriedades incomuns(fisico e habilidade)

    console.log(jogador3);
  */

//=== SPREED EM FUNÇÕES ========================================================================================================================================
  /*
    const soma=(v1,v2,v3)=>{
      return v1+v2+v3
    }

    // MÉTODO TRADICIONAL
      // console.log(soma(1,5,10));

    // USANDO SPREED
      // usando SPREED posso criar um array para servir como base para ser usado como parâmetros da função soma(v1,v2,v3):
      arr = [1,5,10];

      //console.log(arr); //ERRATA: Dessa maneira estou enviando o array com um todo sem "espalhar" cada elemento para que seja feita a soma entre eles.
      console.log(soma(...arr)); // Assim, espalhando os elementos do array a soma será feita da forma correta sem ocasionar o erro da linha acima.
  */

//=== PEGAR CONJUNTOS DE ELEMENTOS HTML COM SPREED ========================================================================================================================================
//===IMPORTANTE!!!

  // ===> HTMLCollection:
  //  '-> Usando esse tipo de coleção só recebe elementos HTML
    const objs1 = document.getElementsByTagName('div') // retorna todos os elemntos com tag div do HTML.

  // ===> Array de elementos HTML:
  //  '-> Já usando o array, posso adicionar outros tipos de elementos(valores, strings...).
  //  '-> A quantidade de funções é bem maior para trabalhar. 
    const objs2 = [...document.getElementsByTagName('div')] // retorna todos os elemntos com tag div do HTML.

  console.log(objs1); // retorna um HTMLCollection, visível no console do browser.
  console.log(objs2);