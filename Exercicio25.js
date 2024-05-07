function imprimirMatriz(matriz) {
	for (let i = 0; i < matriz.length; i++) {
		console.log(matriz[i].join('	'));
	}
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

function criarVetorSomadorColunas(matriz) {
	const VETOR = [];
	for (let i = 0; i < matriz[0].length; i++) {
		VETOR[i] = 0;
		for (let j = 0; j < matriz.length; j++) {
			VETOR[i] += matriz[j][i];

		}
	}
	return VETOR;
}

function numeroAleatorio() {
	return Math.floor(Math.random() * 21) - 10; // Gera números entre -10 e 10
}

const LINHAS = 15;
const COLUNAS = 20;

const MATRIZ = criarMatriz(LINHAS, COLUNAS);

const VETOR = criarVetorSomadorColunas(MATRIZ);

imprimirMatriz(MATRIZ);

console.log(VETOR);