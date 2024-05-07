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

function criarVetorContadorNegativos(matriz) {
	const VETOR = [];
	for (let i = 0; i < matriz.length; i++) {
		VETOR[i] = 0;
		for (let j = 0; j < matriz[i].length; j++) {
			if (matriz[i][j] < 0) {
				VETOR[i]++;
			}
		}
	}
	return VETOR;
}

function numeroAleatorio() {
	return Math.floor(Math.random() * 21) - 10; // Gera números entre -10 e 10
}

const LINHAS = 6;
const COLUNAS = 8;

const MATRIZ = criarMatriz(LINHAS, COLUNAS);

const VETOR = criarVetorContadorNegativos(MATRIZ);

imprimirMatriz(MATRIZ);

console.log(VETOR);