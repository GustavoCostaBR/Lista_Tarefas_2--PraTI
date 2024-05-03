const prompt = require('prompt-sync')();

let lista = [];

for (let index = 0; index < 10; index++) {
	lista.push(prompt(`Digite o nome de índice igual a ${index}: `));
}

for (let index = lista.length - 1; index >= 0; index--) {
	if (lista[index] % 2 == 0) {
		console.log(`Valor: ${lista[index]}`);
		console.log(`Índice: ${index}`);
	}
}


