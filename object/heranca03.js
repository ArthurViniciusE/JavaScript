const pai = {nome: 'Pedro', corCabelo: 'preto'};

const filho1 = Object.create(pai);
filho1.nome = 'Jol'
console.log(filho1.corCabelo);

const filho2 = Object.create(pai, {
    nome:{value: 'Bia', writable: false, enumerable:true}
});

console.log(filho2.nome)
console.log(Object.keys(filho1));
console.log(Object.keys(filho2));

for(let key in filho2) {
    filho2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}