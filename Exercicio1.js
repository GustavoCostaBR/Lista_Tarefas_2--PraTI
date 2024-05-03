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
		if (inteiro < 0){
			console.log("Informe um número inteiro, positivo válido! (somente a parte inteira será considerada)");
			inteiro = "a";
		}

	} while (inteiro == "a");
	 return inteiro;
}


const DIASPERDIDOSPORCIGARRO = 10/24/60;
const DIASNOANO = 365;

let cigarrosPorDia =  receberEntradaInteira("Quantos cigarrros você fumou por dia?");
let anosFumando = receberEntradaInteira("Quantos anos você fumou?");

let diasPerdidos = (cigarrosPorDia * anosFumando * DIASPERDIDOSPORCIGARRO * DIASNOANO).toFixed(2);


// O resultado nunca é menor que 1 para ser singular
if (diasPerdidos > 1){
	console.log(`${diasPerdidos} dias de vida foram perdidos!`);
}
else {
	console.log(`Nenhum dia de vida foi perdido, parabéns, você não fumou!`);
}
