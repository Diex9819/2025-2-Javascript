// Ejercicio: Crear una calculadora simple que realice operaciones básicas (suma, resta, multiplicación y división) entre dos números.

const { ask } = require('../helpers/input');

async function main() {
  const num1 = Number(await ask('Ingresa el primer número: '));
  const num2 = Number(await ask('Ingresa el segundo número: '));

  const suma = num1 + num2;
  const resta = num2 - num1;
  const multi = num1 * num2;
  const divi = num1 / num2;
  // TODO: Implementar la resta, multiplicación y división

  console.log('Si lo sumas obtienes: ', suma);
  console.log('Si restas el primero al segundo obtienes: ', resta);
  console.log('Si los multiplicas obtienes: ', multi);
  console.log('Si divides el primero entre el segundo obtienes: ', divi);
  // TODO: Mostrar el resultado de la resta, multiplicación y división

}

main();
