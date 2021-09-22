function gerarNumerosEntre(min, max, tempo) {
    if( min > max){
        let a = [min, max]
        [max,min] = [min, max]
    }

    return new Promise(resolve => {
        setTimeout(function() {
            const fatorMultiplicacao = max - min + 1
            const aleatorio = parseInt(Math.random() * fatorMultiplicacao) + min
            resolve(aleatorio)

        })
    }, tempo)
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1,60, 3000),
        gerarNumerosEntre(1,60,1000),
        gerarNumerosEntre(1,60, 500),
    ])
}
gerarVariosNumeros()
    .then(numeros => console.log(numeros))