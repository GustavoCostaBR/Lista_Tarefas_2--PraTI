const prompt = require('prompt-sync')();

function imprimirMatriz(matriz) {
	for (let i = 0; i < matriz.length; i++) {
		console.log(matriz[i].join('	'));
	}
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
		if (inteiro > limite) {
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

function criarMatriz2(linhas, colunas) {
	const matriz = [];
	for (let i = 0; i < linhas; i++) {
		matriz[i] = [];
		for (let j = 0; j < colunas; j++) {
			matriz[i][j] = receberEntradaInteira(`Informe um inteiro para a posição ${i}, ${j}: `);
		}
	}
	return matriz;
}

function multiplicarMatrizPorInteiro(matrizA, inteiro) {
	let linhasA = matrizA.length;
	let colunasA = matrizA[0].length;
	let vetor = [];

	for (let i = 0; i < linhasA; i++) {
		for (let j = 0; j < colunasA; j++) {
			vetor.push(matrizA[i][j] * inteiro);
		}
	}
	return vetor;
}


function numeroAleatorio() {
	return Math.floor(Math.random() * 21) - 10; // Gera números entre -10 e 10
}

const LINHAS = 6;
const COLUNAS = 6;

const MATRIZ = criarMatriz2(LINHAS, COLUNAS);
const VALOR_A = receberEntradaInteira("Informe o valor A pelo qual a matriz deve ser multiplicada: ")
const VETOR = multiplicarMatrizPorInteiro(MATRIZ, VALOR_A);


imprimirMatriz(MATRIZ);
console.log("\n");
console.log(VALOR_A);
console.log("\n");
console.log(VETOR);