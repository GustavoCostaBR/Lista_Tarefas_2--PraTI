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

const CARROPOPULAR = "Carro popular";
const CARROLUXO = "Carro luxo";
const PRECOKMCARROPOPULAR1 = 0.2;
const PRECOKMCARROPOPULAR2 = 0.1;
const PRECOKMCARROLUXO1 = 0.3;
const PRECOKMCARROLUXO2 = 0.25;

imprimirOpcoes(CARROLUXO, CARROPOPULAR);
let tipoCarro = receberEntradaInteira("Informe o tipo de carro desejado, somente o número: ", 1);

let kmPercorridos = receberEntradaInteira("Infome quantos km foram percorridos: ");
let diasAluguel = receberEntradaInteira("Informe por quantos dias o carro foi alugado: ");

let preco;

if (tipoCarro == 0){
	if (kmPercorridos <= 200){
		preco = diasAluguel * 150 + kmPercorridos * PRECOKMCARROLUXO1;
	}
	else {
		preco = diasAluguel * 150 + kmPercorridos * PRECOKMCARROLUXO2;
	}
}
else {
	if (kmPercorridos <= 100){
		preco = diasAluguel * 90 + kmPercorridos * PRECOKMCARROPOPULAR1;
	}
	else {
		preco = diasAluguel * 90 + kmPercorridos * PRECOKMCARROPOPULAR2;
	}
}

console.log("O preço a ser pago pelo aluguel é de R$ " + preco.toFixed(2));