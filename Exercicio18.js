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

let funcionario = {}

funcionario.nome = prompt("Informe o seu nome: ");
funcionario.cargo = prompt("Informe o seu cargo: ");
funcionario.salario = receberEntradaDecimal("Informe seu salário: ");

console.log("\n\nInformações do funcionário: ");
for (const iterator in funcionario) {
	console.log(funcionario[iterator]);
}
