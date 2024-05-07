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


function encontrarMaiorElementoModulo(linha) {
	let maior = Math.abs(linha[0]);
	for (let i = 1; i < linha.length; i++) {
		const elemento = Math.abs(linha[i]);
		if (elemento > maior) {
			maior = elemento;
		}
	}
	return maior;
}

function dividirPorMaiorElementoModulo(linha, maior) {
	return linha.map(elemento => (elemento / maior).toFixed(2));
}

function imprimirMatriz(matriz) {
	for (let i = 0; i < matriz.length; i++) {
		console.log(matriz[i].join('	'));
	}
}

function gerarMatrizDivididaModulo(matriz) {
	let matrizModificada = matriz.map(linha => {
		let maior = encontrarMaiorElementoModulo(linha);
		return dividirPorMaiorElementoModulo(linha, maior);
	});
	return matrizModificada;
}

const LINHAS = 12;
const COLUNAS = 13;

const MATRIZ = criarMatriz(LINHAS, COLUNAS);
// Se quiser de fato ler a matriz comente o código acima e descomente o de baixo:
// const MATRIZ = criarMatriz2(LINHAS, COLUNAS);


const MATRIZMODIFICADA = gerarMatrizDivididaModulo(MATRIZ);

imprimirMatriz(MATRIZ);

console.log("\n");

imprimirMatriz(MATRIZMODIFICADA);

