
let vetor = [];
vetor[0] = 1;
vetor[1] = 1;


for (let index = 2; index < 15; index++) {
	vetor[index] = vetor[index - 1] + vetor[index - 2];
}

console.log(vetor);