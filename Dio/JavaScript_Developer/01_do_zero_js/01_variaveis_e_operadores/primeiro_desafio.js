/*
  Faça um programa que calcula o valor de uma viagem.

  Voce terá 3 variaveis. Sendo elas:
  1 - Preço do combustivelç
  2 - Gasto medio de combustivel do carro por KM
  3 - Distancia em KM da viagem.

  Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoDoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;

const listrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = listrosConsumidos * precoDoCombustivel

console.log(`Listros Consumidos: ${listrosConsumidos.toFixed(2)}`);
console.log(`Valor gasto: ${valorGasto.toFixed(2)}`);





