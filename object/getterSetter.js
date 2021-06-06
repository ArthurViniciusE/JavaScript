const sequencia = {
    _valor: 1,  //Convenção, variável que vai ser acessada dentro desse objeto;
    get valor() {return this._valor++ },
    set valor(valor) {
        if(valro > this._valor){
            this._valor = valor;
        }
    }
}

console.log(sequencia.valor, sequencia.valor);

