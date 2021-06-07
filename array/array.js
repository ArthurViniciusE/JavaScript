console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['bia', 'carlos', 'ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);

aprovados[3] = 'Paulo';
aprovados.push('Agnes');

console.log(aprovados.length);

aprovados[9] = 'Yoh';
console.log(aprovados.length);
console.log(aprovados);

//Ordena o array
aprovados.sort()
console.log(aprovados);

delete aprovados[1];
console.log(aprovados);

//Exclui e adicona de acordo com as instruções passadas
aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 1, 'Olá','Oi');
console.log(aprovados);