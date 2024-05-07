function contarStrings(array) {
	let contador = {};
	for (let i = 0; i < array.length; i++) {
		let chave = array[i];
		if (contador[chave]) {
			contador[chave]++;
		} else {
			contador[chave] = 1;
		}
	}
	return contador;
}

const strings = ['maça', 'banana', 'maça', 'bergamota', 'banana'];
const contagem = contarStrings(strings);
console.log(contagem);
