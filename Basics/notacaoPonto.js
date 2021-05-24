console.log(typeof console);
console.log(Math.ceil(6.1));

const objeto1 = {};
objeto1.nome = 'Bola';
//objeto1['nome'] = 'Bola2';

console.log(objeto1.nome);

function Obj(nome) {
    this.nome = nome;
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');
console.log(obj2.nome);
console.log(obj3.nome);