const prompt = require('prompt-sync')();

function imprimirOpcoes2(mensagem, ...opcoes){
	console.log(mensagem);
	for (let i = 0; i < opcoes.length ; i++){
		console.log(i +"- " + opcoes[i]);
	}
}

function receberEntradaDecimal(mensagem) {
	let decimal = "a";
	do {
		try {
			decimal = parseFloat(prompt(mensagem));
		} catch (error) {
			console.log("Informe um número decimal, positivo válido!");
			decimal = "a";
		}
		if (decimal < 0){
			console.log("Informe um número decimal, positivo válido!");
			decimal = "a";
		}

	} while (decimal == "a");
	 return decimal;
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

let continuar = true;
const SIM = "Sim";
const NAO = "Não";
let contadorSalarioAbaixo350 = 0;
let contador = 0;
let somaSalario = 0;
let somaFilhos = 0;
let maiorSalario = 0;

do {
	let salario = receberEntradaDecimal("Informe o salário: ");
	let filhos = receberEntradaInteira("Informe o número de filhos: ");
	imprimirOpcoes2("Deseja continuar? Informe somente o número!", SIM, NAO);
	if (receberEntradaInteira("Entrada: ", 1) == 1){
		continuar = false;
	}
	somaFilhos += filhos;
	somaSalario += salario;
	if (salario > maiorSalario) {
		maiorSalario = salario;
	}
	if (salario <= 350) {
		contadorSalarioAbaixo350++;
	}
	contador++;
} while (continuar);

console.log(`	Média de salários: R$ ${somaSalario/contador};
	Média do número de filhos: ${somaFilhos/contador};
	Maior salário: R$ ${maiorSalario};
	Percentual de pessoas com salário abaixo de R$ 350: ${contadorSalarioAbaixo350/contador*100}%.`)

