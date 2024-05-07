const prompt = require('prompt-sync')();

let listaNome = [];
let listaIdade = []
for (let index = 0; index < 9; index++) {
	listaNome[index] = prompt("Informe o nome: ");
	listaIdade[index] = prompt("Informe a idade: ");
}
let contador = 0;
for (let index = 0; index < 9; index++) {
	if (listaIdade[index] < 18) {
		if (contador == 0) {
			console.log("\n\nDados das pessoas menores de idade:\n");
			contador++;
		}
		console.log(`Idade: ${listaIdade[index]}; Nome: ${listaNome[index]};`)
	}
}