function gerarNumerosEntre(min, max) {
    if( min > max){
        let a = [min, max]
        [max,min] = [min, max]
    }

    return new Promise(resolve => {
        const fatorMultiplicacao = max - min + 1
        const aleatorio = parseInt(Math.random() * fatorMultiplicacao) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1, 30)
    .then(num => num * 10)
    .then(numX10 => `O número interpolado foi ${numX10}`)
    .then(console.log)