const pessoa = {
    nome: 'Arthur',
    idade: '203',
    endereco: {
        logradouro: 'Rua A',
        numero: 21 
    }
}

const {nome, idade} = pessoa; // Tirar de pessoa os valores nome e idade;

console.log(nome, idade);

const {nome:n, idade: i} = pessoa;
console.log(n,i);

const {sobrenome, humor = true} = pessoa;
console.log(sobrenome, humor);