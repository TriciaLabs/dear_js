// const camisaPatriciaAzul = true;
// const camisaTriciaAzul = false;

const numero = 13;

const numeroDivisivelpor5 =  (numero % 2) === 0;

if (numero === 0) {
console.log(`Numero invalido`);
} else if (numeroDivisivelpor5) {
  console.log(`Par`);
} else {
console.log(`Impar`);
}
