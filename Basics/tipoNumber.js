const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);

console.log(Number.isInteger(peso1)); // Saber se é um valor inteiro ou não;


const avaliacao1 = 9.871;
const avaliacao2 = 6.894;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); // Resultado com apenas duas casas decimais;
console.log(media.toString()); // Retorna média como string;
console.log(media.toString(2)); // Retorna média como string em um valor binário;
console.log(typeof(media)); // valor do dado;
console.log(typeof(Number)); // Função;