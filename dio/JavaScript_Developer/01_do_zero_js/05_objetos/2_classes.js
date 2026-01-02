/*
  1 - Crie uma classe para representar carros.
  Os carrps possuem uma MARCA, uma COR, e um gasto medio de combustivel por KM rodado.

  2 - Crie um metodo que dado a quantidade de KM e o preco do combustivel nos de um valor gasto em reais para realizar este percurso.
  
  */

  class Carro {
    marca;
    cor;
    gastoMedioPorKm;
    

    constructor(marca,cor, gastoMedioPorKm){
      this.marca =  marca;
      this.cor = cor;
      this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {

      return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
      

    }
  }

  const uno = new Carro('Fiat', 'Branco', 1/12);
  const palio = new Carro('Fiat', 'Preto', 1/10);

  console.log(  uno.calcularGastoDePercurso(70,5));
  console.log(  palio.calcularGastoDePercurso(70,5));
  