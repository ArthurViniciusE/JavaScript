const pilotos = ['Vettel', 'Alonso', 'Raikkonen','Massa'];

pilotos.pop() //remove o último elemento do array;
console.log(pilotos);

pilotos.push('Verstappen'); //Adiciona o valor na última posição;
console.log(pilotos);

pilotos.shift() // remove o primeiro elemento do array;
console.log(pilotos);

pilotos.unshift('Hamilton'); // adiciona o elemento na primeira posição do array;
console.log(pilotos);

// splice pode adicionar e remover elementos

pilotos.splice(2,0, 'Bottas', 'Massa');
console.log(pilotos);

//remover
pilotos.splice(3,1)
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // Gera um novo array apartir do índice passado;
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2);