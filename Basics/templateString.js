const nome = 'Arthur';
const concatenacao = 'Olá' + nome + '!' // Uma das formas de concatenar;
const template = `
    Olá
    ${nome}!` // O Template string suporta quebra de linha;

console.log(concatenacao);
console.log(template);

//expressões...

console.log(`1 + 1 = ${1 + 1}`);