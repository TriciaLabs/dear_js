function escrevaMeuNome(nome){
  return 'Meu nome é ' + nome
}

function verificarIdade(idade){
  if(idade >= 18){
    console.log(escrevaMeuNome('Tricia') + ' é de maior');
    
  } else {
    console.log('Menor');
  }
}

verificarIdade(23);