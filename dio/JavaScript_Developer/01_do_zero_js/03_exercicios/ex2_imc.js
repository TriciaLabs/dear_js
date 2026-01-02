/*
  Formula do IMC:
  IMG = peso / (altura  * altura)

  Elabore um algoritimo que dado o peso e altura de um adulto, mostre a condicao de acordo com a tablea abaixo.

  IMC em adultos:

  - Abaixo de 18.5,  abaixo do peso.
  - Entre 18.5 e 25, peso normal
  - Entre 25 e 30, aima do peso.
  - Entre 30 e 40, obeso
  - Acima de 40, obesidade grave.
 */

  const peso = 60;
  const altura = 1.53;
  const imc =  peso /   Math.pow(altura, 2);
  console.log(imc);
  
  
  if(imc < 18.5) {
    console.log('Voce está abaixo do peso');

  } else if (imc >= 18.5 && imc <= 25) {
    console.log('Voce está no peso ideal');

  } else if (imc >= 25 && imc <  30) {
    console.log('Voce está acima do peso');
    
  }  else if (imc >= 30 && imc <  40) {
    console.log('Voce está obeso');
    
  }else {
    console.log('Obesidade grave');
  }


  