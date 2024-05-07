function sumarizarVendas(vendas) {
	let totalPorVendedor = {};
	for (let i = 0; i < vendas.length; i++) {
		let venda = vendas[i];
		let vendedor = venda.vendedor;
		let valor = venda.valor;
		let quantidade = 1;
		if (totalPorVendedor[vendedor]) {
			totalPorVendedor[vendedor].valor += valor;
			totalPorVendedor[vendedor].quantidade += quantidade;
		} else {
			totalPorVendedor[vendedor] = { valor, quantidade };
		}
	}
	return totalPorVendedor;
}

const vendas = [
	{ vendedor: 'João', valor: 100 },
	{ vendedor: 'Maria', valor: 200 },
	{ vendedor: 'João', valor: 150 },
	{ vendedor: 'Maria', valor: 300 },
	{ vendedor: 'Pedro', valor: 250 }
];

const totalPorVendedor = sumarizarVendas(vendas);
for (const key in totalPorVendedor) {
	console.log(`${key}: Valor: ${totalPorVendedor[key].valor}, Vendas: ${totalPorVendedor[key].quantidade}`);
}


