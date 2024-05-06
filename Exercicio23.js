function criarMatrizIdentidade(tamanho) {
    const matriz = [];
    for (let i = 0; i < tamanho; i++) {
        matriz[i] = [];
        for (let j = 0; j < tamanho; j++) {
            matriz[i][j] = i === j ? 1 : 0;
        }
    }
    return matriz;
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
}

const TAMANHO = 7;
const MATRIZIDENTIDADE = criarMatrizIdentidade(TAMANHO);

imprimirMatriz(MATRIZIDENTIDADE);