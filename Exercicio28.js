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

function calcularSomas(matriz) {
	let somaAcima = 0;
	let somaAbaixo = 0;
	for (let i = 0; i < matriz.length; i++) {
		for (let j = 0; j < matriz[i].length; j++) {
			if (i < j) {
				somaAcima += matriz[i][j];
			} else if (i > j) {
				somaAbaixo += matriz[i][j];
			}
		}
	}
	return [somaAcima, somaAbaixo];
}

function imprimirMatriz(matriz) {
	for (let i = 0; i < matriz.length; i++) {
		console.log(matriz[i].join('	'));
	}
}

const LINHAS = 10;
const COLUNAS = 10;

const MATRIZ = criarMatriz(LINHAS, COLUNAS);

let [somaAcima, somaAbaixo] = calcularSomas(MATRIZ);

imprimirMatriz(MATRIZ);

console.log("Soma dos elementos acima da diagonal principal:", somaAcima);
console.log("Soma dos elementos abaixo da diagonal principal:", somaAbaixo);

