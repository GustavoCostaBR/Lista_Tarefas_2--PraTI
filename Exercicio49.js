function criarObjetoTransacoes(transacoes) {
	let objetoTransacoes = {};
	for (let i = 0; i < transacoes.length; i++) {
		let categoria = transacoes[i].categoria;
		if (objetoTransacoes[categoria]) {
			objetoTransacoes[categoria].arrayTransacoes.push(transacoes[i]);
			objetoTransacoes[categoria].subTotal += transacoes[i].valor;
		} else {
			objetoTransacoes[categoria] = {arrayTransacoes:[transacoes[i]], subTotal: transacoes[i].valor};
		}
	}
	return objetoTransacoes;
}

const TRANSACOES = [
	{ id: 1, valor: 100, data: new Date(2016, 12, 12), categoria: "deposito" },
	{ id: 5, valor: 250, data: new Date(2020, 12, 12), categoria: "deposito" },
	{ id: 2, valor: 200, data: new Date(2017, 12, 12), categoria: "boleto" },
	{ id: 3, valor: 150, data: new Date(2018, 12, 12), categoria: "pix" },
	{ id: 4, valor: 300, data: new Date(2019, 12, 12), categoria: "saque" },
	{ id: 5, valor: 250, data: new Date(2020, 12, 12), categoria: "deposito" }
];

const objetoTransacoes = criarObjetoTransacoes(TRANSACOES);

for (const categoria in objetoTransacoes) {
	console.log(`${categoria}`);
	console.log(objetoTransacoes[categoria]);
}