// 2. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// for ímpar ou falso se for par.

let valor = Number(prompt('Digite um valor inteiro'))

function parOuImpar (valor) {
    if (valor % 2 === 0) {
        console.log('Falso')
    } else {
        console.log('Verdadeiro')
    } 
}

parOuImpar(valor)