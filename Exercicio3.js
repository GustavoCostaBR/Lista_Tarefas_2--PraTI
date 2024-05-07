const prompt = require('prompt-sync')();

function receberEntradaInteira(mensagem) {
	let inteiro = "a";
	do {
		try {
			inteiro = parseInt(prompt(mensagem));
		} catch (error) {
			console.log("Informe um número inteiro, positivo válido! (somente a parte inteira será considerada)");
			inteiro = "a";
		}
		if (inteiro < 0) {
			console.log("Informe um número inteiro, positivo válido! (somente a parte inteira será considerada)");
			inteiro = "a";
		}
		else if (isNaN(inteiro)) {
			inteiro = "a";
			console.log("Informe um número inteiro, positivo válido!");
		}

	} while (inteiro == "a");
	return inteiro;
}

const PRECOKM1 = 0.5;
const PRECOKM2 = 0.45;

let kmRodados = receberEntradaInteira("Informe quantos km desejas percorrer!");
let precoPassagem;

if (kmRodados > 200) {
	precoPassagem = (kmRodados * PRECOKM2).toFixed(2);
	console.log(`O preço da passagem é de R$ ${precoPassagem}`);
}
else {
	precoPassagem = (kmRodados * PRECOKM1).toFixed(2);
	console.log(`O preço da passagem é de R$ ${precoPassagem}`);
}
