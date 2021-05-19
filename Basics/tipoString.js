const escola = "Cod3r";

console.log(escola.charAt(3)); // Retorna a letra no índice 3 dentro da string;
console.log(escola.charCodeAt(2)); // Retorna o valor unicode da letra;
console.log(escola.indexOf('3')); // Retorna o valor associado ao terceiro índice dentro da variável escola;

console.log(escola.substring(1)); // Retorna do índice 1 até o final
console.log(escola.substring(0,3)); // Retorna do índice 0 até o 3 sem incluir o 3;
console.log('Escola ' .concat(escola).concat("!")); // Retorna a concatenação de várias strings diferentes e até um literal;
console.log(escola.replace(3, 'e')); // Substitui o valor do índice passado pelo o que está na string;

console.log('Ana,Maria,Pedro'.split(',')); //Retorna um array com os elementos da string separados por vírgula;
