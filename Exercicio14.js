const prompt = require('prompt-sync')();

let lista = [];

for (let index = 0; index < 7; index++) {
	lista.push(prompt(`Digite o nome de índice igual a ${index}: `));
}

for (let index = lista.length - 1; index >= 0; index--) {
	console.log(lista[index]);
}

