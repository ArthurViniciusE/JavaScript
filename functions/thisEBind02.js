function Pessoa() {
    this.idade = 0;

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade);
    }/*.bind(this)*/, 1000) // A cada mil milisegundos, a função setInterval vai disparar a função anônima;
}
new Pessoa 