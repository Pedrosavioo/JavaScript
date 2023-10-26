/*
  - COMANDO SWITCH CASE
    '--> Avalia expressão e de acordo com seu resultado compara positivamente com os case programados, executando o bloco em questão.
    '--> caso o resultado não conresponda a nenhum case, caíra dentro de um bloco de execução chamado default.
*/

//=== SWITCH CASE ========================================================================================================================================
  // campeonato brasileiro colocação
  let colocacao = 21;

  if(colocacao > 0 && colocacao <= 20){
    switch (colocacao) {
      case 1:
        console.log('CAMPEÃO');
        console.log('- E acesso a LIBERTADORES da proxima temporada');
        break; // para a verficação - evita executar os case seguinte
      case 2: case 3: case 4: // verificar mais de um resultado
        console.log('- Acesso a LEBERTADORES da proxima temporada');
        break;
      case 5: case 6:
        console.log('- Acesso a PRÉ-LIBERTADORES da proxima temporada');
        break;
      case 17: case 18: case 19: case 20:
        console.log('- REBAIXADO para a série B');
        break;
      default:
        console.log('PERMANÊNCIA NA SÉRIE A');
        break;
    }
  }else {
    console.log('Certifique de digitar a colocação corretamente');
  }
