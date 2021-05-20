let valor // não inicializada;
console.log(valor); // undefined;

valor = null; // ausência de valor, pois não aponta para nenhum local na memória;
console.log(valor);
//console.log(valor.toString()); erro;

const produto = {};
console.log(produto.preco);
console.log(produto); //objeto vazio;

produto.preco = 3.45;
console.log(produto)

produto.preco = undefined //evitar atribuir valor undefined;
console.log(!!produto.preco);
console.log(produto);

produto.preco = null// sem preço;
console.log(!!produto.preco);
console.log(produto);

