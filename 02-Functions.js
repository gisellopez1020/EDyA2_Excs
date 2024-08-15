function determinarParImpar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " es par");
    } else {
        console.log(numero + " es impar");
    }
}
determinarParImpar(5)
determinarParImpar(10)

const determinarParImparFlecha = (numero) => {
    if (numero % 2 === 0) {
        console.log(numero + " es par");
    } else {
        console.log(numero + " es impar");
    }
}

determinarParImparFlecha(4);
determinarParImparFlecha(7);

