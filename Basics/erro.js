function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'message'
    
}


function imprimirNome(obj) {
        try{
        console.log(obj.name.toUppercase() + '!!!');
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = {name: 'Arthur'}
imprimirNome(obj);