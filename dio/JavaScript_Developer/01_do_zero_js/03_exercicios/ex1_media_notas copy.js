/*
  1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre de faculdade calcule e impra a media e sua classificação conforme a tabela abaixo:

  Media: = (nota 1 + nota 2 + nota 3) / 3

  Classificação:
  - Media menor que 5, reprovação
  - Media entre 5 e 7, recuperação
  - Media acima de 7, passou de semestre

 */
  
  const nota1 = 0
  const nota2 = 8
  const nota3 = 10

  const media = (nota1 + nota2 + nota3) /3;

  if(media < 5){
    console.log(`Reprovado`);
  } else if (media >=5 && media <= 7){
    console.log(`Recuperacao`);

  } else {
    console.log(`Aprovado`);

  }
