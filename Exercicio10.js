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
		if (inteiro > limite){
			console.log("Informe um número inteiro, positivo válido menor ou igual a " + limite + "!");
			inteiro = "a";
		}

	} while (inteiro == "a");
	 return inteiro;
}

function imprimirOpcoes2(mensagem, ...opcoes){
	console.log(mensagem);
	for (let i = 0; i < opcoes.length ; i++){
		console.log(i +"- " + opcoes[i]);
	}
}

const SIM = "Sim";
const NAO = "Não";

let menorValor = Number.MAX_SAFE_INTEGER;
let contador = 0;
let soma = 0;
let contadorPares = 0;
let valor;
let continuar;
do {
	valor = receberEntradaInteira("Informe o valor: ");
	soma += valor;
	if (valor < menorValor){
		menorValor = valor;
	}
	if (valor % 2 == 0){
		contadorPares++;
	}
	contador++;
	imprimirOpcoes2("Deseja continuar? Informe somente o número: ", SIM, NAO);
	continuar = receberEntradaInteira("Entrada: ", 1);
} while (continuar == 0);

let media = soma/contador;

console.log(`Somatório: ${soma};
Menor valor: ${menorValor};
Média: ${media};
Quantidade de valores pares: ${contadorPares}.`);
