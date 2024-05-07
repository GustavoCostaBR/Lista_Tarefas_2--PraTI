const prompt = require('prompt-sync')();

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

let numeroSorteado = (parseInt(Math.random() * 5)) + 1;

let chuteJogador = receberEntradaInteira("Informe um inteiro entre 1 e 5 (inclusos)!", 5);

if (chuteJogador == numeroSorteado) {
	console.log("Parabéns, você acertou! O número sorteado foi " + numeroSorteado + ".");
}
else {
	console.log("Você errou! O número sorteado foi " + numeroSorteado + ".");
}