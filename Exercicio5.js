const prompt = require('prompt-sync')();

function imprimirOpcoes(...opcoes){
	console.log("Selecione uma das opções abaixo, informe somente o número!");
	for (let i = 0; i < opcoes.length ; i++){
		console.log(i +"- " + opcoes[i]);
	}
}

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


const pedra = "Pedra";
const papel = "Papel";
const tesoura = "Tesoura";


imprimirOpcoes(pedra, papel, tesoura);
let primeiroJogador = receberEntradaInteira("Palpite do primeiro jogador!", 2);

imprimirOpcoes(pedra, papel, tesoura);
let segundoJogador = receberEntradaInteira("Palpite do segundo jogador!", 2);

if (primeiroJogador == 0 && segundoJogador == 1){
	console.log("O segundo jogador venceu, papel ganha de pedra!");
}
else if (primeiroJogador == 1 && segundoJogador == 0){
	console.log("O primeiro jogador venceu, papel ganha de pedra!");
}
else if (primeiroJogador == 0 && segundoJogador == 2){
	console.log("O primeiro jogador venceu, pedra ganha de tesoura!");
}
else if (primeiroJogador == 2 && segundoJogador == 0){
	console.log("O segundo jogador venceu, pedra ganha de tesoura!");
}
else if (primeiroJogador == 1 && segundoJogador == 2){
	console.log("O segundo jogador venceu, tesoura ganha de papel!");
}
else if (primeiroJogador == 2 && segundoJogador == 1){
	console.log("O primeiro jogador venceu, tesoura ganha de papel!");
}
else {
	console.log("Empatou!");
}



