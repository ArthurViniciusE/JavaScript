// Cadeia de protótipos {prototype chain}
const avo = {atr1: 'A'};
const pai = {__proto__:avo, atr2: 'B'};
const filho = {__proto__:pai, atr3:'C'};
console.log(filho.atr1)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 32 // shadowing;
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100)
console.log(volvo.status());

ferrari.acelerarMais(300)
console.log(ferrari.status());