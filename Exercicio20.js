const prompt = require('prompt-sync')();

function imprimirOpcoes2(mensagem, ...opcoes) {
	console.log(mensagem);
	for (let i = 0; i < opcoes.length; i++) {
		console.log(i + "- " + opcoes[i]);
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
		if (decimal < 0) {
			console.log("Informe um número decimal, positivo válido!");
			decimal = "a";
		}

	} while (decimal == "a");
	return decimal;
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

let listaFuncionarios = [];
let continuar = true;
const SIM = "Sim";
const NAO = "Não";

do {
	let funcionario = {};
	funcionario.matricula = prompt("Informe a matrícula: ");
	funcionario.nome = prompt("Informe o nome: ");
	funcionario.salario = receberEntradaDecimal("Informe o salário: ");
	funcionario.inss = funcionario.salario * 0.12;
	funcionario.salarioLiquido = funcionario.salario - funcionario.inss;
	imprimirOpcoes2("Deseja continuar? Informe somente o número!", SIM, NAO);
	if (receberEntradaInteira("Entrada: ", 1) == 1) {
		continuar = false;
	}
	listaFuncionarios.push(funcionario);
} while (continuar);

for (const funcionario of listaFuncionarios) {
	console.log(`\n	Matrícula: ${funcionario.matricula};
	Nome: ${funcionario.nome};
	Salário bruto: R$${funcionario.salario};
	Dedução INSS: R$${funcionario.inss};
	Salário líquido: R$${funcionario.salarioLiquido}.\n`);
}
