/*
  Faça um programa que calcula o valor de uma viagem.

  Voce terá 5 variaveis. Sendo elas:
  1 - Preço do etanol;
  2 - Preço da gasolina
  3 - Tipo de combustivel que está no carro
  4 - Gasto medio de combustivel do carro por KM
  5 - Distancia em KM da viagem.

  Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoDoEtanol = 5.79;
const precoDaGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;

const tipoDeCombustivbel = 'Gasolina';

const listrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoDeCombustivbel === 'Etanol') {
  const valorGasto = listrosConsumidos * precoDoEtanol
  console.log(`Valor gasto: ${valorGasto.toFixed(2)}`);

} else {
  const valorGasto = listrosConsumidos * precoDaGasolina;
  console.log(`Valor gasto: ${valorGasto.toFixed(2)}`);
}


