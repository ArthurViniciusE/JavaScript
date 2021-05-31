// Coleção deinâmica de pares chave/valor;

const produto = new Object;

produto.nome = 'Cadeira';
produto['marca do produto'] = 'Generica';
produto.preco = 220;

console.log(produto);
delete produto.preco;
delete produto['marca do produto'];
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua 30',
            numero: 33
        }
    },
    condutores:[{
        nome: 'Arthur',
        idade: 21
    }, {
        nome: 'Ana',
        idade: 20
    }],
    calcularValorSeguro: function() {
        //...
    }
}

carro.proprietario.endereco.numero = 50;

console.log(carro);