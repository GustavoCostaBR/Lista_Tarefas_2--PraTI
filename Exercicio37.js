const prompt = require('prompt-sync')();

function numeroAleatorio() {
	return Math.floor(Math.random() * 21) - 10; // Gera números entre -10 e 10
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
		respostas.push(prompt(`Resposta ${i + 1}: `));
	}
}

function verificarApostadores(NUMERODEELEMENTOS, NUMERODEALUNOS) {
	const gabarito = [];

	fazerCartilha("Informe o gabarito de respostas: ", NUMERODEELEMENTOS, gabarito);

	for (let i = 0; i < NUMERODEALUNOS; i++) {
		const respostas = [];
		fazerCartilha(`Informe as respostas do aluno ${i + 1}:`, NUMERODEELEMENTOS, respostas);


		const acertos = verificarAcertos(gabarito, respostas);

		// Exibindo o número do apostador e o número de acertos
		console.log(`O aluno teve ${acertos} acertos.`);
		if (acertos >=  NUMERODEELEMENTOS * 0.6) {
			console.log("APROVADO!");
		}
		else {console.log(`REPROVADO!`);}
		console.log("\n");
	}
}

const TAMANHO = 20;
const NUMERODEALUNOS = 50;

verificarApostadores(TAMANHO, NUMERODEALUNOS);

// let a = receberEntradaInteira("Informe um inteiro: ");
// console.log(`${a}`);
