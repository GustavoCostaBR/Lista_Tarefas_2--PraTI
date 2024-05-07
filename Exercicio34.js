const prompt = require('prompt-sync')();

function numeroAleatorio() {
	return Math.floor(Math.random() * 21) - 10; // Gera números entre -10 e 10
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
		else if (isNaN(decimal)) {
			decimal = "a";
			console.log("Informe um número decimal válido!");
		}

	} while (decimal == "a");
	return decimal;
}

function criarMatriz2(linhas, colunas) {
	const matriz = [];
	for (let i = 0; i < linhas; i++) {
		matriz[i] = [];
		for (let j = 0; j < colunas; j++) {
			matriz[i][j] = receberEntradaDecimal(`Informe um número real para a posição ${i}, ${j}: `);
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

function multiplicarMatrizpelaDiagonal(matriz) {
	for (let i = 0; i < matriz.length; i++) {
		const elementoDiagonalPrincipal = matriz[i][i];
		for (let j = 0; j < matriz[i].length; j++) {
			matriz[i][j] *= elementoDiagonalPrincipal;
		}
	}
}


function imprimirMatriz(matriz) {
	for (let i = 0; i < matriz.length; i++) {
		console.log(matriz[i].join('	'));
	}
}



const LINHAS = 50;
const COLUNAS = 50;

let matriz = criarMatriz(LINHAS, COLUNAS);
// Se quiser de fato ler a matriz comente o código acima e descomente o de baixo:
// const MATRIZ = criarMatriz2(LINHAS, COLUNAS);



imprimirMatriz(matriz);

console.log("\n");

multiplicarMatrizpelaDiagonal(matriz);

imprimirMatriz(matriz);

