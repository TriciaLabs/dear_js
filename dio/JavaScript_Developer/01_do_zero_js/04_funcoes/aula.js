function teste(){
  console.log('Teste');
  
}

function sayMyName(name){
  console.log('Meu nome  é ' + name);
}

//procedimento: func que nao tem retorno
function quadrado(valor){
  return valor * valor;
}

function incrementarJuros(valor, percentualJuros){
  const valorDeAcrecimo = (percentualJuros / 100) * valor;
  return valor + valorDeAcrecimo;
}

console.log(incrementarJuros(100,10));
console.log(incrementarJuros(100,15));


sayMyName('Tricia')
teste();
const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);


function main(){
  console.log('Programa principal');
  
}

main();