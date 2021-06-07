const quaseArry = {0: 'Rafael', 1:'Ana', 2:'Bia'};
console.log(quaseArry);

Object.defineProperty(quaseArry, 'toString', {
    value: function() { return Object.values(this)},
    enumerable: false
})

console.log(quaseArry[0]);

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArry.toString(),meuArray)