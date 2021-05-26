const notas = [5,3,6,9,8];

for (let i in notas) {
    console.log(i, notas[i]);
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 65
}
for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}