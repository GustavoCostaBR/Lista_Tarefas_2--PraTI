const prompt = require('prompt-sync')();

function receberEntradaDecimal(mensagem) {
	let decimal = "a";
	do {
		try {
			decimal = parseFloat(prompt(mensagem));
		} catch (error) {
			console.log("Informe um número decimal, positivo válido!");
			decimal = "a";
		}
		if (isNaN(decimal)) {
			decimal = "a";
			console.log("Informe um número decimal válido!");
		}

	} while (decimal == "a");
	return decimal;
}

let termo = receberEntradaDecimal("Informe o primeiro termo da PA: ");
let razao = receberEntradaDecimal("Informe a razão da PA: ");
let soma = termo;
console.log(termo);
for (let i = 0; i < 9; i++) {
	termo += razao;
	console.log(termo);
	soma += termo;
}
console.log("Soma: " + soma);