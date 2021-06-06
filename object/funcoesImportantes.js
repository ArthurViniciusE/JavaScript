const pessoa = {
    nome: 'Rebeca',
    idade: 20,
    peso: 69
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/09/2000'
})

pessoa.dataNascimento = '01/09/2001'
console.log(pessoa.dataNascimento)
