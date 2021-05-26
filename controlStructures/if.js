function boaNoticia(nota) {
    if(nota >=7 ) {
        console.log(`Aprovado com ${nota}`);
    }
}
boaNoticia(8.1);

function verdade(valor) {
    if (valor) {
        console.log(`È verdade ${valor}`);
    }
}

verdade();
verdade(null);
verdade(NaN);
verdade('');
verdade(0);
verdade(' ');
verdade('?');
verdade([]);
verdade([1,2,3]);
verdade({});