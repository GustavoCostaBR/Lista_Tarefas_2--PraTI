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

function imprimirMatriz(matriz) {
	for (let i = 0; i < matriz.length; i++) {
		console.log(matriz[i].join('	'));
	}
}

const LINHAS = 5;
const COLUNAS = 5;

const MATRIZ = criarMatriz(LINHAS, COLUNAS);

let somaLinha4 = somaLinha(MATRIZ, 4);
let somaColuna2 = somaColuna(MATRIZ, 2);
let somaDiagonalPrincipalVar = somaDiagonalPrincipal(MATRIZ);
let somaTotalVar = somaTotal(MATRIZ);

imprimirMatriz(MATRIZ);

console.log("Soma dos elementos da linha 4 de M: ", somaLinha4);
console.log("Soma dos elementos da coluna 2 de M: ", somaColuna2);
console.log("Soma dos elementos da diagonal principal: ", somaDiagonalPrincipalVar);
console.log("Soma de todos os elementos da matriz da matriz M: ", somaTotalVar);

