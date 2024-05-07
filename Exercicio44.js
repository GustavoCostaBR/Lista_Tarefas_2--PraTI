function contarPropriedadesString(objeto) {
	let contador = 0;
	for (let chave in objeto) {
		if (typeof objeto[chave] === 'string') {
			contador++;
		}
	}
	return contador;
}

const dados = {
	prop1: [1, 2, 3],
	prop2: 'string2',
	prop3: 42,
	prop4: ['a', 'b', 'c'],
	prop5: [true, false],
	prop6: 123
};

console.log(`${contarPropriedadesString(dados)}`);;