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

function verificarAcertos(gabarito, respostas) {
	let acertos = 0;
	for (let i = 0; i < gabarito.length; i++) {
		if (gabarito[i] === respostas[i]) {
			acertos++;
		}
	}
	return acertos;
}

function fazerCartilha(mensagem, NUMERODEELEMENTOS, respostas) {
	console.log(mensagem);
	for (let i = 0; i < NUMERODEELEMENTOS; i++) {
		respostas.push(receberEntradaInteira(`Resposta ${i + 1}: `));
	}
}

function verificarApostadores(NUMERODEELEMENTOS, NUMERODEAPOSTADORES) {
	const gabarito = [];

	fazerCartilha("Informe o gabarito de respostas: ", NUMERODEELEMENTOS, gabarito);

	for (let i = 0; i < NUMERODEAPOSTADORES; i++) {
		const numeroCartao = receberEntradaInteira(`Informe o número do cartão do apostador ${i + 1}: `);
		const respostas = [];
		fazerCartilha(`Informe as respostas do apostador ${i + 1}:`, NUMERODEELEMENTOS, respostas);


		const acertos = verificarAcertos(gabarito, respostas);

		// Exibindo o número do apostador e o número de acertos
		console.log(`Apostador ${numeroCartao} teve ${acertos} acertos.`);
		if (acertos === NUMERODEELEMENTOS) {
			console.log("Parabéns, tu foste o GANHADOR!");
		}
		console.log("\n");
	}
}

const TAMANHO = 13;
const NUMERODEAPOSTADORES = 100;

verificarApostadores(TAMANHO, NUMERODEAPOSTADORES);

// let a = receberEntradaInteira("Informe um inteiro: ");
// console.log(`${a}`);
