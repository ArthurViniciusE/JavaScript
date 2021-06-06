//Object.preventExtensions, previne que o objeto seja extendido. Não deixando aumentar a quantidade de atributos;
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível: ', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar';
delete produto.tag;
console.log(produto)

//Object.seal, você não consegue adicionar nem remover atributos, mas consegue mecher nos que já existem;
const pessoa = {nome:'Ju', idade:35}
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

//Objetct.freeze = selado + valores constantes;
