// Função factory(fábrica) é uma função que retorna um objeto;

const prod1 = {
    noem: '...',
    preco: 45
}

function criarPessoa() {
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())