function gerarNumerosEntre(min, max, numerosProibidos) {
    if( min > max) [min, max] = [min, max]

    return new Promise((resolve, reject) => {
            const fatorMultiplicacao = max - min + 1
            const aleatorio = parseInt(Math.random() * fatorMultiplicacao) + min
            if(numerosProibidos.includes(aleatorio)) {
                reject('Número repetido!')
            }else {
                resolve(aleatorio)
            }
            resolve(aleatorio)
    })
}

async function gerarSoteio(qtdeNumeros){
    const numeros = []
    for(let _ of Array(qtdeNumeros).fill()) {
       numeros.push(await gerarNumerosEntre(1,60, numeros))
    }
    return numeros
}

gerarSoteio(6)
    .then(console.log)
    .catch(console.log)
