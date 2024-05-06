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

function multiplicarMatrizes(matrizA, matrizB) {
    let linhasA = matrizA.length;
    let colunasA = matrizA[0].length;
    let linhasB = matrizB.length;
    let colunasB = matrizB[0].length;

    if (colunasA !== linhasB) {
        console.error("As dimensões das matrizes não são compatíveis para a multiplicação.");
        return;
    }

    let resultado = [];
    for (let i = 0; i < linhasA; i++) {
        resultado[i] = new Array(colunasB).fill(0);
    }

    for (let i = 0; i < linhasA; i++) {
        for (let j = 0; j < colunasB; j++) {
            for (let k = 0; k < colunasA; k++) {
                resultado[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    return resultado;
}


function numeroAleatorio() {
	return Math.floor(Math.random() * 21) - 10; // Gera números entre -10 e 10
}

const LINHAS = 3;
const COLUNAS = 3;

const MATRIZ = criarMatriz(LINHAS, COLUNAS);
const MATRIZ2 = criarMatriz(LINHAS, COLUNAS);

const RESULTADOMULTIPLICACAOMATRIZ = multiplicarMatrizes(MATRIZ, MATRIZ2);

imprimirMatriz(MATRIZ);
console.log("\n");
imprimirMatriz(MATRIZ2);
console.log("\n");
imprimirMatriz(RESULTADOMULTIPLICACAOMATRIZ);