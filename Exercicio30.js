function numeroAleatorio() {
	return Math.floor(Math.random() * 21) - 10; // Gera números entre -10 e 10
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


function somaLinha(matriz, linha) {
	let soma = 0;
	for (let elemento of matriz[linha - 1]) {
		soma += elemento;
	}
	return soma;
}

function somaColuna(matriz, coluna) {
	let soma = 0;
	for (let i = 0; i < matriz.length; i++) {
		soma += matriz[i][coluna - 1];
	}
	return soma;
}

function somaDiagonalPrincipal(matriz) {
	let soma = 0;
	for (let i = 0; i < matriz.length; i++) {
		soma += matriz[i][i];
	}
	return soma;
}


function somaTotal(matriz) {
	let soma = 0;
	for (let linha of matriz) {
		for (let elemento of linha) {
			soma += elemento;
		}
	}
	return soma;
}

function calcularSomas(matriz) {
	let SL = [];
	let SC = [];

	for (let i = 0; i < matriz.length; i++) {
		SL.push(somaLinha(matriz, i + 1));
	}

	// Calcular as somas das colunas
	for (let j = 0; j < matriz[0].length; j++) {
		SC.push(somaColuna(matriz, j + 1));
	}

	return [SL, SC];
}

function imprimirMatriz(matriz) {
	for (let i = 0; i < matriz.length; i++) {
		console.log(matriz[i].join('	'));
	}
}

const LINHAS = 2;
const COLUNAS = 2;

const MATRIZ = criarMatriz(LINHAS, COLUNAS);

let [somaLinhaVar, somaColunaVar] = calcularSomas(MATRIZ);

imprimirMatriz(MATRIZ);

console.log(somaLinhaVar);
console.log(somaColunaVar);

