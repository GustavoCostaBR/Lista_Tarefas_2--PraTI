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

function calcularMediaDiagonalSecundaria(matriz) {
	let soma = 0;
	for (let i = 0; i < matriz.length; i++) {
		soma += matriz[i][matriz.length - 1 - i];
	}
	return (soma / matriz.length).toFixed(2);
}



function imprimirMatriz(matriz) {
	for (let i = 0; i < matriz.length; i++) {
		console.log(matriz[i].join('	'));
	}
}

function multiplicarDiagonalPrincipal(matriz, media) {
	for (let i = 0; i < matriz.length; i++) {
		matriz[i][i] *= media;
	}
}


const LINHAS = 3;
const COLUNAS = 3;

let matriz = criarMatriz(LINHAS, COLUNAS);
// Se quiser de fato ler a matriz comente o código acima e descomente o de baixo:
// const MATRIZ = criarMatriz2(LINHAS, COLUNAS);

const MEDIA = calcularMediaDiagonalSecundaria(matriz);


imprimirMatriz(matriz);

console.log("\n");

console.log(`A média é: ${MEDIA}`);

console.log("\n");

multiplicarDiagonalPrincipal(matriz, MEDIA);

imprimirMatriz(matriz);

