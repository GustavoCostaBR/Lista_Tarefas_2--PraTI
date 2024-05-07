const prompt = require('prompt-sync')();

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
		if (inteiro <= 0) {
			console.log("Informe um número inteiromaior que 0! (somente a parte inteira será considerada)");
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

function receberEntradaDecimal(mensagem) {
	let decimal = "a";
	do {
		try {
			decimal = parseFloat(prompt(mensagem));
		} catch (error) {
			console.log("Informe um número decimal válido!");
			decimal = "a";
		}
		if (isNaN(decimal)) {
			decimal = "a";
			console.log("Informe um número decimal válido!");
		}

	} while (decimal == "a");
	return decimal;
}

function calcularSoma(vetor) {
	let soma = 0;
	for (let i = 0; i < vetor.length; i++) {
		soma += vetor[i];
	}
	return soma;
}

function calcularProduto(vetor) {
	let produto = 1;
	for (let i = 0; i < vetor.length; i++) {
		produto *= vetor[i];
	}
	return produto;
}

function calcularMedia(vetor) {
	return calcularSoma(vetor) / vetor.length;
}

function ordenarCrescente(vetor) {
	return vetor.sort((a, b) => a - b);
}

function imprimirVetor(vetor) {
	console.log("Vetor:", vetor);
}

function imprimirOpcoes2(mensagem, ...opcoes) {
	console.log(mensagem);
	for (let i = 0; i < opcoes.length; i++) {
		console.log(i + 1 + "- " + opcoes[i]);
	}
}

function preencherVetor(vetor) {
	for (let i = 0; i < 6; i++) {
		vetor.push(receberEntradaDecimal(`Informe o valor para a posição ${i}: `));
	}
}

const OPCAO1 = "Soma dos elementos;"
const OPCAO2 = "Produto dos elementos;"
const OPCAO3 = "Média dos elementos;"
const OPCAO4 = "Ordenar os elementos em ordem crescente;"
const OPCAO5 = "Imprimir vetor;"
const vetor = [];



preencherVetor(vetor);

imprimirOpcoes2("Informe o número da operação desejada (1 a 5): ", OPCAO1, OPCAO2, OPCAO3, OPCAO4, OPCAO5);

const operacao = receberEntradaInteira("Entrada: ", 5);

switch (operacao) {
	case 1:
		console.log("Soma dos elementos:", calcularSoma(vetor));
		break;
	case 2:
		console.log("Produto dos elementos:", calcularProduto(vetor));
		break;
	case 3:
		console.log("Média dos elementos:", calcularMedia(vetor));
		break;
	case 4:
		console.log("Elementos ordenados em ordem crescente:");
		imprimirVetor(ordenarCrescente(vetor));
		break;
	case 5:
		imprimirVetor(vetor);
		break;
	default:
		console.log("Operação inválida.");
}
