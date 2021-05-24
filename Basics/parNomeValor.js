const saudacao = 'Olá'; // Contexto léxico 1, definido na variável;

function exec() {
    const saudacao = 'fala'; // Contexto 2, defiinido dentro de uma função;
    return saudacao;
}

//Objetos são grupos aninhados de pares de nome e valor;

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    edereco: {
        logradouro: 'Rua A',
        numero: 12
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);