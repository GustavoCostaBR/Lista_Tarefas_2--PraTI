const prompt = require('prompt-sync')();

function receberEntradaInteira(mensagem, limite) {
	if (limite == undefined){
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
		if (inteiro < 0){
			console.log("Informe um número inteiro, positivo válido! (somente a parte inteira será considerada)");
			inteiro = "a";
		}
		else if (inteiro > limite){
			console.log("Informe um número inteiro, positivo válido menor ou igual a " + limite + "!");
			inteiro = "a";
		}

	} while (inteiro == "a");
	 return inteiro;
}

const PONTOSPORHORA10 = 2;
const PONTOSPORHORA20 = 5;
const PONTOSPORHORA20PLUS = 10;
const DINHEIROPORPONTOS = 0.05;

let horasAtividade = receberEntradaInteira("Diga quantas horas de atividade física você realizou no mês: ");
let pontos;
let valorAReceber;

if (horasAtividade <= 10){
	pontos = PONTOSPORHORA10 * horasAtividade;
}
else if (horasAtividade <= 20){
	pontos = PONTOSPORHORA20 * horasAtividade;
}
else {
	pontos = PONTOSPORHORA20PLUS * horasAtividade;
}

valorAReceber = pontos * DINHEIROPORPONTOS;

console.log(`Você fez ${pontos} pontos e recebeu R$ ${valorAReceber.toFixed(2)}!`);