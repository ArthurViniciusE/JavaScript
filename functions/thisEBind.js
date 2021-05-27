const pessoa = {
    saudacao: 'Boa noite!',
    falar() {
        console.log(this.saudacao);
    }
}
pessoa.falar();
const falar = pessoa.falar
falar() // conflito entra paradigmas: funcional e OO;

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();