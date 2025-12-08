/*
  Elabore um algoritimo que calcule o valor a ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condicao de pagamento.
  Utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

  Código Condição de Pagamento:

  1 - À vista debito, recebe 10% de desconto.
  2 - À vista no dinheiro ou pix, recebe 15% de desconto;
  3 - Em duas vezes, preço normal de etiqueda sem juros;
  4 - Acima de duas vezes, preço normal de etiqueta mas com 10% de juros.
*/

const precoEtiqueta = 100

const formaDePagamento = 2

  if(formaDePagamento === 1){
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
  } else if (formaDePagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
    
  }else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
    
  }else if (formaDePagamento === 4) {
     console.log(precoEtiqueta + (precoEtiqueta * 0.1));
    
  }else {
    console.log('Opcao invalida');
  }