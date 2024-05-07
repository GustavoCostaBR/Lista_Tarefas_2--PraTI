function combinarObjetos(objeto1, objeto2) {
	const objetoCombinado = {};

	for (const key in objeto1) {
		objetoCombinado[key] = objeto1[key];
	}

	for (const key in objeto2) {
		objetoCombinado[key] = objeto2[key];
	}

	return objetoCombinado;
}

const objeto1 = { a: 1, b: 2 };
const objeto2 = { b: 3, c: 4 };

const objetoCombinado = combinarObjetos(objeto1, objeto2);
console.log(objetoCombinado);
