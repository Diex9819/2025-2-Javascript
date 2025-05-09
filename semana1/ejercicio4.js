const {ask} = require('../helpers/input');

function obtenerMayor(num1, num2) {
    if (num1 > num2) {
        return  num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return -1;
    }
}
async function main() {
const num1 = Number(await ask('Ingresa el primer número: '));
const num2 = Number(await ask('Ingresa el segundo número: '));
const resultado = obtenerMayor(num1, num2);

if (resultado === -1) {
    console.log('Los números son iguales');
} else {
    console.log(`El número mayor es:,`, resultado);
}
}
main();
//////////////////////////////////////////////////////////////////////////////////////////
//de otra forma de aqui a abajo fue la ultima y es la mejor opcion
/////////////////////////////////////////////////////////////////////////////////////////
const { ask } = require('../helpers/input');

// TODO: Función que devuelve el mayor de dos números

function obtenerMayor(num1, num2) {
  if (num1 > num2) {
    return "Numero 1 es mayor" + num1;
  } else {
    return "Numero 2 es mayor" + num2;
  }
}

async function main() {
  const num1 = Number(await ask("Ingresa el primer número"));
  const num2 = Number(await ask("Ingresa el segundo número"));
  if (num1 === num2) {
    console.log("Lo siento, los números que introduciste son iguales, no es posible evaluarlos");
  } else {
    const resultado = obtenerMayor(num1, num2);
    console.log(resultado);
  }

}

main();