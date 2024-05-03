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

const VELOCIDADEMAXIMA = 80;

let velocidadeCarro = receberEntradaInteira("Informe a velocidade do carro!");

if(velocidadeCarro > 80) {
	let multa = ((velocidadeCarro - VELOCIDADEMAXIMA) * 5).toFixed(2);
	console.log("Você foi multado em R$ " + multa);
}
