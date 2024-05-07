const prompt = require('prompt-sync')();
function numeroAleatorio() {
	return Math.floor(Math.random() * 21) - 10; // Gera números entre -10 e 10
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


function criarMatriz(linhas, colunas) {
	const matriz = [];
	for (let i = 0; i < linhas; i++) {
		matriz[i] = [];
		for (let j = 0; j < colunas; j++) {
			matriz[i][j] = numeroAleatorio();
		}
	}
	return matriz;
}


function contarValoresIguais(A, matriz) {
	let contador = 0;
	for (let linha of matriz) {
		for (let elemento of linha) {
			if (elemento === A) {
				contador++;
			}
		}
	}
	return contador;
}

function criarMatrizX(valorA, matrizV) {
	let matrizX = [];
	for (let linha of matrizV) {
		let novaLinha = linha.map(elemento => elemento === valorA ? 'A' : elemento);
		matrizX.push(novaLinha);
	}
	return matrizX;
}

function imprimirMatriz(matriz) {
	for (let i = 0; i < matriz.length; i++) {
		console.log(matriz[i].join('	'));
	}
}

const LINHAS = 30;
const COLUNAS = 30;
const A = 3;
// Se quiser de fato ler "A" comente o código acima e descomente o de baixo:
// const A = receberEntradaInteira("Informe um valor inteiro");

const MATRIZ = criarMatriz(LINHAS, COLUNAS);
// Se quiser de fato ler a matriz comente o código acima e descomente o de baixo:
// const MATRIZ = criarMatriz2(LINHAS, COLUNAS);

const CONTADOR = contarValoresIguais(A, MATRIZ);

const MATRIZX = criarMatrizX(A, MATRIZ);

imprimirMatriz(MATRIZ);

console.log("\n");

console.log(`Valor A a ser procurado: ${A};`);

console.log("\n");

console.log(`Contador: ${CONTADOR};`);

console.log("\n");

imprimirMatriz(MATRIZX)

