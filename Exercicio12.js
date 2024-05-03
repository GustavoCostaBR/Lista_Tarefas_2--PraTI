let elementoAnterior = 0;
let elementoPosterior = 1;
let transicao;

for (let index = 0; index < 10; index++) {
	console.log(elementoPosterior);
	transicao = elementoAnterior;
	elementoAnterior = elementoPosterior;
	elementoPosterior += transicao;
}