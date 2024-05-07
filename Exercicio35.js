const prompt = require('prompt-sync')();

function numeroAleatorio() {
	return Math.floor(Math.random() * 21) - 10; // Gera números entre -10 e 10
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

function ehPar(numero) {
	return numero % 2 === 0;
}

function separarValores(tamanho) {
	const vetorPares = [];
	const vetorImpares = [];
	let contPares = 0;
	let contImpares = 0;

	for (let i = 0; i < tamanho; i++) {
		const valor = receberEntradaInteira("Informe um inteiro válido: ")

		if (ehPar(valor)) {
			vetorPares[contPares++] = valor;
			if (contPares === 5) {
				console.log("Vetor de pares está cheio:");
				console.log(vetorPares);
				contPares = 0;
			}
		} else {
			vetorImpares[contImpares++] = valor;
			if (contImpares === 5) {
				console.log("Vetor de ímpares está cheio:");
				console.log(vetorImpares);
				contImpares = 0;
			}
		}
	}

	// Os vetores não foram limpos, apenas sobreescritos
	console.log(vetorPares);
	console.log(vetorImpares);


}
const TAMANHO = 30;

separarValores(TAMANHO);
