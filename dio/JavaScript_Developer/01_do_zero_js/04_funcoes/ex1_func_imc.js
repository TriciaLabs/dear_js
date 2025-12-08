
function calcularImc(peso, altura){
  return peso / Math.pow(altura, 2)

}

function classificacaoImc(imc) {
  if(imc < 18.5) {
   return 'Voce está abaixo do peso';

  } else if (imc >= 18.5 && imc <= 25) {
   return 'Voce está no peso ideal';

  } else if (imc >= 25 && imc <  30) {
   return 'Voce está acima do peso';
    
  }  else if (imc >= 30 && imc <  40) {
   return 'Voce está obeso';
    
  }else {
   return 'Obesidade grave';
  }

}
// funcao autoexecutavel - funcao nao nomeada
(function () {
  const peso = 60;
  const altura = 1.53;

  const imc =  calcularImc(peso, altura);
  console.log(classificacaoImc(imc));

})();
