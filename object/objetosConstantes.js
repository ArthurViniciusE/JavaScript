// Pessoa aponta para um endereço de memória;
const pessoa = {nome: 'João'};
pessoa.nome = 'Pedro';
console.log(pessoa);

//Pessoa tenta apontar para um novo objeto em um endereço diferente;
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa); //Congelando o objeto pessoa, assim não consigo mecher mais nele;

pessoa.nome = 'Maria' // Vai ignorar a tentativa de atribuição;
console.log(pessoa.nome);