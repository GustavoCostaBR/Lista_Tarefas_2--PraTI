const prompt = require('prompt-sync')();

function imprimirOpcoes2(mensagem, ...opcoes) {
	console.log(mensagem);
	for (let i = 0; i < opcoes.length; i++) {
		console.log(i + "- " + opcoes[i]);
	}
}

function receberEntradaDecimal(mensagem) {
	let decimal = "a";
	do {
		try {
			decimal = parseFloat(prompt(mensagem));
		} catch (error) {
			console.log("Informe um número decimal, positivo válido!");
			decimal = "a";
		}
		if (decimal < 0) {
			console.log("Informe um número decimal, positivo válido!");
			decimal = "a";
		}
		else if (isNaN(decimal)) {
			decimal = "a";
			console.log("Informe um número decimal válido!");
		}

	} while (decimal == "a");
	return decimal;
}

function receberEntradaInteira(mensagem, limite) {
	if (limite == undefined) {
		limite = Number.MAX_SAFE_INTEGER;
	}
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
		else if (inteiro > limite) {
			console.log("Informe um número inteiro, positivo válido menor ou igual a " + limite + "!");
			inteiro = "a";
		}
		else if (isNaN(inteiro)) {
			inteiro = "a";
			console.log("Informe um número inteiro, positivo válido menor ou igual a " + limite + "!");
		}

	} while (inteiro == "a");
	return inteiro;
}

const FEMININO = "Feminino";
const MASCULINO = "Masculino";
let sexoNumero;
let peso;
let altura = receberEntradaDecimal("Informe sua altura em metros: ");

imprimirOpcoes2("Informe seu sexo, digite apenas o número!", FEMININO, MASCULINO);
sexoNumero = receberEntradaInteira("Entrada: ", 1);
peso = sexoNumero == 1 ? (72.7 * altura - 58) : (62.1 * altura - 44.7);


console.log("Peso ideal: " + peso);

