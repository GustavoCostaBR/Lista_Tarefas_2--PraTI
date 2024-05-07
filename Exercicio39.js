const prompt = require('prompt-sync')();

function receberEntradaDecimal(mensagem) {
	let decimal = "a";
	do {
		try {
			decimal = parseFloat(prompt(mensagem));
		} catch (error) {
			console.log("Informe um número decimal válido!");
			decimal = "a";
		}
		if (isNaN(decimal)) {
			decimal = "a";
			console.log("Informe um número decimal válido!");
		}

	} while (decimal == "a");
	return decimal;
}

function compactarVetor(A) {
	let B = [];
	for (let i = 0; i < A.length; i++) {
		if (A[i] !== null && A[i] > 0) {
			B.push(A[i]);
		}
	}
	return B;
}

function preencherVetor(vetor, TAMANHO) {
	for (let i = 0; i < TAMANHO; i++) {
		vetor.push(receberEntradaDecimal(`Informe o valor para a posição ${i}: `));
	}
}

const VETOR = [];
const TAMANHO = 5;

preencherVetor(VETOR, TAMANHO);

// Interpretei "nulo" como null ou 0;
let B = compactarVetor(VETOR);
console.log(B);
