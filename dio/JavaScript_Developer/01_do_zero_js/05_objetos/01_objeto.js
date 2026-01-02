const pessoa = {
  nome: "Victor",
  idade: 32,
  descrever: function() {
    console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos `);
    
  }
}

const atributo = 'idade';

console.log(pessoa[atributo]);
console.log(pessoa['nome']);
