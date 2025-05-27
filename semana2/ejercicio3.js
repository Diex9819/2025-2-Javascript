const { ask } = require('../helpers/input');

async function main() {
    const nombres = ["Ana", "Roberto", "Luis", "Mariana", "Sol"];

    for (let i=0; i < nombres.length; i++) {
        if (nombres[i].length >= 5) {
            console.log(`${nombres[i]} tiene más de 5 caracteres`);
        }else {
            console.log(`${nombres[i]} tiene solo ${nombres[i].length} caracteres`);
        }
    }




    const nombres2 = ["Oscar", "Ana", "Luis", "Eduardo", "Isabel", "Mariana", "Ursula"];
    const vocales = ["a", "e", "i", "o", "u"];

    for (let a=0; a < nombres2.length; a++) {
        const primeraLetra = nombres2[a][0].toLowerCase();
        for (let b=0; b < vocales.length; b++) {
           if (primeraLetra === vocales[b]) {
                console.log(vocales[b]);
            }
        }
    }



    const palabraVolteada = await ask("Escribe una palabra: ");
    let resultado = "";
    for (let c = palabraVolteada.length - 1; c >= 0; c--) {
        resultado += palabraVolteada[c];
    }
    console.log (resultado);



}

main();
 