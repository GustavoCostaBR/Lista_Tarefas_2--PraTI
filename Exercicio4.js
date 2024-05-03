const prompt = require('prompt-sync')();
function receberEntradaDecimal(mensagem) {
	let decimal = "a";
	do {
		try {
			decimal = parseFloat(prompt(mensagem));
		} catch (error) {
			console.log("Informe um número decimal, positivo válido!");
			decimal = "a";
		}
		if (decimal < 0){
			console.log("Informe um número decimal, positivo válido!");
			decimal = "a";
		}

	} while (decimal == "a");
	 return decimal;
}

let segmento1 = receberEntradaDecimal("Informe o tamanho do primeiro seguimento de reta!");
let segmento2 = receberEntradaDecimal("Informe o tamanho do segundo seguimento de reta!");
let segmento3 = receberEntradaDecimal("Informe o tamanho do terceiro seguimento de reta!");

if ((segmento1+segmento2) > segmento3 && (segmento3+segmento2) > segmento1 && (segmento1+segmento3) > segmento2) {
	console.log("É possível formar um triânmgulo!");
}
else {
	console.log("É impossível formar um triângulo!");
}