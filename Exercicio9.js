const prompt = require('prompt-sync')();

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

function imprimirOpcoes(mensagem, ...opcoes){
	console.log(mensagem);
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

const MASCULINO = "Masculino";
const FEMININO = "Feminino";
const SIM = "Sim";
const NAO = "Não";

let totalSalarioMasculino = 0;
let totalSalarioFeminino = 0;
let sexo;
let continuar;
do {
	imprimirOpcoes("Informe o sexo, digite apenas o número", MASCULINO, FEMININO);
	sexo = receberEntradaInteira("Entrada: ", 1);
	if (sexo == 0) {
		totalSalarioMasculino += receberEntradaDecimal("Informe o salário: ");
	}
	else {
		totalSalarioFeminino += receberEntradaDecimal("Informe o salário: ");
	}


	imprimirOpcoes("Deseja continuar? Informe somente o número: ", SIM, NAO);
	continuar = receberEntradaInteira("Entrada: ", 1);

} while (continuar == 0);

console.log(`O total do salário feminino é de R$ ${totalSalarioFeminino};
O total do salário feminino é de R$ ${totalSalarioMasculino};`);