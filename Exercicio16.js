let lista = [];
for (let index = 0; index < 20; index++) {
	let numeroSecreto = Math.floor(Math.random() * 100);
	lista.push(numeroSecreto);
}
console.log(`Lista original: ${lista}`);
let listaEmOrdem = lista.sort((a, b) => a - b);
console.log(`Lista ordenada: ${listaEmOrdem}`);