// Práctica para casa:
// Imprimir números pares del 1 al 100
const { ask } = require('../helpers/input');

async function main() {
    let limite = 100;
  let i = 0;

  while (i <= limite) {
    console.log(i);
    i+=2; 
  }
  i = limite

}

main();